import Link from "next/link";
import { Instagram, Linkedin, MessageCircle, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-lumos-black text-white py-16 border-t border-white/10">
      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="col-span-1 md:col-span-2">
          <Link href="/" className="mb-6 block">
            <img src="/assets/logos/Logo-Branco-Alpha.svg" alt="Lumos" className="h-8 w-auto" />
          </Link>
          <p className="text-white/60 max-w-sm mb-8">
            O time de vídeo que a sua marca precisava ter dentro de casa.
            Conteúdo apaixonado, entrega consistente.
          </p>
          <div className="flex space-x-6">
            <Link href="https://instagram.com/produtoralumos" className="hover:text-lumos-yellow transition-colors">
              <Instagram size={24} />
            </Link>
            <Link href="https://linkedin.com/company/produtoralumos" className="hover:text-lumos-yellow transition-colors">
              <Linkedin size={24} />
            </Link>
            <Link href="https://wa.me/5511986676747" className="hover:text-lumos-yellow transition-colors">
              <MessageCircle size={24} />
            </Link>
            <Link href="mailto:comercial@produtoralumos.com.br" className="hover:text-lumos-yellow transition-colors">
              <Mail size={24} />
            </Link>
          </div>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Páginas</h4>
          <ul className="space-y-4 text-white/50 text-sm font-medium">
            <li><Link href="/sobre" className="hover:text-lumos-yellow transition-colors">Sobre</Link></li>
            <li><Link href="/conteudo" className="hover:text-lumos-yellow transition-colors">Digital</Link></li>
            <li><Link href="/filmes" className="hover:text-lumos-yellow transition-colors">Filme</Link></li>
            <li><Link href="/livestream" className="hover:text-lumos-yellow transition-colors">Live</Link></li>
            <li><Link href="/portfolio" className="hover:text-lumos-yellow transition-colors">Portfólio</Link></li>
            <li><Link href="/contato" className="hover:text-lumos-yellow transition-colors">Contato</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-bold mb-6 uppercase tracking-widest text-xs">Fale conosco</h4>
          <ul className="space-y-4 text-white/50 text-sm font-medium mb-8">
            <li>Avenida Jaceru, 384 — SP</li>
            <li>comercial@produtoralumos.com.br</li>
            <li>+55 11 98667-6747</li>
          </ul>
          
          {/* Small Footer Map */}
          <div className="w-full h-32 rounded-xl overflow-hidden grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-700 border border-white/5">
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

      <div className="container mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
        <p>© {currentYear} Lumos Produtora Audiovisual. Todos os direitos reservados.</p>
        <p className="mt-4 md:mt-0">Feito para contar histórias que importam.</p>
      </div>
    </footer>
  );
}
