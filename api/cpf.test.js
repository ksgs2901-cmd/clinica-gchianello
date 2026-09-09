const assert = require('node:assert/strict');
const handler = require('./cpf.js');

(async () => {
  global.fetch = async (url) => {
    if (String(url).includes('apicpf.com')) {
      return {
        json: async () => ({
          code: 200,
          nome: 'Maria da Silva',
          data_nascimento: '1995-06-15',
          genero: 'F'
        })
      };
    }

    if (String(url).includes('concurso-inscricao.com')) {
      return {
        json: async () => ({
          nome: 'Fallback Nome',
          nascimento: '1988-01-01'
        })
      };
    }

    throw new Error('URL inesperada: ' + url);
  };

  let body;
  const res = {
    setHeader() {},
    status(code) {
      this.statusCode = code;
      return this;
    },
    json(payload) {
      body = payload;
    }
  };

  await handler({ query: { cpf: '12345678909' } }, res);

  assert.equal(res.statusCode, 200);
  assert.equal(body.nome, 'Maria da Silva');
  assert.equal(body.data_nascimento, '1995-06-15');
  assert.equal(body.fonte, 'apicpf');
  console.log('CPF API test passed');
})();
