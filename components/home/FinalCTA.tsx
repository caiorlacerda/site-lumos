"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface FinalCTAProps {
  variant?: "default" | "sobre" | "estudio";
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  showPortfolio?: boolean;
}

export default function FinalCTA({ 
  variant = "default",
  title = "Vem contar histórias com a gente",
  description = "A gente cuida de tudo, da estratégia à entrega.",
  buttonText = "Bora conversar",
  buttonLink = "/contato",
  showPortfolio = true
}: FinalCTAProps) {
  const isSobre = variant === "sobre";
  const isEstudio = variant === "estudio";

  return (
    <section className={`relative section has-grain overflow-hidden group ${
      isSobre ? "sobre-cta-section" : isEstudio ? "gradient-yellow" : "bg-lumos-offwhite"
    }`}>
      
      <div className="container mx-auto px-6 text-center z-10 section-content">
        <div className="flex flex-col items-center text-center">
          <h2 className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-black tracking-tighter leading-none text-lumos-black transition-transform duration-700 group-hover:scale-[1.02]">
            {title}
          </h2>
        </div>
        <p className="text-lg md:text-2xl text-lumos-black/60 mb-16 mt-10 max-w-2xl mx-auto font-light leading-relaxed">
          {description}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center space-y-6 md:space-y-0 md:space-x-12">
          <Link
            href={buttonLink}
            className="group bg-lumos-black text-white px-12 py-5 text-xl font-bold hover:bg-white hover:text-lumos-black transition-all rounded-full flex items-center shadow-lg hover:shadow-lumos-yellow/20"
          >
            {buttonText}
            <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={24} />
          </Link>
          {showPortfolio && (
            <Link
              href="/portfolio"
              className="text-lumos-black/60 hover:text-lumos-black text-lg font-bold transition-all"
            >
              Ver portfólio
            </Link>
          )}
        </div>
      </div>
      
      <style jsx>{`
        @keyframes grain {
          0%, 100% { transform: translate(0, 0); }
          10% { transform: translate(-5%, -10%); }
          20% { transform: translate(-15%, 5%); }
          30% { transform: translate(7%, -25%); }
          40% { transform: translate(-5%, 25%); }
          50% { transform: translate(-15%, 10%); }
          60% { transform: translate(15%, 0%); }
          70% { transform: translate(0, 15%); }
          80% { transform: translate(3%, 35%); }
          90% { transform: translate(-10%, 10%); }
        }
        .animate-grain {
          animation: grain 8s steps(10) infinite;
        }
      `}</style>
    </section>
  );
}
