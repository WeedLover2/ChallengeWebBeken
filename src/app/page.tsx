import { HeroSection } from "@/components/sections/hero-sections";
import { AboutSection } from "@/components/sections/about-section";
import { PortfolioSection } from "@/components/sections/portofolio-section";

export default function HomePage() {
    return (
        <main>
        <HeroSection />
        <AboutSection />
        <PortfolioSection />
        </main>
    );
}