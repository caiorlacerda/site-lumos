"use client";

import { clients } from "@/lib/data";
import Image from "next/image";

export default function ClientsGrid() {
  const tickerClients = [...clients, ...clients];

  return (
    <section className="section bg-lumos-gray-light has-grain overflow-hidden">
      
      <div className="container mx-auto px-6 mb-20 section-content">
        <h2 className="text-center text-lumos-black font-display font-black text-[clamp(1.5rem,3.5vw,2.8rem)] tracking-tighter">
          Empresas que confiam na Lumos
        </h2>
      </div>
      
      <div className="flex w-[200%] animate-ticker hover:[animation-play-state:paused] transition-all duration-700">
        {tickerClients.map((client, index) => (
          <div 
            key={`${client.name}-${index}`} 
            className="flex-shrink-0 w-32 md:w-44 h-12 md:h-16 mx-8 relative grayscale hover:grayscale-0 transition-all duration-500 opacity-60 hover:opacity-100"
          >
             <img
               src={client.logo}
               alt={client.name}
               className="w-full h-full object-contain"
             />
          </div>
        ))}
      </div>
    </section>
  );
}
