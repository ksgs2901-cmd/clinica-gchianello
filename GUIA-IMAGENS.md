# 📸 Guia de Imagens para o Site

## Onde Encontrar Imagens de Qualidade

### Opção 1: Usar do Instagram
- Acesse: https://www.instagram.com/gchianello/
- Clique nas fotos que deseja
- Clique nos 3 pontos (menu) → Copiar link
- Salve as imagens localmente para o site

### Opção 2: Plataformas Gratuitas
Se precisar de imagens adicionais, use:
- **Unsplash** (https://unsplash.com) - Busque: "dental", "smile", "doctor"
- **Pexels** (https://pexels.com) - Mesma busca
- **Pixabay** (https://pixabay.com) - Sem atribuição necessária
- **Freepik** (https://freepik.com) - Imagens premium grátis

### Opção 3: Banco de Imagens Profissional
- **Shutterstock**
- **Getty Images**
- **Adobe Stock**
- **iStock**

## 🎯 Imagens Recomendadas por Seção

### 1. Hero Section (hero.jpg)
**Recomendações:**
- Foto do Dr. Giovani profissional
- Ou consultório moderno
- Ou paciente sorrindo após tratamento
- **Tamanho**: 1200x600px ou 1920x1080px
- **Formato**: JPG ou WebP
- **Características**: Profissional, clara, luminosa

### 2. Sobre Section (dr-giovani.jpg)
**Recomendações:**
- Foto profissional do Dr.
- Em consultório
- Sorridente e acessível
- **Tamanho**: 500x500px (quadrada)
- **Formato**: JPG ou PNG
- **Características**: Retrato de qualidade, bem iluminado

### 3. Galeria de Casos - Antes e Depois
**Necessário**: 6 imagens
- **Nomes sugeridos**: 
  - case-01.jpg, case-01-after.jpg
  - case-02.jpg, case-02-after.jpg
  - ... até case-06
- **Tamanho**: 500x500px ou 600x400px
- **Formato**: JPG (melhor compressão)
- **Características**: 
  - Foco nos sorrisos
  - Boa iluminação
  - Antes e depois claramente identificáveis
  - Discreto com identidade dos pacientes

### 4. Serviços (Ícones ou Imagens)
Se quiser substituir os ícones por fotos:
- **odontologia-estetica.jpg**
- **implantes.jpg**
- **protese.jpg**
- **clareamento.jpg**
- **limpeza.jpg**
- **harmonizacao.jpg**
- **Tamanho**: 400x400px
- **Formato**: JPG ou PNG

## 🛠️ Como Adicionar Imagens

### Passo 1: Preparar a Imagem
1. Use editor como **Photoshop**, **GIMP** (grátis), ou online **Canva**
2. Redimensione para o tamanho recomendado
3. Comprima o arquivo (TinyPNG, ImageOptim)
4. Salve em JPG para fotos (menor tamanho) ou PNG para transparência

### Passo 2: Criar Pasta de Imagens
```bash
clinica-odontologica/
├── images/
│   ├── hero.jpg
│   ├── dr-giovani.jpg
│   ├── case-01.jpg
│   └── ... (mais imagens)
```

### Passo 3: Adicionar ao HTML
Abra `index.html` e substitua:

**Hero Section (linha ~53):**
```html
<!-- Antes: -->
<div class="hero-image">
    <div class="placeholder-image">
        <i class="fas fa-tooth"></i>
    </div>
</div>

<!-- Depois: -->
<div class="hero-image">
    <img src="images/hero.jpg" alt="Dr. Giovani Chianello em consultório moderno">
</div>
```

**Sobre Section (linha ~130):**
```html
<!-- Antes: -->
<div class="sobre-image">
    <div class="placeholder-image-large">
        <i class="fas fa-user-doctor"></i>
    </div>
</div>

<!-- Depois: -->
<div class="sobre-image">
    <img src="images/dr-giovani.jpg" alt="Dr. Giovani Chianello" style="border-radius: 20px; max-width: 100%; box-shadow: 0 10px 40px rgba(0, 168, 232, 0.2);">
</div>
```

**Galeria de Casos (linha ~236):**
```html
<!-- Substitua cada card assim: -->

<!-- Antes: -->
<div class="galeria-item">
    <div class="galeria-placeholder">
        <i class="fas fa-image"></i>
        <p>Caso 01</p>
    </div>
</div>

<!-- Depois: -->
<div class="galeria-item">
    <img src="images/case-01.jpg" alt="Caso de sucesso - Transformação do sorriso 01">
</div>
```

### Passo 4: Ajustes CSS (Opcional)

Se adicionar imagens na galeria, o CSS já está otimizado. Mas você pode fazer:

```css
.galeria-item img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    display: block;
}
```

## 📊 Especificações Técnicas

### Formatos Recomendados
| Tipo | Formato | Peso |
|------|---------|------|
| Fotos reais | JPG | 50-150KB |
| Com transparência | PNG | 100-300KB |
| Melhor qualidade | WebP | 30-100KB |
| Ícones/SVG | SVG | <50KB |

### Resolução Recomendada
- **Desktop**: 1920x1080px mínimo
- **Mobile**: 1080px de largura
- **2x**: 2x do tamanho para telas retina

### Compressão Online
- **TinyPNG** (https://tinypng.com)
- **ImageOptim** (https://imageoptim.com)
- **Compressor.io** (https://compressor.io)

## ✅ Checklist de Imagens

- [ ] Hero: 1 imagem profissional
- [ ] Sobre: 1 foto do Dr. (quadrada)
- [ ] Galeria: 6 casos antes/depois
- [ ] Todas comprimidas
- [ ] Todas com nomes descritivos
- [ ] Alt text adicionado
- [ ] Responsivas (mobile-friendly)
- [ ] Sem marca d'água
- [ ] Formato otimizado (JPG/WebP)

## 💡 Dicas Profissionais

### Captura de Fotos
1. **Iluminação**: Use luz natural ou iluminação profissional
2. **Fundo**: Fundo neutro (branco, cinza ou consultório)
3. **Ângulo**: Foto frontal do rosto para casos de sorriso
4. **Qualidade**: Câmera profissional ou smartphone moderno
5. **Edição**: Ajuste cores, brilho e contraste

### Privacidade do Paciente
- Sempre obtenha consentimento por escrito
- Considere pixelizar os olhos ou usar apenas foto do sorriso
- Nunca mostre nome do paciente
- Usar número do caso é discreto e profissional

### SEO e Imagens
```html
<!-- Adicione alt text descritivo -->
<img src="images/case-01.jpg" alt="Transformação de sorriso com clareamento e restauração estética - Caso de sucesso 01">
```

## 🎬 Vídeo (Opcional)

Para adicionar vídeos de antes/depois:

```html
<video controls width="100%" poster="images/video-thumb.jpg">
    <source src="videos/caso-01.mp4" type="video/mp4">
    Seu navegador não suporta vídeos HTML5.
</video>
```

## 📧 Suporte

Se tiver dúvidas sobre:
- **Edição de fotos**: GIMP, Canva
- **Compressão**: TinyPNG, Imagemin
- **Hospedagem**: Vercel, Netlify
- **Integração**: Consulte o README.md

---

**Dica Final**: Imagens de alta qualidade são o diferencial! Invista em boas fotos do consultório e do seu trabalho. Pacientes confiam mais em clínicas que mostram resultados reais! 📸✨
