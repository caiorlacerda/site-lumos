"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const navLinks = [
  { name: "Sobre", href: "/sobre" },
  { name: "Portfólio", href: "/portfolio" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const pathname = usePathname();

  const handleDropdownEnter = () => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 250);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isForcedDark = pathname === "/conteudo" || pathname === "/filmes" || pathname === "/livestream" || pathname === "/sobre" || pathname === "/estudio";

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 w-full z-50 transition-all duration-300",
        isForcedDark 
          ? "nav-dark-forced py-4"
          : isScrolled || pathname === "/contato" || pathname === "/portfolio"
          ? "glass-navbar py-4"
          : "bg-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <img src="/assets/logos/Logo-Branco-Alpha.svg" alt="Lumos" className="h-7 md:h-8 w-auto" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <Link
            href="/sobre"
            className={cn(
              "text-sm font-medium transition-colors hover:text-lumos-yellow",
              pathname === "/sobre" ? "text-lumos-yellow" : "text-white/80"
            )}
          >
            Sobre
          </Link>
          
          {/* Dropdown de Serviços */}
          <div 
            className="nav-dropdown-wrapper"
            onMouseEnter={handleDropdownEnter}
            onMouseLeave={handleDropdownLeave}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-white/80 hover:text-lumos-yellow transition-colors">
              Serviços
              <ChevronDown size={14} />
            </button>
            <div className={cn("nav-dropdown-menu", isDropdownOpen && "is-open")}>
              <Link 
                href="/conteudo" 
                className={pathname === "/conteudo" ? "text-lumos-yellow" : ""}
              >
                Digital
              </Link>
              <Link 
                href="/filmes" 
                className={pathname === "/filmes" ? "text-lumos-yellow" : ""}
              >
                Filme
              </Link>
              <Link 
                href="/livestream" 
                className={pathname === "/livestream" ? "text-lumos-yellow" : ""}
              >
                Live
              </Link>
            </div>
          </div>

          <Link
            href="/estudio"
            className={cn(
              "text-sm font-medium transition-colors hover:text-lumos-yellow",
              pathname === "/estudio" ? "text-lumos-yellow" : "text-white/80"
            )}
          >
            Casa da Lumos
          </Link>

          <Link
            href="/portfolio"
            className={cn(
              "text-sm font-medium transition-colors hover:text-lumos-yellow",
              pathname === "/portfolio" ? "text-lumos-yellow" : "text-white/80"
            )}
          >
            Portfólio
          </Link>
          <Link
            href="/contato"
            className="bg-lumos-yellow text-lumos-black px-5 py-2 text-sm font-bold tracking-wider hover:bg-white transition-colors rounded-full"
          >
            Fale conosco
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed inset-0 bg-lumos-black z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-500 md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <Link href="/sobre" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-lumos-yellow">Sobre</Link>
        <Link href="/conteudo" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-lumos-yellow">Digital</Link>
        <Link href="/filmes" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-lumos-yellow">Filme</Link>
        <Link href="/livestream" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-lumos-yellow">Live</Link>
        <Link href="/estudio" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-lumos-yellow">Casa da Lumos</Link>
        <Link href="/portfolio" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-lumos-yellow">Portfólio</Link>
        <Link href="/contato" onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold text-white hover:text-lumos-yellow">Contato</Link>
      </div>
    </nav>
  );
}
