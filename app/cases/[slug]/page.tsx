import { cases } from "@/lib/data";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Play, ExternalLink } from "lucide-react";
import FinalCTA from "@/components/home/FinalCTA";

export default function CasePage({ params }: { params: { slug: string } }) {
  const project = cases.find((c) => c.slug === params.slug);

  if (!project) notFound();

  return (
    <div className="bg-lumos-offwhite">
      {/* Hero */}
      <section className="pt-40 pb-24 bg-lumos-offwhite has-grain overflow-hidden">
        
        <div className="container mx-auto px-6 section-content">
          <Link 
            href="/portfolio" 
            className="group inline-flex items-center text-xs font-bold tracking-widest text-lumos-chumbo hover:text-lumos-yellow transition-colors mb-12"
          >
            <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={16} />
            Voltar ao portfólio
          </Link>
          
          <div className="mb-8">
            <span className="text-sm font-black tracking-[0.2em] text-lumos-black bg-black/5 border border-lumos-black/10 px-4 py-2 inline-block uppercase rounded-lg">
              {project.vertical}
            </span>
          </div>
          
          <h1 className="text-[clamp(2.5rem,5vw,4.5rem)] font-display font-black tracking-tighter leading-none mb-10 text-lumos-black">
            {project.title}
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-20">
             <div>
                <p className="text-xs font-bold text-lumos-chumbo tracking-widest mb-2 uppercase">Cliente</p>
                <p className="text-xl font-bold text-lumos-black">{project.client}</p>
             </div>
             <div>
                <p className="text-xs font-bold text-lumos-chumbo tracking-widest mb-2 uppercase">Serviço</p>
                <p className="text-xl font-bold text-lumos-black">{project.vertical}</p>
             </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-lumos-gray-light has-grain overflow-hidden">
        
        <div className="container mx-auto px-6 section-content">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            
             <div className="lg:col-span-12 w-full aspect-video bg-lumos-black flex items-center justify-center relative overflow-hidden group rounded-4xl shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-800 to-black opacity-60" />
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
                   <div className="w-24 h-24 rounded-full border border-lumos-yellow flex items-center justify-center bg-lumos-yellow/10 backdrop-blur-sm group-hover:scale-110 transition-transform duration-500">
                      <Play className="text-lumos-yellow fill-lumos-yellow" size={32} />
                   </div>
                    <p className="mt-6 text-white text-xs font-bold tracking-widest uppercase">Ver vídeo do projeto</p>
                </div>
                {project.videoUrl && (
                  <Link 
                    href={project.videoUrl} 
                    target="_blank" 
                    className="absolute inset-0 z-20"
                  />
                )}
             </div>

             <div className="lg:col-span-8 space-y-16 mt-16">
                <div>
                  <h2 className="text-xs font-bold tracking-widest text-lumos-yellow mb-6 uppercase">Contexto</h2>
                  <p className="text-xl md:text-2xl text-lumos-black leading-relaxed font-light mb-12">
                    Um filme publicitário bem feito não é só bonito, ele vende, posiciona e fica na memória.
                  </p>
                </div>

                <div>
                  <h2 className="text-xs font-bold tracking-widest text-lumos-yellow mb-6 uppercase">Resultado</h2>
                  <p className="text-xl md:text-2xl text-lumos-chumbo font-light leading-relaxed">
                    {project.result}
                  </p>
                </div>

                {project.testimonial && (
                  <div className="bg-white/40 backdrop-blur-md p-12 md:p-16 border-l-4 border-lumos-yellow rounded-4xl shadow-xl border border-white/20">
                    <p className="text-xl md:text-2xl text-lumos-black font-light leading-relaxed mb-8">
                       "{project.testimonial.text}"
                    </p>
                    <div className="flex items-center space-x-4">
                       <div className="w-10 h-px bg-lumos-yellow" />
                       <div>
                           <cite className="not-italic font-bold text-lg text-lumos-black">{project.testimonial.author}</cite>
                           <span className="block text-lumos-chumbo text-sm font-bold"> {project.testimonial.role}</span>
                       </div>
                    </div>
                  </div>
                )}
             </div>

             <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit mt-16">
                <div className="bg-white/40 backdrop-blur-md p-10 border border-white/20 rounded-4xl shadow-xl">
                    <h3 className="text-sm font-bold tracking-widest text-lumos-black mb-8 uppercase">O que esse case prova</h3>
                   <p className="text-lg text-lumos-chumbo font-light leading-relaxed mb-10">
                      {project.slug === "ford-go" 
                        ? "A Lumos não executa pedido. Entende o que está em jogo e entrega o que o cliente precisava, mesmo que ele ainda não soubesse disso."
                        : project.slug === "pagbrasil"
                        ? "Dois anos e meio de parceria contínua acontecem quando a produtora entende a marca, respeita o processo e entrega consistência."
                        : project.slug === "marimaria-burgerking"
                        ? "Conteúdo que converte não é sorte. É estratégia, execução e entendimento de marca, tudo junto."
                        : "Ambientes complexos exigem preparo. A Lumos chega em cada evento com planejamento para que o resultado ocorra com segurança."
                      }
                   </p>
                   {project.videoUrl && (
                      <Link 
                        href={project.videoUrl}
                        target="_blank"
                        className="group flex items-center space-x-3 text-lumos-black font-bold tracking-widest text-xs hover:text-lumos-yellow transition-colors"
                      >
                        <span>Acessar projeto externo</span>
                        <ExternalLink size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </Link>
                   )}
                </div>
             </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
}

export function generateStaticParams() {
  return cases.map((project) => ({
    slug: project.slug,
  }));
}
