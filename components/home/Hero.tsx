"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheadlineRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (!headlineRef.current || !subheadlineRef.current || !containerRef.current) return;

    // Split text into two lines and animate
    headlineRef.current.innerHTML = `
      <div class="overflow-hidden mb-2">
        <span class="line-1 block translate-y-full">O time de vídeo que sua marca</span>
      </div>
      <div class="overflow-hidden">
        <span class="line-2 block translate-y-full">precisa ter dentro de casa.</span>
      </div>
    `;

    const tl = gsap.timeline();

    tl.to(".line-1, .line-2", {
      y: 0,
      duration: 1.2,
      stagger: 0.1,
      ease: "power4.out",
    })
      .to(
        subheadlineRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
        },
        "-=0.6"
      );

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <section ref={containerRef} className="gradient-hero has-grain min-h-screen flex items-center justify-center relative">
      {/* Glow Spot */}
      <div className="glow-spot" aria-hidden="true" />

      {/* Video Background with Overlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <iframe
          className="absolute top-1/2 left-1/2 w-[100vw] h-[56.25vw] min-h-[100vh] min-w-[177.77vh] -translate-x-1/2 -translate-y-1/2 grayscale opacity-30 mix-blend-overlay scale-110"
          src="https://www.youtube.com/embed/nHZIFpbds4g?autoplay=1&mute=1&loop=1&playlist=nHZIFpbds4g&controls=0&showinfo=0&autohide=1&modestbranding=1&playsinline=1&rel=0"
          allow="autoplay; fullscreen"
        ></iframe>
        <div className="absolute inset-0 bg-gradient-to-b from-lumos-black/80 via-transparent to-lumos-black" />
      </div>

      <div className="container mx-auto px-6 text-center z-10 section-content flex justify-center">
        <div className="hero-content text-center isolate w-full max-w-6xl">
          <h1
            ref={headlineRef}
            className="font-display font-black text-white tracking-tighter mx-auto"
          >
            O time de vídeo que sua marca precisa ter dentro de casa.
          </h1>
          <div ref={subheadlineRef} className="opacity-0 translate-y-8">
            <p className="text-xl md:text-2xl text-white/60 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Conteúdo audiovisual consistente, com um time que entende o seu negócio tão bem quanto você.
            </p>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6">
              <Link
                href="/contato"
                className="group bg-lumos-yellow text-lumos-black px-10 py-5 text-lg font-bold hover:bg-white transition-all flex items-center rounded-full"
              >
                Fale com a gente
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/portfolio"
                className="text-white hover:text-lumos-yellow font-bold py-4 transition-all"
              >
                Ver portfólio
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
