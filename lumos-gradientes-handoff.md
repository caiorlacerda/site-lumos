# Lumos — Handoff de Gradientes e Texturas

> Documento de referência para o desenvolvedor. Define os 5 gradientes aprovados, instruções de implementação em CSS, mapa de uso por página e código pronto para uso.

---

## Paleta base

Antes dos gradientes, os tokens de cor que os compõem:

```css
:root {
  --lumos-black:       #1a1a14;
  --lumos-black-warm:  #2a2510;
  --lumos-dark:        #2c2c2c;
  --lumos-gray-mid:    #888780;
  --lumos-gray-medium: #6a6760;
  --lumos-gray-light:  #e9e8e4;
  --lumos-yellow:      #EFC700;
  --lumos-yellow-light:#f9e89a;
  --lumos-cream:       #fff2df;
  --lumos-offwhite:    #f3f3f3;
}
```

---

## Os 5 gradientes aprovados

---

### Gradiente 01 — Hero Dark
**Uso:** Hero da homepage, navbar ao rolar, seções de impacto máximo.

```css
.gradient-hero {
  background: linear-gradient(
    135deg,
    #1a1a14 0%,
    #2a2510 50%,
    #1a1a14 100%
  );
  color: #f0ede8;
}
```

**Glow spot (elemento decorativo atrás do headline):**
```css
.gradient-hero .glow-spot {
  position: absolute;
  width: 420px;
  height: 420px;
  background: radial-gradient(circle, #EFC700 0%, transparent 70%);
  opacity: 0.14;
  top: -80px;
  right: -60px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}
```

---

### Gradiente 02 — Cinza Escuro a Médio
**Uso:** Seção do manifesto, seção de serviços, fundos neutros de alto contraste.

```css
.gradient-dark-neutral {
  background: linear-gradient(
    135deg,
    #2c2c2c 0%,
    #888780 100%
  );
  color: #f0ede8;
}
```

**Glow spot:**
```css
.gradient-dark-neutral .glow-spot {
  position: absolute;
  width: 220px;
  height: 220px;
  background: radial-gradient(circle, #b4b2a9 0%, transparent 70%);
  opacity: 0.15;
  bottom: -50px;
  left: -30px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}
```

---

### Gradiente 03 — Light Quente
**Uso:** Páginas de vertical (/conteudo, /filmes, /livestream), páginas de case, seção de portfólio.

```css
.gradient-light-warm {
  background: linear-gradient(
    160deg,
    #f3f3f3 0%,
    #fff2df 60%,
    #f9e89a 100%
  );
  color: #222222;
}
```

**Glow spot:**
```css
.gradient-light-warm .glow-spot {
  position: absolute;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, #EFC700 0%, transparent 70%);
  opacity: 0.25;
  top: -30px;
  right: -30px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}
```

---

### Gradiente 04 — Amarelo a Amarelo
**Uso:** CTAs primários, botões de destaque, badges, seção de CTA final da homepage.

```css
.gradient-yellow {
  background: linear-gradient(
    135deg,
    #EFC700 0%,
    #f9e89a 100%
  );
  color: #1a1a14;
}
```

**Glow spot:**
```css
.gradient-yellow .glow-spot {
  position: absolute;
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, #fffbe0 0%, transparent 70%);
  opacity: 0.5;
  top: -50px;
  right: -30px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}
```

---

### Gradiente 05 — Cinza Médio a Claro
**Uso:** Página /sobre, seção de equipe, seção de depoimentos.

```css
.gradient-gray-soft {
  background: linear-gradient(
    150deg,
    #888780 0%,
    #e9e8e4 100%
  );
  color: #1a1a14;
}
```

**Glow spots (duplo):**
```css
.gradient-gray-soft .glow-spot-1 {
  position: absolute;
  width: 280px;
  height: 280px;
  background: radial-gradient(circle, #d4d3d1 0%, transparent 70%);
  opacity: 0.2;
  top: -70px;
  right: 8%;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}

.gradient-gray-soft .glow-spot-2 {
  position: absolute;
  width: 180px;
  height: 180px;
  background: radial-gradient(circle, #e9e8e4 0%, transparent 70%);
  opacity: 0.25;
  bottom: -50px;
  left: 4%;
  border-radius: 50%;
  pointer-events: none;
  z-index: 0;
}
```

---

## Textura grain — implementação

Todos os gradientes levam uma textura grain sutil por cima. Implementar via pseudo-elemento `::after` em cada seção.

### Método 1 — SVG inline (recomendado)

```css
.has-grain {
  position: relative;
  isolation: isolate;
}

.has-grain::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E");
  opacity: 0.04;
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: 1;
  border-radius: inherit;
}
```

**Opacidade por gradiente:**
| Gradiente | Opacidade do grain |
|-----------|-------------------|
| 01 Hero dark | `0.05` |
| 02 Cinza escuro a médio | `0.04` |
| 03 Light quente | `0.03` |
| 04 Amarelo a amarelo | `0.03` |
| 05 Cinza médio a claro | `0.03` |

### Método 2 — PNG tileable (alternativa)

Se o SVG inline causar performance issues em mobile, usar um PNG de 200×200px de noise neutro com `background-blend-mode: overlay` e `opacity: 0.04`.

```css
.has-grain::after {
  background-image: url('/textures/grain.png');
  background-size: 200px 200px;
  background-repeat: repeat;
  mix-blend-mode: overlay;
  opacity: 0.04;
}
```

---

## Mapa de uso — por página e seção

| Página / Seção | Gradiente |
|----------------|-----------|
| Homepage — Hero | 01 Hero dark |
| Homepage — Manifesto | 02 Cinza escuro a médio |
| Homepage — Cases em destaque | 03 Light quente |
| Homepage — Serviços | 02 Cinza escuro a médio |
| Homepage — Logos de clientes | 03 Light quente |
| Homepage — CTA final | 04 Amarelo a amarelo |
| /conteudo, /filmes, /livestream — Hero da página | 01 Hero dark |
| /conteudo, /filmes, /livestream — Corpo | 03 Light quente |
| /portfolio — Grid de cases | 03 Light quente |
| /cases/[slug] — Hero do case | 01 Hero dark |
| /cases/[slug] — Corpo do case | 03 Light quente |
| /sobre — Hero | 02 Cinza escuro a médio |
| /sobre — Equipe e depoimento | 05 Cinza médio a claro |
| /contato — Página inteira | 05 Cinza médio a claro |
| Botões primários (CTA) | 04 Amarelo a amarelo |
| Navbar ao rolar | 01 Hero dark (sólido, sem grain) |

---

## Estrutura de seção recomendada

Para garantir que grain e glow spots funcionem corretamente sem vazar para fora do container:

```html
<section class="gradient-hero has-grain">
  <!-- Glow spot decorativo -->
  <div class="glow-spot" aria-hidden="true"></div>

  <!-- Conteúdo da seção — sempre com z-index: 1 relativo -->
  <div class="section-content">
    <h1>O time de vídeo que a sua marca precisava ter dentro de casa.</h1>
  </div>
</section>
```

```css
section {
  position: relative;
  overflow: hidden;
  isolation: isolate;
}

.section-content {
  position: relative;
  z-index: 2;
}
```

---

## Regras importantes

1. **Sempre usar `isolation: isolate`** no container do gradiente para que o `mix-blend-mode` do grain não vaze para outros elementos.
2. **O conteúdo (texto, botões, imagens) sempre com `z-index: 2`** — acima do grain (`z-index: 1`) e do glow spot (`z-index: 0`).
3. **Nunca animar os gradientes** — o movimento no site vem das animações de conteúdo (GSAP), não do fundo.
4. **Em mobile**, reduzir a opacidade do grain para `0.025` — telas menores amplificam o efeito.
5. **Respeitar `prefers-reduced-motion`** — o grain é estático, não precisa de ajuste. Os glow spots não animam por padrão.
6. **Nunca usar fundo branco puro `#ffffff`** — usar sempre `#f3f3f3` (off-white) como mínimo.

---

*Aprovado por Caio Rizzutti — Produtora Lumos.*
*Referência complementar: lumos-site-referencia.md*
