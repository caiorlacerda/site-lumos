import { team } from "@/lib/data";
import FinalCTA from "@/components/home/FinalCTA";

export default function SobrePage() {
  return (
    <div className="bg-lumos-offwhite">
      {/* Hero */}
      <section className="page-hero page-content bg-lumos-offwhite has-grain">
        
        <div className="container mx-auto px-6 section-content">
          <h1 className="text-5xl md:text-8xl font-display font-black tracking-tighter leading-none mb-10 max-w-4xl text-lumos-black">
            Feitos para contar histórias que importam.
          </h1>
          <p className="text-xl md:text-3xl text-lumos-chumbo font-light mb-16 max-w-3xl leading-relaxed">
            Somos uma produtora audiovisual de São Paulo. Na prática, somos o time de vídeo que as marcas precisam ter dentro de casa.
          </p>
        </div>
      </section>

      {/* Manifesto Re-entry */}
      <section className="section-manifesto bg-lumos-gray-light has-grain">
        
        <div className="container mx-auto px-6 section-content">
          <div className="max-w-4xl">
             <h2 className="manifesto-label text-sm font-bold tracking-widest text-lumos-chumbo mb-8">Nosso manifesto</h2>
             <p className="manifesto-headline text-2xl md:text-4xl font-display font-black text-lumos-black mb-8 leading-tight">
               Conteúdo com propósito. Entrega com consistência.
             </p>
             <div className="space-y-6 text-xl text-lumos-chumbo font-light leading-relaxed">
                <p>Não fazemos por fazer. Cada projeto tem estratégia, cada entrega tem intenção. Somos o time que entende o seu negócio antes de ligar a câmera.</p>
                <p>A Lumos não é pastelaria. É conteúdo pensado para o negócio do cliente, com organização, dedicação e qualidade que aparecem no resultado final.</p>
             </div>
          </div>
        </div>
      </section>

      {/* Team Grid */}
      <section className="section bg-lumos-offwhite has-grain">
        
        
        <div className="container mx-auto px-6 section-content">
          <h2 className="text-4xl md:text-6xl font-display font-black tracking-tighter mb-16 text-lumos-black">
            Nosso time
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {team.map((member) => (
              <div key={member.name} className="group">
                <div className="aspect-[4/5] bg-zinc-200 mb-6 grayscale group-hover:grayscale-0 transition-all duration-500 overflow-hidden relative rounded-3xl">
                   {member.image ? (
                     <img 
                       src={member.image} 
                       alt={member.name} 
                       className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                     />
                   ) : (
                     <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-bold tracking-widest text-xs">
                       {member.name}
                     </div>
                   )}
                </div>
                <h4 className="text-lg font-bold text-lumos-black tracking-tighter leading-none mb-1">{member.name}</h4>
                <p className="text-sm text-lumos-chumbo font-bold">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <FinalCTA variant="sobre" />
    </div>
  );
}
