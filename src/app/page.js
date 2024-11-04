import Image from "next/image";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/Herosection";
import { AboutSection } from "@/components/Aboutsection";


export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <AboutSection />
    </div>
  );
}
