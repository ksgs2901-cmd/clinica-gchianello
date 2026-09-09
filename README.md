# Clínica Odontológica Dr. Giovani Chianello

## 📋 Descrição
Site profissional de alta conversão para clínica odontológica com foco em levar leads para WhatsApp e Instagram. Desenvolvido com HTML5, CSS3 moderno e JavaScript para máxima interatividade e responsividade.

## ✨ Características Principais

### 🎯 Foco em Conversão
- **Botões CTA estratégicos** em múltiplas seções
- **Links diretos para WhatsApp** em destaque
- **Call-to-action flutuante** (botão WhatsApp fixo)
- **Formulário de contato integrado** que envia via WhatsApp

### 📱 Responsivo e Moderno
- Design mobile-first
- Totalmente responsivo (mobile, tablet, desktop)
- Menu hambúrguer inteligente em mobile
- Velocidade otimizada

### 🎨 Design Profissional
- Paleta de cores azuis e brancas (profissional para saúde)
- Tipografia moderna e legível
- Ícones Font Awesome
- Gradientes modernos
- Sombras e efeitos sutis

### 🚀 Interatividade
- Scroll suave para navegação
- Animações de scroll reveal
- Contadores animados nas estatísticas
- Validação de formulário
- Parallax effect no hero

## 📁 Estrutura de Arquivos

```
clinica-odontologica/
├── index.html          # Página principal
├── css/
│   └── style.css       # Estilos completos
├── js/
│   └── script.js       # Interatividade e funcionalidades
├── images/             # Pasta para imagens (criar manualmente)
├── README.md           # Este arquivo
└── .gitignore          # Arquivos a ignorar no Git (opcional)
```

## 🔧 Como Usar

### Instalação
1. Clone ou baixe a pasta `clinica-odontologica`
2. Abra o arquivo `index.html` em um navegador moderno
3. Ou hospede em um servidor web (recomendado)

### Customização

#### 1. Alterar Informações Básicas
Edite `index.html` e procure por:
- `Dr. Giovani Chianello` - Seu nome
- `(12) 3635-4828` - Seu telefone
- `(12) 98860-6134` - Seu WhatsApp
- `@gchianello` - Seu Instagram

#### 2. Adicionar Imagens
1. Crie uma pasta `images` na raiz do projeto
2. Coloque suas imagens (formato: `.jpg`, `.png`, `.webp`)
3. Substitua as seções de placeholder:

**Para Hero Section:**
```html
<!-- Substitua this em index.html linha ~53 -->
<div class="hero-image">
    <div class="placeholder-image">
        <i class="fas fa-tooth"></i>
    </div>
</div>

<!-- Por isto: -->
<div class="hero-image">
    <img src="images/hero.jpg" alt="Dr. Giovani Chianello">
</div>
```

**Para Galeria de Casos:**
```html
<!-- Substitua as divs com classe galeria-placeholder por: -->
<img src="images/case-01.jpg" alt="Caso de sucesso 01">
<img src="images/case-02.jpg" alt="Caso de sucesso 02">
<!-- ... etc -->
```

**Para Sobre Section:**
```html
<!-- Substitua a div com classe sobre-image por: -->
<div class="sobre-image">
    <img src="images/dr-giovani.jpg" alt="Dr. Giovani Chianello">
</div>
```

#### 3. Estilo CSS Personalizável
As cores podem ser facilmente alteradas em `css/style.css`:

```css
:root {
    --primary-color: #0066cc;      /* Azul principal */
    --secondary-color: #00a8e8;    /* Azul secundário */
    --accent-color: #00d4ff;       /* Acento */
    --dark-color: #1a1a1a;         /* Texto escuro */
    --text-color: #333333;         /* Cor do texto */
}
```

## 📊 Seções do Site

1. **Header/Navegação** - Menu sticky com logo
2. **Hero** - Título principal com CTA
3. **Sobre** - Informações do Dr. e diferenciais
4. **Serviços** - 6 cards com serviços principais
5. **Galeria** - Antes e depois dos casos
6. **Depoimentos** - Testimoniais de pacientes
7. **CTA Principal** - Grande call-to-action
8. **Contato** - Informações e formulário
9. **Footer** - Links e redes sociais

## 🔗 Links Importantes

- **WhatsApp**: `https://wa.me/5512988606134`
- **Instagram**: `https://www.instagram.com/gchianello/`

> Substitua os números e usernames pelos seus!

## 📱 Otimizações

### SEO
- Meta tags descritivas
- H1, H2 estruturados
- Alt text em imagens (adicione suas imagens)
- Schema markup (recomendado adicionar)

### Performance
- CSS minificado
- JavaScript otimizado
- Imagens em formato moderno (WebP recomendado)
- Lazy loading (pode ser adicionado)

### Conversão
- CTA em múltiplas seções
- Botão WhatsApp flutuante
- Formulário com envio via WhatsApp
- Depoimentos e prova social
- Estatísticas impressionantes

## 🎯 Dicas de Uso

### Para Maximizar Conversão
1. **Use imagens de qualidade** - Fotos profissionais do consultório e do Dr.
2. **Adicione realmente casos antes/depois** - Isso é muito convincente
3. **Coloque depoimentos reais** - Ou vídeos de pacientes satisfeitos
4. **Mantenha atualizado** - Regularmente adicione novos cases
5. **Integre com Analytics** - Rastreie comportamento dos visitantes

### Links de Referência
- [Font Awesome Icons](https://fontawesome.com/icons) - Para mudar ícones
- [Google Fonts](https://fonts.google.com) - Para novas fontes
- [Web.dev](https://web.dev) - Para otimizar performance

## 🛠️ Ferramentas Recomendadas

- **Compressor de Imagens**: TinyPNG, ImageOptim
- **Editor de Código**: VS Code, Sublime Text
- **Teste de Responsividade**: Chrome DevTools
- **Analytics**: Google Analytics 4
- **Hospedagem**: Vercel, Netlify, GitHub Pages, Hostinger

## 📧 Suporte e Customização

### Funcionalidades Que Podem Ser Adicionadas
- [ ] Chat ao vivo
- [ ] Agendamento online integrado
- [ ] Página de blog/dicas
- [ ] Galeria de vídeos
- [ ] Integração com Google Maps
- [ ] Certificados e credibilidade
- [ ] FAQ dinâmico
- [ ] Newsletter signup
- [ ] Integração com CRM
- [ ] Dark mode

## ⚙️ Configuração Avançada

### Google Analytics
Adicione no `<head>` do `index.html`:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Meta Pixel (Facebook)
Adicione no `<head>` do `index.html`:
```html
<!-- Meta Pixel Code -->
<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1" />
```

## 📝 Licença
Projeto livre para uso pessoal e comercial.

## 🚀 Próximos Passos

1. ✅ Adicionar imagens reais
2. ✅ Alterar informações de contato
3. ✅ Adicionar depoimentos reais
4. ✅ Configurar analytics
5. ✅ Testar responsividade
6. ✅ Fazer backup
7. ✅ Publicar online

---

**Criado com ❤️ para transformar sorrisos e restaurar autoestima!**

Última atualização: 2024
