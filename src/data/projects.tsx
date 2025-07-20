import { Item, SkilsTech } from "@/@types/Item";
import FswTrips from '../assets/fsw-trips.png'
import RickAndMorty from '../assets/rick-and-morty.png'
import Imc from '../assets/imc.png'

import IconHtml from "@/icons/iconHtml";
import IconCss from "@/icons/iconCss"; 
import IconJs from "@/icons/iconJs";
import IconTypescript from "@/icons/iconTypescript";
import IconReact from "@/icons/iconReact";
import IconPhp from "@/icons/iconPhp";
import IconNextjs from "@/icons/iconNextJs";
import IconStyledcomponents from "@/icons/iconStyledComponents";
import IconTailwindcss from "@/icons/iconTailwindcss";
import IconMysql from "@/icons/iconMysql";
import IconPostgresql from "@/icons/iconPostgresql";
import IconWordpress from "@/icons/iconWordPress";
import IconNodeJs from "@/icons/iconNode";






export const itemProjects: Item[] = [
    {
        id: 8,
        imagePath: FswTrips,
        url: 'https://fsw-gotwill.vercel.app/'
    },
    {
        id: 9,
        imagePath: RickAndMorty,
        url: 'https://rick-and-morty-gotwill.vercel.app/'
    },
    {
        id: 10,
        imagePath: Imc,
        url: 'https://react-calc-imc-gotwill.vercel.app/'
    },
]


export const itemsSkilTec: SkilsTech[] = [
    {
        id: 1,
        title: 'HTML',
        imagePath: <IconHtml fill="#fc4503" width={60} height={60}/>,
        bg: 'html'
    },

    {
        id: 2,
        title: 'CSS',
        imagePath: <IconCss fill="#0328fc" width={60} height={60}/>,
        bg: 'css'
    },
    {
        id: 3,
        title: 'JavaScript',
        imagePath: <IconJs fill="#fefe01" width={60} height={60}/>,
        bg: 'js'
    },

    {
        id: 4,
        title: 'Typescript',
        imagePath: <IconTypescript  width={60} height={60}/>,
        bg: 'typescript'
    },

    {
        id: 5,
        title: 'PHP',
        imagePath: <IconPhp fill="#4e5b98" width={60} height={60}/>,
        bg: 'php'
    },

    {
        id: 16,
        title: 'Node',
        imagePath: <IconNodeJs fill="#026e00" width={60} height={60}/>,
        bg: 'node'
    },
    {
        id: 6,
        title: 'React JS',
        imagePath: <IconReact fill="#61dafb" width={60} height={60}/>,
        bg: 'react'
    },

    {
        id: 8,
        title: 'Next Js',
        imagePath: <IconNextjs fill="#FFF" width={60} height={60}/>,
        bg: 'next',
    },
    {
        id: 9,
        title: 'Styled Components',
        imagePath: <IconStyledcomponents fill="#9f70b8" width={60} height={60}/>,
        bg: 'styled-components'
    },
    {
        id: 11,
        title: 'Tailwind',
        imagePath: <IconTailwindcss fill="#38bdf8" width={60} height={60}/>,
        bg: 'tailwind'
    },
    {
        id: 12,
        title: 'Mysql',
        imagePath: <IconMysql fill="#3e6e93" width={60} height={60}/>,
        bg: 'mysql'
    },
    {
        id: 13,
        title: 'Postgresql',
        imagePath: <IconPostgresql fill="#336791" width={60} height={60}/>,
        bg: 'postgresql'
    },
    {
        id: 15,
        title: 'Wordpress',
        imagePath: <IconWordpress fill="#288eb0" width={60} height={60}/>,
        bg: 'wordpress'
    },
]