import { StaticImageData } from "next/image";
import React, { ReactNode } from "react";


export type Item = {
    id: number;
    imagePath: StaticImageData | string;
    url: string;
}

export type SkilsTech = {
    id: number;
    title: string;
    bg: string;
    imagePath: ReactNode
}