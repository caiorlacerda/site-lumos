import VerticalHero from "@/components/ui/VerticalHero";
import FinalCTA from "@/components/home/FinalCTA";

export default function FilmesPage() {
  return (
    <div className="bg-lumos-offwhite">
      <VerticalHero
        headline="Do conceito à tela."
        subheadline="Filmes publicitários, campanhas e produções cinematográficas para marcas e agências que não abrem mão de qualidade."
        description="Um filme publicitário bem feito não é só bonito, ele vende, posiciona e fica na memória. Na Lumos, a produção de filmes começa muito antes das câmeras. Começa no entendimento do que a marca precisa comunicar e de quem ela quer alcançar."
        formats={[
          "Filme publicitário", "Campanha digital e TV", "Cinema", 
          "Institucional", "Conteúdo para grandes eventos", "Teaser e trailer"
        ]}
        whyLumosItems={[
          "Entregamos além do briefing. A Ford pediu cobertura de evento. Entregamos um filme completo.",
          "Processo impecável. Do conceito ao corte final, cada detalhe é planejado para o máximo impacto.",
          "Parceiro de agências. Funcionamos como extensão da equipe, sem ruído e sem retrabalho."
        ]}
      />
      
      {/* Case Section */}
      <section className="section bg-lumos-gray-light has-grain">
        
        <div className="container mx-auto px-6 section-content">
          <div className="bg-white/40 backdrop-blur-md p-12 md:p-24 shadow-2xl border border-white/20 flex flex-col md:flex-row-reverse items-center gap-16 rounded-4xl">
            <div className="flex-1 md:text-right">
              <span className="text-lumos-black/50 font-black tracking-widest text-sm mb-6 block uppercase">Case relacionado</span>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-display font-black tracking-tighter leading-tight mb-8 text-lumos-black">
                Ford Go
              </h2>
              <p className="text-xl text-lumos-chumbo font-light leading-relaxed mb-10">
                O briefing era cobertura de evento para o Ford Go. O que a Lumos entregou foi um filme publicitário completo que circulou para todo o time Ford.
              </p>
              <a href="/cases/ford-go" className="inline-flex items-center text-lumos-black font-bold tracking-widest border-b-2 border-lumos-black/20 pb-2 hover:opacity-70 transition-opacity">
                Ver case completo
              </a>
            </div>
            <div className="flex-1 w-full aspect-video bg-zinc-200 relative overflow-hidden rounded-3xl">
               <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-bold tracking-widest">
                 Ford Go
               </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
