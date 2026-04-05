import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface VerticalHeroProps {
  headline: string;
  subheadline: string;
  description: string;
  formats: string[];
  whyLumosTitle?: string;
  whyLumosItems: string[];
}

export default function VerticalHero({
  headline,
  subheadline,
  description,
  formats,
  whyLumosItems,
}: VerticalHeroProps) {
  return (
    <section className="page-hero page-content bg-lumos-offwhite has-grain overflow-hidden">
      
      <div className="container mx-auto px-6 section-content">
        <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-black tracking-tighter leading-none mb-10 max-w-4xl text-lumos-black">
          {headline}
        </h1>
        <p className="text-xl md:text-3xl text-lumos-chumbo font-light mb-16 max-w-3xl leading-relaxed">
          {subheadline}
        </p>

        <div className="service-page-content mt-24">
          <div>
            <h2 className="text-sm font-bold tracking-widest text-lumos-black/40 mb-8 uppercase">Sobre o serviço</h2>
            <p className="text-xl md:text-2xl text-lumos-black/80 leading-relaxed font-light mb-12">
              {description}
            </p>
            <div className="pills-grid">
              {formats.map((format, i) => (
                <span key={i} className="pill-item">
                   {format}
                </span>
              ))}
            </div>
          </div>

          <div className="bg-white/50 backdrop-blur-sm p-10 md:p-16 border border-lumos-black/10 rounded-4xl">
            <h2 className="text-sm font-bold tracking-widest text-lumos-black mb-10 text-center uppercase">Por que a Lumos?</h2>
            <div className="space-y-10">
              {whyLumosItems.map((item, idx) => (
                <div key={idx} className="flex gap-6">
                  <span className="text-lumos-black/30 font-black text-2xl leading-none">0{idx + 1}.</span>
                  <p className="text-lumos-black/80 text-lg leading-snug">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
