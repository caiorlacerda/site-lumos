import VerticalHero from "@/components/ui/VerticalHero";
import FinalCTA from "@/components/home/FinalCTA";

export default function LivestreamPage() {
  return (
    <div className="bg-lumos-offwhite">
      <VerticalHero
        headline="Com quem já esteve nos maiores eventos."
        subheadline="Transmissões profissionais para marcas que sabem o quanto a exposição ao vivo importa."
        description="Live não perdoa erro. O que vai ao ar, foi ao ar. Por isso, quem cuida da transmissão precisa ser tão criterioso com a sua marca quanto você é. A Lumos traz equipamento, equipe e processo para cada transmissão."
        formats={[
          "Planejamento técnico", "Setup de câmeras, áudio e iluminação", 
          "Transmissão ao vivo multiplataforma", "Cobertura fotográfica e de vídeo", 
          "Edição e entrega pós-evento", "Suporte técnico durante a transmissão"
        ]}
        whyLumosItems={[
          "Confiança de grandes marcas. Ducati e PagBrasil escolhem a Lumos pela segurança.",
          "Processo de ponta a ponta. A gente cuida de tudo antes, durante e depois da live.",
          "Zero margem de falha. Protocolos técnicos rigorosos para garantir a integridade da transmissão."
        ]}
      />
      
      {/* Case Section */}
      <section className="section bg-lumos-gray-light has-grain">
        
        <div className="container mx-auto px-6 section-content grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white/40 backdrop-blur-md p-12 shadow-2xl border border-white/20 rounded-4xl">
            <span className="text-lumos-black/50 font-black tracking-widest text-sm mb-6 block uppercase">Case relacionado</span>
            <h2 className="text-[clamp(1.5rem,3.5vw,2.8rem)] font-display font-black tracking-tighter leading-tight mb-8 text-lumos-black">
              Ducati DRE
            </h2>
            <p className="text-lg text-lumos-chumbo font-light leading-relaxed mb-10">
              Cobertura total. Do autódromo Velocitta à tela. Performance e precisão em um ambiente complexo.
            </p>
            <a href="/cases/ducati-dre" className="inline-flex items-center text-lumos-black font-bold tracking-widest border-b-2 border-lumos-black/20 pb-2 hover:opacity-70 transition-opacity">
              Ver case
            </a>
          </div>
          
          <div className="bg-white/40 backdrop-blur-md p-12 shadow-2xl border border-white/20 rounded-4xl">
            <span className="text-lumos-black/50 font-black tracking-widest text-sm mb-6 block uppercase">Case relacionado</span>
            <h2 className="text-[clamp(1.5rem,3.5vw,2.8rem)] font-display font-black tracking-tighter leading-tight mb-8 text-lumos-black">
              PagBrasil
            </h2>
            <p className="text-lg text-lumos-chumbo font-light leading-relaxed mb-10">
              2 anos e meio de parceria contínua com mais de 8 eventos cobertos com excelência técnica.
            </p>
            <a href="/cases/pagbrasil" className="inline-flex items-center text-lumos-black font-bold tracking-widest border-b-2 border-lumos-black/20 pb-2 hover:opacity-70 transition-opacity">
              Ver case
            </a>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}
