import Image from "next/image";
import { studioInfo } from "@/app/data/studio-info";
import heroBg from "@/assets/images/herowebsitebeken.png"; 

export function HeroSection() {
    return (
        <section
        id="home"
        className="relative flex aspect-[16/10] items-center justify-center overflow-hidden md:h-svh md:aspect-auto"
        >
        <Image
            src={heroBg}
            alt={studioInfo.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
        />
        </section>
    );
}