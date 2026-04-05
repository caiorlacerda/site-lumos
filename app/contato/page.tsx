"use client";

import { useState } from "react";
import { Mail, MessageCircle, Instagram, Send } from "lucide-react";

export default function ContatoPage() {
  const [status, setStatus] = useState<"idle" | "sending" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("success"), 1500);
  };

  return (
    <div className="bg-lumos-offwhite has-grain pt-40 pb-24 min-h-screen relative overflow-hidden">
      
      <div className="container mx-auto px-6 section-content">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          
          {/* Left Column - Form */}
          <div>
            <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-none mb-10 text-lumos-black">
              Bora conversar.
            </h1>
            <p className="text-xl md:text-3xl text-lumos-chumbo font-light mb-16 max-w-lg leading-relaxed">
              Conta pra gente o que você tem em mente. A gente responde rápido.
            </p>

            <form onSubmit={handleSubmit} className="contact-form space-y-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative border-b-2 border-lumos-gray-medium/20 focus-within:border-lumos-yellow transition-colors pb-2">
                  <label htmlFor="nome" className="block text-xs font-bold tracking-widest text-lumos-gray-medium mb-2">Nome</label>
                  <input type="text" id="nome" required className="w-full bg-transparent border-none outline-none text-xl font-light py-2 text-lumos-black placeholder:text-lumos-gray-medium/50" placeholder="Seu nome" />
                </div>
                <div className="relative border-b-2 border-lumos-gray-medium/20 focus-within:border-lumos-yellow transition-colors pb-2">
                  <label htmlFor="empresa" className="block text-xs font-bold tracking-widest text-lumos-gray-medium mb-2">Empresa</label>
                  <input type="text" id="empresa" required className="w-full bg-transparent border-none outline-none text-xl font-light py-2 text-lumos-black placeholder:text-lumos-gray-medium/50" placeholder="Nome da sua marca" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="relative border-b-2 border-lumos-gray-medium/20 focus-within:border-lumos-yellow transition-colors pb-2">
                  <label htmlFor="email" className="block text-xs font-bold tracking-widest text-lumos-gray-medium mb-2">E-mail</label>
                  <input type="email" id="email" required className="w-full bg-transparent border-none outline-none text-xl font-light py-2 text-lumos-black placeholder:text-lumos-gray-medium/50" placeholder="seu@email.com" />
                </div>
                <div className="relative border-b-2 border-lumos-gray-medium/20 focus-within:border-lumos-yellow transition-colors pb-2">
                  <label htmlFor="whatsapp" className="block text-xs font-bold tracking-widest text-lumos-gray-medium mb-2">WhatsApp</label>
                  <input type="text" id="whatsapp" required className="w-full bg-transparent border-none outline-none text-xl font-light py-2 text-lumos-black placeholder:text-lumos-gray-medium/50" placeholder="(00) 00000-0000" />
                </div>
              </div>

              <div className="relative border-b-2 border-lumos-gray-medium/20 focus-within:border-lumos-yellow transition-colors pb-2">
                <label className="block text-xs font-bold tracking-widest text-lumos-gray-medium mb-2">Tipo de projeto</label>
                <select className="w-full bg-transparent border-none outline-none text-xl font-light py-2 appearance-none text-lumos-black">
                   <option>Digital</option>
                   <option>Filmes</option>
                   <option>Live</option>
                   <option>Ainda não sei</option>
                </select>
              </div>

              <div className="relative border-b-2 border-lumos-gray-medium/20 focus-within:border-lumos-yellow transition-colors pb-2">
                <label htmlFor="mensagem" className="block text-xs font-bold tracking-widest text-lumos-gray-medium mb-2">Conte um pouco sobre o projeto</label>
                <textarea id="mensagem" required rows={3} className="w-full bg-transparent border-none outline-none text-xl font-light py-2 resize-none text-lumos-black placeholder:text-lumos-gray-medium/50" placeholder="O que você precisa?" />
              </div>

              <button
                type="submit"
                disabled={status !== "idle"}
                className={`w-full group py-6 text-xl font-bold flex items-center justify-center transition-all rounded-2xl ${
                  status === "success" 
? "bg-green-600 text-white" 
: "bg-lumos-black text-white hover:bg-lumos-yellow hover:text-lumos-black"
                }`}
              >
                {status === "idle" && (
                  <>
                    Enviar mensagem
                    <Send className="ml-3 group-hover:translate-x-2 transition-transform" />
                  </>
                )}
                {status === "sending" && <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white" />}
                {status === "success" && "Mensagem enviada!"}
              </button>
              
              <p className="text-lumos-gray-medium text-sm py-4">A gente responde em até 1 dia útil. Prometido.</p>
            </form>
          </div>

          {/* Right Column - Info */}
          <div className="lg:border-l border-lumos-gray-medium/10 lg:pl-20 py-10 space-y-20">
             <div className="space-y-10">
                <h3 className="text-sm font-bold tracking-widest text-lumos-yellow">Informações de contato</h3>
                <div className="space-y-8">
                   <div className="flex items-center gap-6 group">
                      <div className="w-16 h-16 rounded-full bg-white/50 border border-lumos-gray-medium/10 flex items-center justify-center group-hover:bg-lumos-yellow transition-colors backdrop-blur-sm">
                         <Mail className="text-lumos-black" />
                      </div>
                      <div>
                         <span className="block text-xs font-bold tracking-widest text-lumos-gray-medium">E-mail</span>
                         <span className="text-xl md:text-2xl font-light text-lumos-black">comercial@produtoralumos.com.br</span>
                      </div>
                   </div>
                   <div className="flex items-center gap-6 group">
                      <div className="w-16 h-16 rounded-full bg-white/50 border border-lumos-gray-medium/10 flex items-center justify-center group-hover:bg-lumos-yellow transition-colors backdrop-blur-sm">
                         <MessageCircle className="text-lumos-black" />
                      </div>
                      <div>
                         <span className="block text-xs font-bold tracking-widest text-lumos-gray-medium">WhatsApp</span>
                         <span className="text-xl md:text-2xl font-light text-lumos-black">+55 11 99331-6297</span>
                      </div>
                   </div>
                   <div className="flex items-center gap-6 group">
                      <div className="w-16 h-16 rounded-full bg-white/50 border border-lumos-gray-medium/10 flex items-center justify-center group-hover:bg-lumos-yellow transition-colors backdrop-blur-sm">
                         <Instagram className="text-lumos-black" />
                      </div>
                      <div>
                         <span className="block text-xs font-bold tracking-widest text-lumos-gray-medium">Instagram</span>
                         <span className="text-xl md:text-2xl font-light text-lumos-black">@produtoralumos</span>
                      </div>
                   </div>
                </div>
             </div>

             <div className="bg-lumos-black text-white p-12 relative overflow-hidden rounded-4xl">
                <div className="absolute top-0 right-0 w-32 h-32 bg-lumos-yellow/10 rounded-full blur-3xl" />
                <h3 className="text-2xl font-display font-bold mb-6">Nosso escritório</h3>
                <p className="text-xl text-white/80 font-light leading-relaxed mb-10">
                  Avenida Jaceru, 384 <br /> 
                  Vila Gertrudes, São Paulo - SP <br />
                  04705-000
                </p>
                
                {/* Google Maps Embed */}
                <div className="w-full h-64 rounded-2xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3656.051284852377!2d-46.6976694!3d-23.602528!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce50cb68ef3bd1%3A0xc34a02d645f0962!2sAv.%20Jaceru%2C%20384%20-%20Vila%20Gertrudes%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2004705-000!5e0!3m2!1spt-BR!2sbr!4v1711200000000!5m2!1spt-BR!2sbr" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                <div className="mt-8 border-t border-white/10 pt-8 flex items-center justify-between text-xs font-bold tracking-widest text-lumos-yellow">
                   <span>Parceiro oficial</span>
                   <span>Premium partner</span>
                </div>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
}
