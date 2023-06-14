
"use client"
import Image from "next/image";
import Link from "next/link";

import You from '../assets/eu.jpg'
import IconMenu from "@/icons/iconMenu";
import { useState } from "react";
import MenuMobol from "./MenuMobol";
import IconCloseOutline from "@/icons/iconCloseOutline";

export default function Header() {

    const [navBar, setNavBar] = useState(false)

    return (
        <header className=" p-10 bg-primary md-mobile:p-8">
            <div className="max-w-7xl w-full m-auto flex justify-around items-center text-white">
                <Image src="https://ethemestudio.com/demo/fungi/3_programmer/image/fungi_logo.png" width={200} height={200} alt="" />

                <nav className="md-mobile:hidden">
                    <ul className="flex items-center gap-8">
                        <li>
                            <Link href="/" className="text-sm font-bold hover:text-primary active:text-primary">
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="#about" className="font-bold text-sm hover:text-primary active:text-primary">
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="#projetos" className="font-bold text-sm hover:text-primary active:text-primary">
                                Projetos
                            </Link>
                        </li>
                        <li>
                            <Link href="#servicos" className="font-bold text-sm hover:text-primary active:text-primary">
                                Serviços
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="font-bold text-sm hover:text-primary active:text-primary">
                                Contato
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div>

                    {
                        navBar ? <button className="px-2 py-2 border md:hidden z-10 relative" onClick={() => setNavBar(false)}>
                            <IconCloseOutline width={20} height={20}/>
                        </button> : <button className="px-2 py-2 border md:hidden" onClick={() => setNavBar(true)}>
                            <IconMenu width={20} height={20} />
                        </button>
                    }




                </div>




                {
                    navBar && <MenuMobol />
                }


            </div>

            <div className="flex justify-center flex-col items-center gap-5 mt-3">
                <Image src={You} width={200} height={200} alt="" className="rounded-full" />
                <small className="font-bold text-white">Hello There, I'm</small>
                <h1 className="font-bold text-white text-5xl md-mobile:text-4xl">Willian <strong className="text-primary">Pereira</strong></h1>
                <span className="text-secondary text-xl">A Computer Programmer who loves to code in <strong className="text-white">Javascript</strong></span>

                <div className="flex items-center gap-5">
                    <Link href="" className="bg-btn1 py-3 px-3 rounded-md text-white font-bold uppercase hover:bg-btn1-hover">
                        Download CV
                    </Link>

                    <Link href="" className="bg-transparent border-2 border-primary py-3 px-3 rounded-md text-white font-bold hover:bg-btn1-hover uppercase">
                        About Me
                    </Link>
                </div>
            </div>



        </header >
    )
}