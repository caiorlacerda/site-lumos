"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import Image from "next/image";
import { cases } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedCases() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const cards = containerRef.current.querySelectorAll(".case-card");

    cards.forEach((card, index) => {
      const direction = index === 0 ? -80 : index === 1 ? 80 : 0;
      const yValue = index === 1 ? 60 : 0;
      const xValue = index === 0 ? -80 : index === 2 ? 80 : 0;

      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: xValue,
          y: yValue,
          scale: 1.08,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          scale: 1,
          duration: 0.7,
          ease: "expo.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  // Show only 3 featured cases
  const featuredCases = cases.slice(0, 3);

  return (
    <section className="section bg-lumos-offwhite has-grain overflow-hidden">
      <div className="container mx-auto px-6 section-content">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-display font-black tracking-tighter mb-6 text-lumos-black">
              Cases em destaque
            </h2>
            <p className="text-xl text-lumos-chumbo">
              Transformamos briefings em resultados que circulam internamente e impactam globalmente.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="group flex items-center text-lumos-black font-bold tracking-widest text-sm hover:text-lumos-yellow transition-colors"
          >
            Ver todos os cases
            <ArrowUpRight className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>

        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          {featuredCases.map((project, index) => (
            <Link
              key={project.slug}
              href={`/cases/${project.slug}`}
              className={`case-card group relative block overflow-hidden bg-zinc-900 rounded-3xl ${
                index === 0 ? "md:col-span-12 lg:col-span-8 h-[400px] md:h-[600px]" :
                index === 1 ? "md:col-span-6 lg:col-span-4 h-[400px] md:h-[600px]" :
                "md:col-span-6 lg:col-span-12 h-[300px] lg:h-[400px]"
              }`}
            >
              {/* Image Placeholder with gradient for now */}
              <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black group-hover:scale-105 transition-transform duration-700" />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors z-10" />
              
              {/* Content */}
              <div className="absolute inset-0 p-10 flex flex-col justify-end z-20">
                <div className="mb-4">
                  <span className="text-[10px] font-black tracking-[0.2em] text-lumos-yellow bg-lumos-black px-2 py-1">
                    {project.vertical}
                  </span>
                </div>
                <p className="text-xs font-bold text-lumos-chumbo tracking-widest mb-1">{project.client}</p>
                <h3 className="text-[clamp(1.25rem,2.5vw,2rem)] font-display font-bold text-white leading-tight group-hover:translate-x-2 transition-transform duration-300">
                  {project.title}
                </h3>
              </div>

              <div className="absolute top-10 right-10 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center bg-white/10 backdrop-blur-sm">
                  <ArrowUpRight className="text-white" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
