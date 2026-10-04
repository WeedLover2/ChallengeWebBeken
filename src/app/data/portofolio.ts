import type { Tile } from "@/types/project";
import photo01 from "@/assets/images/cover MM_20170909_IMG_8719 1.png";
import photo02 from "@/assets/images/LCB.png";
import photo03 from "@/assets/images/aramaiyani.png";
import photo04 from "@/assets/images/Art.png";
import photo05 from "@/assets/images/Feed KTO-03 1.png";
import photo06 from "@/assets/images/4110752 1.png";

export const portfolioTiles: Tile[] = [
    { type: "image", src: photo01 },
    { type: "label", text: "CONCEPTING", color: "#DADADA" },
    { type: "image", src: photo02 },
    { type: "label", text: "DESIGN", color: "#DADADA" },
    { type: "label", text: "CULTURE", color: "#7B7675" },
    { type: "image", src: photo03 },
    { type: "label", text: "ART", color: "#7B7675" },
    { type: "image", src: photo04 },
    { type: "image", src: photo05 },
    { type: "label", text: "EDUCATION", color: "#DADADA" },
    { type: "image", src: photo06 },
    { type: "label", text: "SOSMED STRATEGY", color: "#DADADA" },
];