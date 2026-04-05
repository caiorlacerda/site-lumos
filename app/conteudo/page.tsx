import VerticalHero from "@/components/ui/VerticalHero";
import FinalCTA from "@/components/home/FinalCTA";

export default function ConteudoPage() {
  return (
    <div className="bg-lumos-offwhite">
      <VerticalHero
        headline="Conteúdo que trabalha pela sua marca todos os dias."
        subheadline="Da roteirização à entrega final, a gente cuida de cada etapa para que você só precise aprovar."
        description="Produzir conteúdo de verdade não é postar por postar. É ter uma estratégia por trás de cada vídeo, cada foto, cada episódio. É entender o que a sua marca precisa comunicar antes de ligar a câmera."
        formats={[
          "Podcast", "Websérie", "Reels e Stories", "Institucional", 
          "Treinamento corporativo", "Fotografia", "Feiras e eventos", 
          "Curso", "Experiências de marca"
        ]}
        whyLumosItems={[
          "Aprovação de primeira. Atenção aos detalhes desde o início significa menos retrabalho.",
          "A gente absorve a sua marca. Não precisamos de um briefing novo a cada projeto.",
          "Consistência sem perder qualidade. Volume alto não é desculpa para entrega fraca."
        ]}
      />
      
      {/* Case Section */}
      <section className="section bg-lumos-gray-light has-grain">
        
        <div className="container mx-auto px-6 section-content">
          <div className="bg-white/40 backdrop-blur-md p-12 md:p-24 shadow-2xl border border-white/20 flex flex-col md:flex-row items-center gap-16 rounded-4xl">
            <div className="flex-1">
              <span className="text-lumos-black/50 font-black tracking-widest text-sm mb-6 block uppercase">Case relacionado</span>
              <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-display font-black tracking-tighter leading-tight mb-8 text-lumos-black">
                Burger King × Mari Maria
              </h2>
              <p className="text-xl text-lumos-chumbo font-light leading-relaxed mb-10">
                A Lumos captou, editou e apoiou a autorização para o lançamento do Gloss em parceria entre Mari Maria e Burger King. O vídeo foi o conteúdo principal da campanha, e o boom foi nacional.
              </p>
              <a href="/cases/marimaria-burgerking" className="inline-flex items-center text-lumos-black font-bold tracking-widest border-b-2 border-lumos-black/20 pb-2 hover:opacity-70 transition-opacity">
                Ver case completo
              </a>
            </div>
            <div className="flex-1 w-full aspect-video bg-zinc-200 relative overflow-hidden rounded-3xl">
               {/* Placeholder with text for now */}
                <div className="absolute inset-0 flex items-center justify-center text-zinc-400 font-bold tracking-widest">
                  Case Mari Maria
                </div>
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
