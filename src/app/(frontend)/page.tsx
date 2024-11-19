// import PageTemplate, { generateMetadata } from './[slug]/page'

// export default PageTemplate

// export { generateMetadata }

import Image from "next/image";
import { Header } from "@/app/(frontend)/_components/Header";
import { HeroSection } from "@/app/(frontend)/_components/Herosection";
import { AboutSection } from "@/app/(frontend)/_components/Aboutsection";
import { ServicesSection } from "@/app/(frontend)/_components/Services";
import { CountriesSection } from "@/app/(frontend)/_components/Countries";
import { TestimonialsSection } from "@/app/(frontend)/_components/Testimonials";
import { Footer } from "@/app/(frontend)/_components/Footer";


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