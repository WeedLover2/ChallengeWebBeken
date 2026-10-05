import { studioInfo } from "@/app/data/studio-info";
import Image from 'next/image';
import logobekenputih from "@/assets/images/logobekenputih.png"; 
import youtubepng from "@/assets/images/youtubeicon.png";
import instagrampng from "@/assets/images/instagramicon.png";
import Link from "next/link";


export function Footer() {
    return (
        <footer id="contact" className="bg-brand text-white">
        <div className="mx-auto grid max-w-[1200px] items-start gap-8 px-6 py-8 md:grid-cols-[auto_auto_auto] md:justify-between md:gap-x-10 md:py-14">
            <div>
            <Image
                src={logobekenputih}
                alt={studioInfo.name}
                className="h-auto w-24 md:w-32"
            />
            <p className="mt-1 text-sm font-bold md:text-base">Creative Studio</p>
            </div>

            <div className="space-y-3 text-xs md:max-w-xs md:text-sm">
            <p className="text-sm font-bold md:text-base">{studioInfo.company}</p>
            <dl className="space-y-3">
                {studioInfo.addresses.map((item) => (
                <div key={item.label} className="grid grid-cols-[4rem_1fr] gap-2">
                    <dt className="opacity-80">{item.label} :</dt>
                    <dd>{item.value}</dd>
                </div>
                ))}
            </dl>
            </div>
            <div className="text-xs md:text-sm">
            <p className="mb-3 font-bold">Follow us:</p>
            <ul className="flex gap-3">
                <li>
                    <Link href="https://www.youtube.com/">
                        <Image
                            src={youtubepng}
                            alt="youtube"
                            className="h-auto w-26"
                        />
                    </Link>
                </li>
                <li>
                    <Link href="https://www.instagram.com/">
                        <Image
                            src={instagrampng}
                            alt="instagram"
                            className="h-auto w-26"
                        />
                    </Link>
                </li>
            </ul>
            </div>
        </div>
        </footer>
    );
}