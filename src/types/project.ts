import type { StaticImageData } from "next/image";

export type Tile =
    | { type: "image"; src: StaticImageData }
    | { type: "label"; text: string; color: string };