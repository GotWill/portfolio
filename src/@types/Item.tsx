import { StaticImageData } from "next/image";


export type Item = {
    id: number;
    imagePath: StaticImageData | string;
    url: string;
}