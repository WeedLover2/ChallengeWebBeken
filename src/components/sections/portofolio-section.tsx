import Image from "next/image";
import type { Tile } from "@/types/project";
import { portfolioTiles } from "@/app/data/portofolio";

function arrange(cols: number): Tile[] {
    const images = portfolioTiles.filter((t) => t.type === "image");
    const labels = portfolioTiles.filter((t) => t.type === "label");
    let i = 0;
    let l = 0;
    return portfolioTiles.map((_, n) => {
        const row = Math.floor(n / cols);
        const col = n % cols;
        return (row + col) % 2 === 0 ? images[i++] : labels[l++];
    });
    }

    function TileCell({ tile }: { tile: Tile }) {
    if (tile.type === "image") {
        return (
        <div className="relative aspect-square">
            <Image
            src={tile.src}
            alt=""
            fill
            sizes="(min-width: 1440px) 360px, (min-width: 768px) 25vw, 50vw"
            className="object-cover"
            />
        </div>
        );
    }
    return (
        <div
        style={{ backgroundColor: tile.color }}
        className="flex aspect-square items-center justify-center p-2 text-center text-xs font-medium uppercase text-white md:text-sm lg:text-base"
        >
        {tile.text}
        </div>
    );
}

export function PortfolioSection() {
    return (
        <section id="project">
        <div className="grid grid-cols-2 md:hidden">
            {arrange(2).map((tile, n) => (
            <TileCell key={n} tile={tile} />
            ))}
        </div>

        <div className="mx-auto hidden max-w-[1920px] grid-cols-4 md:grid">
            {arrange(4).map((tile, n) => (
            <TileCell key={n} tile={tile} />
            ))}
        </div>
        </section>
    );
}