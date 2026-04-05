import { ArrowRight, MapPin, Camera, Users, Target } from "lucide-react";
import Link from "next/link";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata = {
  title: "Casa da Lumos — Estúdio para Locação em São Paulo",
  description: "Estúdio completo com ciclorama, chroma key, equipamento profissional e técnico incluso. Locação por hora perto do Morumbi e Berrini, SP.",
};

export default function EstudioPage() {
  const scenários = ["Ciclorama", "Chroma Key", "Cenários para conteúdo digital"];
  const equipamentos = [
    "Câmeras e lentes profissionais",
    "Iluminação completa (LED, fresnel, softbox)",
    "Teleprompter",
    "Mesa de som e tratamento acústico",
    "Switcher e setup de live",
  ];

  const targetAudiences = [
    {
      title: "Para marcas e empresas",
      description: "Grave seu institucional, treinamento, podcast corporativo ou live com a estrutura que a sua marca merece. Sem improvisar, sem terceirizar o controle da qualidade.",
      icon: <Target className="text-lumos-yellow" size={32} />,
    },
    {
      title: "Para criadores e podcasters",
      description: "Um estúdio profissional por hora — com luz, som e câmera já prontos. Você chega, grava e sai com o material no nível que o seu conteúdo merece.",
      icon: <Camera className="text-lumos-yellow" size={32} />,
    },
    {
      title: "Para atores e artistas",
      description: "Ensaios fotográficos, gravações de material de divulgação ou captação de conteúdo — com cenários, iluminação e equipe técnica disponíveis.",
      icon: <Users className="text-lumos-yellow" size={32} />,
    },
  ];

  return (
    <div className="bg-lumos-offwhite">
      {/* Hero */}
      <section className="gradient-hero has-grain min-h-[70vh] flex items-center justify-center relative pt-20">
        <div className="glow-spot" aria-hidden="true" />
        <div className="container mx-auto px-6 text-center z-10 section-content flex justify-center">
          <div className="hero-content text-center isolate w-full max-w-4xl py-20">
            <h1 className="font-display font-black text-white tracking-tighter mx-auto text-5xl md:text-7xl leading-none mb-8">
              A Casa da Lumos.
            </h1>
            <p className="text-xl md:text-2xl text-white/60 max-w-2xl mx-auto font-light leading-relaxed">
              Um estúdio completo no coração de São Paulo — para quem leva produção a sério.
            </p>
          </div>
        </div>
      </section>

      {/* Description & Location */}
      <section className="section bg-lumos-offwhite has-grain overflow-hidden">
        <div className="container mx-auto px-6 section-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-sm font-bold tracking-widest text-lumos-black/40 mb-8 uppercase">O Estúdio</h2>
              <p className="text-xl md:text-2xl text-lumos-black/80 leading-relaxed font-light mb-8">
                A Casa da Lumos é o estúdio da Produtora Lumos, disponível para locação por hora em São Paulo. 
                Localizado próximo ao Shopping Morumbi e à Berrini, o espaço foi montado para atender qualquer tipo de produção audiovisual — 
                com estrutura profissional, equipamento completo e um técnico presente em cada sessão.
              </p>
              <p className="text-xl md:text-2xl text-lumos-black/80 leading-relaxed font-light italic">
                Não é só um espaço vazio com uma câmera. É um estúdio pensado por quem produz conteúdo todos os dias.
              </p>
            </div>
            <div className="bg-white/50 backdrop-blur-sm p-4 border border-lumos-black/10 rounded-4xl overflow-hidden shadow-xl">
               {/* Google Maps Embed */}
              <div className="w-full h-80 rounded-3xl overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
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
            </div>
          </div>
        </div>
      </section>

      {/* Scenarios & Equipment */}
      <section className="section bg-lumos-gray-light has-grain">
        <div className="container mx-auto px-6 section-content">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-3xl font-display font-black text-lumos-black mb-10 tracking-tighter">Cenários</h2>
              <div className="pills-grid">
                {scenários.map((s, i) => (
                  <span key={i} className="pill-item bg-white/40 border-lumos-black/5">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-display font-black text-lumos-black mb-10 tracking-tighter">Equipamentos</h2>
              <div className="flex flex-wrap gap-3">
                {equipamentos.map((e, i) => (
                  <span key={i} className="pill-item bg-lumos-black text-white border-transparent">
                    {e}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* For Whom section */}
      <section className="section bg-lumos-offwhite has-grain">
        <div className="container mx-auto px-6 section-content text-center">
          <h2 className="text-4xl md:text-5xl font-display font-black text-lumos-black mb-20 tracking-tighter">Para quem é</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {targetAudiences.map((audience, idx) => (
              <div key={idx} className="bg-white p-12 rounded-4xl border border-lumos-black/5 hover:border-lumos-yellow transition-all group text-left shadow-sm hover:shadow-xl hover:shadow-lumos-yellow/5">
                <div className="mb-8 transform group-hover:scale-110 transition-transform origin-left">
                  {audience.icon}
                </div>
                <h3 className="text-2xl font-bold text-lumos-black mb-6 tracking-tight">{audience.title}</h3>
                <p className="text-lg text-lumos-chumbo font-light leading-relaxed">
                  {audience.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA 
        variant="estudio" 
        title="Reserva a sua hora na Casa da Lumos."
        description="Fale com a gente para verificar disponibilidade e valores."
        buttonText="Quero reservar"
        showPortfolio={false}
      />
    </div>
  );
}
