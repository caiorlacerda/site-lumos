"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/lib/data";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="services-section">
      <img 
        src="/images/services-bg.jpg" 
        alt="Lumos Production Background"
        className="services-bg-image"
      />
      <div className="services-overlay" />
      
      <div className="services-content container mx-auto px-6">
        <h2 className="services-title font-display font-black tracking-tighter text-[#f0ede8] text-center">
          Escolha o que você quer produzir
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {services.map((service) => (
            <div 
              key={service.id} 
              className="service-card flex flex-col items-center text-center group transition-all duration-500"
            >
              <h3 className="text-3xl font-display font-black text-[#f0ede8] mb-6 leading-tight h-16 flex items-center">
                {service.title}
              </h3>
              
              <p className="text-lg text-[#f0ede8]/80 font-light leading-relaxed mb-10 flex-grow">
                {service.description}
              </p>
              
              <div className="flex flex-wrap justify-center gap-2 mb-10">
                {service.formats.slice(0, 4).map((format) => (
                  <span key={format} className="px-3 py-1 bg-transparent text-[#f0ede8] text-[10px] font-bold tracking-widest rounded-lg border border-[#f0ede8]/20">
                    {format}
                  </span>
                ))}
              </div>

              <Link
                href={service.title === "Digital" ? "/conteudo" : service.title === "Live" ? "/livestream" : "/filmes"}
                className="inline-flex items-center text-[#f0ede8] font-bold tracking-widest border-b-2 border-lumos-yellow pb-2 hover:text-lumos-yellow transition-all"
              >
                Saiba mais
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
