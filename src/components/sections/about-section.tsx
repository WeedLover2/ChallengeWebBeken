import Image from "next/image";
import { studioInfo } from "@/app/data/studio-info";
import logo from "@/assets/images/logobeken.png"; 
export function AboutSection() {
    return (
        <section id="about" className="bg-[#F5F5F5] text-neutral-800">
        <div className="mx-auto grid max-w-7xl items-center gap-8 px-6 py-16 md:grid-cols-[1fr_2fr] md:py-24">
            <Image
            src={logo}
            alt={studioInfo.name}
            className="h-auto w-32 md:w-48"
            />

            <div className="space-y-4 text-sm leading-relaxed">
            {studioInfo.about.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
            ))}
            </div>
        </div>
        </section>
    );
}