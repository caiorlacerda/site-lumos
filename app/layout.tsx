import type { Metadata } from "next";
import { Poppins, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


const workSans = Work_Sans({ 
  subsets: ["latin"],
  variable: "--font-body",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "900"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Produtora Lumos",
  description: "O time de vídeo que a sua marca precisava ter dentro de casa. Digital, filme e live para marcas que não abrem mão de qualidade.",
  icons: {
    icon: "/favicon.svg",
  },
  openGraph: {
    title: "Produtora Lumos",
    description: "O time de vídeo que a sua marca precisava ter dentro de casa.",
    type: "website",
    locale: "pt_BR",
    url: "https://produtoralumos.com.br",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${workSans.variable} ${poppins.variable} scroll-smooth`}>
      <body className="bg-lumos-offwhite text-lumos-black selection:bg-lumos-yellow selection:text-lumos-black">

        <Navbar />
        <main className="min-h-screen px-4 md:px-8 lg:px-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
