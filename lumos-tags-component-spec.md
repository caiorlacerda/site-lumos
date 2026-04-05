# Lumos — Componente: Tags Animadas (Seção "O que a Lumos entrega")

> Especificação técnica para implementação em Next.js + Tailwind. Baseado no design system e gradientes aprovados do projeto.

---

## Visão geral

Seção da homepage com três linhas de tags em pill (formato arredondado), cada uma com scroll automático em direção alternada. As tags são clicáveis e levam para as páginas de vertical correspondentes. Toda a animação pausa quando o mouse está sobre a seção.

---

## Comportamento

| Linha | Direção | Velocidade | Conteúdo |
|-------|---------|------------|----------|
| Linha 1 | → direita (scroll-right) | 28s | Produção de Conteúdo |
| Linha 2 | ← esquerda (scroll-left) | 22s | Filmes |
| Linha 3 | → direita (scroll-right) | 32s | Live Stream |

- Animação **infinita e linear** — sem ease, sem pausa entre loops
- **Pausa ao hover** na seção inteira (`animation-play-state: paused`)
- Cada tag tem **hover individual** com fundo amarelo `#EFC700`, texto `#1a1a14` e glow dourado
- Tags são elementos `<a>` com `href` para a página de vertical

---

## Tags por linha e destino

### Linha 1 → `/conteudo`
Podcast · Websérie · Stories · Reels · Fotografia · Curso · Institucional · Conteúdos · Treinamento · Experiência · Feiras · Roteiro

### Linha 2 → `/filmes`
Filme Publicitário · Cinema · Teaser · Trailer · Campanha · Motion Graphics · Branded Content · Clipe · Documentário · Curta · Making Of

### Linha 3 → `/livestream`
Livestream · Evento · Cobertura · Transmissão · Streaming Corporativo · Híbrido · Multi-câmera · Webinar · Lançamento · Show · Conferência

---

## Implementação — React / Next.js

### Componente `TagsSection.tsx`

```tsx
'use client'

import Link from 'next/link'

const rows = [
  {
    tags: [
      'Podcast', 'Websérie', 'Stories', 'Reels', 'Fotografia',
      'Curso', 'Institucional', 'Conteúdos', 'Treinamento',
      'Experiência', 'Feiras', 'Roteiro',
    ],
    href: '/conteudo',
    direction: 'right',
    duration: '28s',
    variant: 'dark',
  },
  {
    tags: [
      'Filme Publicitário', 'Cinema', 'Teaser', 'Trailer', 'Campanha',
      'Motion Graphics', 'Branded Content', 'Clipe', 'Documentário',
      'Curta', 'Making Of',
    ],
    href: '/filmes',
    direction: 'left',
    duration: '22s',
    variant: 'outline',
  },
  {
    tags: [
      'Livestream', 'Evento', 'Cobertura', 'Transmissão',
      'Streaming Corporativo', 'Híbrido', 'Multi-câmera',
      'Webinar', 'Lançamento', 'Show', 'Conferência',
    ],
    href: '/livestream',
    direction: 'right',
    duration: '32s',
    variant: 'dark',
  },
]

export function TagsSection() {
  return (
    <section className="tags-section">
      <p className="tags-label">O que a Lumos entrega</p>

      <div className="tags-wrapper group">
        {rows.map((row, i) => (
          <div key={i} className="tags-row-outer">
            <div
              className="tags-track"
              style={{
                animationName: row.direction === 'right'
                  ? 'scroll-right'
                  : 'scroll-left',
                animationDuration: row.duration,
              }}
            >
              {/* Duplicar as tags para loop infinito contínuo */}
              {[...row.tags, ...row.tags].map((tag, j) => (
                <Link
                  key={j}
                  href={row.href}
                  className={`tag tag-${row.variant}`}
                >
                  {tag}
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
```

---

## CSS global — adicionar em `globals.css`

```css
/* Tags section — background */
.tags-section {
  background: linear-gradient(135deg, #2c2c2c 0%, #888780 100%);
  padding: 72px 0;
  overflow: hidden;
  position: relative;
  isolation: isolate;
}

.tags-section::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E");
  opacity: 0.04;
  mix-blend-mode: overlay;
  pointer-events: none;
  z-index: 0;
}

/* Label da seção */
.tags-label {
  text-align: center;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(240, 237, 232, 0.4);
  margin-bottom: 36px;
  position: relative;
  z-index: 2;
}

/* Wrapper das linhas */
.tags-wrapper {
  display: flex;
  flex-direction: column;
  gap: 14px;
  position: relative;
  z-index: 2;
}

/* Pausa ao hover na seção inteira */
.tags-wrapper:hover .tags-track {
  animation-play-state: paused;
}

/* Fade nas bordas esquerda e direita */
.tags-row-outer {
  overflow: hidden;
  mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 6%,
    black 94%,
    transparent 100%
  );
  -webkit-mask-image: linear-gradient(
    to right,
    transparent 0%,
    black 6%,
    black 94%,
    transparent 100%
  );
}

/* Track animado */
.tags-track {
  display: flex;
  gap: 12px;
  width: max-content;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  will-change: transform;
}

/* Animações de scroll */
@keyframes scroll-right {
  from { transform: translateX(0); }
  to   { transform: translateX(-50%); }
}

@keyframes scroll-left {
  from { transform: translateX(-50%); }
  to   { transform: translateX(0); }
}

/* Tags — estilo dark (fundo escuro) */
.tag {
  display: inline-flex;
  align-items: center;
  padding: 10px 22px;
  border-radius: 100px;
  font-family: 'Barlow Condensed', sans-serif; /* ou a fonte display do projeto */
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  white-space: nowrap;
  cursor: pointer;
  text-decoration: none;
  transition:
    transform 0.2s ease,
    background 0.2s ease,
    color 0.2s ease,
    box-shadow 0.2s ease,
    border-color 0.2s ease;
}

.tag-dark {
  background: #1a1a14;
  color: #f0ede8;
  border: 1.5px solid rgba(240, 237, 232, 0.08);
}

.tag-outline {
  background: transparent;
  color: #f0ede8;
  border: 1.5px solid rgba(240, 237, 232, 0.3);
}

/* Hover — igual para os dois estilos */
.tag:hover {
  background: #EFC700;
  color: #1a1a14;
  transform: scale(1.06);
  box-shadow: 0 0 24px rgba(239, 199, 0, 0.35);
  border-color: #EFC700;
}

/* Mobile — reduz velocidade e tamanho */
@media (max-width: 768px) {
  .tags-section { padding: 48px 0; }
  .tag { font-size: 13px; padding: 8px 16px; }
  .tags-track { gap: 10px; }
  .tags-wrapper { gap: 10px; }
}
```

---

## Fonte recomendada

O design usa `Barlow Condensed Bold` para as tags — combina com o estilo técnico e bold da Lumos. Adicionar no `layout.tsx`:

```tsx
import { Barlow_Condensed } from 'next/font/google'

const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-display-tags',
})
```

Se o projeto já tiver uma fonte display definida, usar ela no lugar — só ajustar o `font-family` na classe `.tag`.

---

## Como adicionar novas tags no futuro

Basta adicionar o texto no array `tags` do `row` correspondente em `TagsSection.tsx`. O componente duplica automaticamente as tags para o loop infinito — não precisa fazer nada além de adicionar o item no array.

---

## Notas de implementação

- **Por que duplicar as tags?** A animação usa `translateX(-50%)` para voltar ao início sem salto visual. Isso só funciona se o conteúdo do track tiver exatamente o dobro do que aparece na tela — por isso cada row renderiza `[...tags, ...tags]`.
- **Performance:** Usar `will-change: transform` no `.tags-track` para forçar compositing na GPU. Nunca animar `left` ou `margin` — só `transform`.
- **Acessibilidade:** Como as tags são links `<a>`, já são navegáveis por teclado. Adicionar `aria-label` em cada link se o texto da tag não for descritivo o suficiente fora de contexto.
- **Reduced motion:** Adicionar no CSS global:

```css
@media (prefers-reduced-motion: reduce) {
  .tags-track {
    animation: none !important;
  }
}
```

---

*Referência complementar: `lumos-gradientes-handoff.md` e `lumos-site-referencia.md`*
