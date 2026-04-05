"use client";

import Link from "next/link";

const rows = [
  {
    tags: [
      "Podcast", "Websérie", "Stories", "Reels", "Fotografia",
      "Curso", "Institucional", "Conteúdos", "Treinamento",
      "Experiência", "Feiras", "Roteiro",
    ],
    href: "/conteudo",
    direction: "right",
    duration: "28s",
  },
  {
    tags: [
      "Filme Publicitário", "Cinema", "Teaser", "Trailer", "Campanha",
      "Motion Graphics", "Branded Content", "Clipe", "Documentário",
      "Curta", "Making Of",
    ],
    href: "/filmes",
    direction: "left",
    duration: "22s",
  },
  {
    tags: [
      "Live", "Evento", "Cobertura", "Transmissão",
      "Streaming Corporativo", "Híbrido", "Multi-câmera",
      "Webinar", "Lançamento", "Show", "Conferência",
    ],
    href: "/livestream",
    direction: "right",
    duration: "32s",
  },
];

export default function TagsSection() {
  return (
    <section className="tags-section bg-lumos-offwhite has-grain">
      <div className="section-content">
        <p className="tags-label">O que a Lumos entrega</p>

        <div className="tags-wrapper">
          {rows.map((row, i) => (
            <div key={i} className="tags-row-outer">
              <div
                className="tags-track"
                style={{
                  animationName: row.direction === "right" ? "scroll-right" : "scroll-left",
                  animationDuration: row.duration,
                }}
              >
                {/* Duplicate tags for infinite loop */}
                {[...row.tags, ...row.tags].map((tag, j) => (
                  <Link
                    key={j}
                    href={row.href}
                    className={`tag ${j % 2 === 0 ? "tag-dark" : "tag-outline"}`}
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
