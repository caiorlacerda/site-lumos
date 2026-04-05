"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { testimonials } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function Manifesto() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!sectionRef.current || !textRef.current) return;

    const lines = textRef.current.querySelectorAll(".manifesto-line");

    lines.forEach((line) => {
      gsap.fromTo(
        line,
        { opacity: 0.2, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          scrollTrigger: {
            trigger: line,
            start: "top 80%",
            end: "top 50%",
            scrub: true,
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  const nextTestimonials = () => {
    setCurrentIndex((prev) => (prev + 1) % (testimonials.length - 2));
  };

  const prevTestimonials = () => {
    setCurrentIndex((prev) => (prev - 1 + (testimonials.length - 2)) % (testimonials.length - 2));
  };

  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);

  return (
    <section ref={sectionRef} className="section-manifesto bg-lumos-gray-light overflow-hidden">
      
      <div className="container mx-auto px-6 section-content">
        <div ref={textRef} className="max-w-4xl mb-32">
          <h2 className="manifesto-line font-display font-black text-lumos-black mb-12 tracking-tight leading-[1.1]">
            <span className="block text-[clamp(2rem,4vw,3.5rem)]">Conteúdo com propósito</span>
            <span className="block text-[clamp(2rem,4vw,3.5rem)] opacity-40">Entrega com consistência</span>
          </h2>
          <div className="manifesto-text">
            <p className="manifesto-line text-2xl md:text-3xl text-lumos-chumbo font-light">
              Não fazemos por fazer. Cada projeto tem estratégia, cada entrega tem intenção.
            </p>
            <p className="manifesto-line text-2xl md:text-3xl text-lumos-chumbo font-light">
              Somos o time que entende o seu negócio antes de ligar a câmera.
            </p>
          </div>
        </div>

        <div className="relative">
          <div className="flex flex-col md:flex-row gap-8 items-stretch min-h-[400px]">
            <AnimatePresence mode="popLayout" initial={false}>
              {visibleTestimonials.map((testimonial, idx) => (
                <motion.div
                  key={`${testimonial.author}-${currentIndex}-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="flex-1 bg-white p-10 shadow-xl rounded-3xl flex flex-col justify-between"
                >
                  <blockquote className="relative">
                    <span className="text-lumos-yellow text-6xl font-serif opacity-30 select-none block mb-4">“</span>
                    <p className="testimonial-text text-lumos-black mb-8">
                      {testimonial.text}
                    </p>
                  </blockquote>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar">
                      {(testimonial as any).imageUrl ? (
                        <Image
                          src={(testimonial as any).imageUrl}
                          alt={testimonial.author}
                          width={40}
                          height={40}
                        />
                      ) : (
                        <span className="text-lumos-chumbo text-sm font-bold tracking-widest">
                          {testimonial.author.charAt(0).toUpperCase()}
                        </span>
                      )}
                    </div>
                    <div className="testimonial-info">
                      <span className="testimonial-name">{testimonial.author}</span>
                      <span className="testimonial-company">{testimonial.role}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex justify-center mt-16 space-x-4">
            <button 
              onClick={prevTestimonials}
              className="p-4 bg-white border border-zinc-100 rounded-full hover:bg-lumos-yellow transition-colors group"
            >
              <ChevronLeft size={24} className="group-hover:scale-110 transition-transform" />
            </button>
            <button 
              onClick={nextTestimonials}
              className="p-4 bg-white border border-zinc-100 rounded-full hover:bg-lumos-yellow transition-colors group"
            >
              <ChevronRight size={24} className="group-hover:scale-110 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
