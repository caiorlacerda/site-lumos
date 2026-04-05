import Hero from "@/components/home/Hero";
import Manifesto from "@/components/home/Manifesto";
import FeaturedCases from "@/components/home/FeaturedCases";
import Services from "@/components/home/Services";
import TagsSection from "@/components/home/TagsSection";
import ClientsGrid from "@/components/home/ClientsGrid";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Manifesto />
      <TagsSection />
      <Services />
      <FeaturedCases />
      <ClientsGrid />
      <FinalCTA />
    </>
  );
}
