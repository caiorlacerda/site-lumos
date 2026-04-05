"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cases } from "@/lib/data";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import FinalCTA from "@/components/home/FinalCTA";

const verticals = ["Todos", "Digital", "Filme", "Live"];

export default function PortfolioPage() {
  const [filter, setFilter] = useState("Todos");

  const filteredCases = filter === "Todos" 
    ? cases 
    : cases.filter(c => c.vertical === filter || c.tags.includes(filter));

  return (
    <div className="bg-lumos-offwhite has-grain pt-40 min-h-screen relative overflow-hidden">
      
      <div className="container mx-auto px-6 section-content">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div>
            <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-black tracking-tighter leading-none mb-6 text-lumos-black">
              Portfólio
            </h1>
            <p className="text-xl md:text-2xl text-lumos-chumbo font-light max-w-xl">
              Confira os projetos que entregamos para as maiores marcas do Brasil.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-2">
            {verticals.map((v) => (
              <button
                key={v}
                onClick={() => setFilter(v)}
                className={`px-6 py-2 text-xs font-bold tracking-widest transition-all rounded-full ${
                  filter === v 
                    ? "bg-lumos-black text-white" 
                    : "bg-white/40 text-lumos-black border border-lumos-black/10 hover:border-lumos-yellow backdrop-blur-md"
                }`}
              >
                {v}
              </button>
            ))}
          </div>
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredCases.map((project) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, ease: "circOut" }}
              >
                <Link
                  href={`/cases/${project.slug}`}
                  className="group block bg-white/40 backdrop-blur-md border border-white/20 overflow-hidden rounded-4xl transition-all hover:shadow-2xl hover:-translate-y-1"
                >
                  <div className="aspect-[16/10] bg-zinc-200 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-100 to-zinc-300 group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors z-10" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity z-20">
                      <span className="bg-lumos-yellow text-lumos-black px-6 py-3 font-bold tracking-widest text-sm rounded-xl">
                        Ver case
                      </span>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex justify-between items-start mb-4">
                      <span className="text-[10px] font-black tracking-[0.2em] text-lumos-yellow bg-lumos-black px-2 py-1 uppercase">
                        {project.vertical}
                      </span>
                      <ArrowUpRight className="text-lumos-chumbo group-hover:text-lumos-yellow transition-colors" size={20} />
                    </div>
                    <p className="text-xs font-bold text-lumos-chumbo tracking-widest mb-1">{project.client}</p>
                    <h3 className="text-[clamp(1.25rem,2.5vw,2rem)] font-display font-bold text-lumos-black leading-tight">
                      {project.title}
                    </h3>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      <div className="mt-32">
        <FinalCTA />
      </div>
    </div>
  );
}
