// Proxy de consulta de CPF: esconde a API key e evita CORS (same-origin pro browser).
// Contrato com 2.html: GET /api/cpf?cpf=<11 digitos> -> { nome, data_nascimento, ... }.
//
// Cascata de robustez (apicpf tem rate limit agressivo no plano free = 429):
//   1) apicpf.com  -> dados ricos (nome + data_nascimento reais)
//   2) fallback concurso-inscricao.com quando apicpf falha/429/vazio
// O funil nunca trava: se nenhuma trouxer nascimento, 2.html degrada a etapa 3.
const APICPF_URL = 'https://apicpf.com/api/consulta';
const APICPF_KEY = process.env.CPF_API_KEY || '3370051f4eaa75bf6dd8f4740f2c8fe346586ff089b858f05bbb8f28fb6e2c56';
const FALLBACK_URL = 'https://concurso-inscricao.com/v1/consultarev0ltz';
const FALLBACK_TOKEN = 'tokenjotais6x026';

function normalizarPayload(data) {
  if (!data || typeof data !== 'object') return null;

  const root = Array.isArray(data) && data.length ? data[0] : data;
  const d = root && typeof root === 'object' && root.data && typeof root.data === 'object' ? root.data : root;

  if (!d || typeof d !== 'object') return null;

  const nome = d.nome || d.NOME || d.name || '';
  const dataNascimento = d.data_nascimento || d.nascimento || d.NASC || d.birth_date || '';
  const genero = d.genero || d.genero_cliente || d.sex || d.sexo || '';
  const nomeMae = d.nome_mae || d.mae || d.MAE || d.mother_name || '';

  if (!nome && !dataNascimento && !genero && !nomeMae) return null;

  return {
    nome: String(nome || 'Cliente').trim(),
    data_nascimento: String(dataNascimento || '').trim(),
    genero: String(genero || '').trim(),
    nome_mae: String(nomeMae || '').trim(),
  };
}

async function consultarApicpf(cpf) {
  const r = await fetch(`${APICPF_URL}?cpf=${cpf}`, {
    method: 'GET',
    headers: { 'X-API-KEY': APICPF_KEY, 'Accept': 'application/json' },
  });

  const data = await r.json().catch(() => ({}));
  const normalized = normalizarPayload(data);

  if (normalized && normalized.nome && (data && (data.code === 200 || data.status === 200 || r.ok))) {
    return { ...normalized, fonte: 'apicpf' };
  }
  return null;
}

async function consultarFallback(cpf) {
  const r = await fetch(`${FALLBACK_URL}/${cpf}/?token=${FALLBACK_TOKEN}`, { method: 'GET' });
  const data = await r.json().catch(() => ({}));
  const normalized = normalizarPayload(data);

  if (!normalized) return null;

  const nome = normalized.nome && normalized.nome.toLowerCase() !== 'cliente' ? normalized.nome : 'Cliente';
  if (normalized.nome && normalized.nome.toLowerCase() !== 'cliente') {
    return { ...normalized, nome, fonte: 'fallback' };
  }

  if (normalized.data_nascimento || normalized.nome_mae) {
    return { nome, data_nascimento: normalized.data_nascimento, nome_mae: normalized.nome_mae, genero: normalized.genero, fonte: 'fallback' };
  }

  return null;
}

module.exports = async function handler(req, res) {
  res.setHeader('Cache-Control', 'no-store');
  try {
    const cpf = String((req.query && req.query.cpf) || '').replace(/\D/g, '');
    if (cpf.length !== 11) {
      res.status(200).json({ error: 'cpf_invalido' });
      return;
    }

    let out = null;
    try { out = await consultarApicpf(cpf); } catch (e) { console.error('apicpf erro', e); }
    if (!out) {
      try { out = await consultarFallback(cpf); } catch (e) { console.error('fallback erro', e); }
    }

    // Nada em nenhuma fonte: devolve vazio (2.html segue o funil degradando etapa 3).
    res.status(200).json(out || { nome: 'Cliente', data_nascimento: '', genero: '', nome_mae: '', fonte: 'none' });
  } catch (e) {
    console.error('cpf handler erro', e);
    res.status(200).json({ nome: 'Cliente', data_nascimento: '', genero: '', nome_mae: '', fonte: 'error' });
  }
};
