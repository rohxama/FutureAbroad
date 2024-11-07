import Image from "next/image";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/Herosection";
import { AboutSection } from "@/components/Aboutsection";
import { ServicesSection } from "@/components/Services";
import { CountriesSection } from "@/components/Countries";
import { TestimonialsSection } from "@/components/Testimonials";
import { Footer } from "@/components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <CountriesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
}
