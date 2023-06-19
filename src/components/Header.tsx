import Image from "next/image";

import You from '../assets/eu.jpg'
import IconMenu from "@/icons/iconMenu";
import { useState } from "react";
import MenuMobol from "./MenuMobol";
import IconCloseOutline from "@/icons/iconCloseOutline";
import { Link } from 'react-scroll';



export default function Header() {

    const [navBar, setNavBar] = useState(false)

    const [activeLink, setActiveLink] = useState('');






    return (
        <header className="bg-about border border-l-transparent border-r-transparent border-b-secondary" id="home">
            <div className="fixed z-[999] bg-about top-0 py-4 w-full border border-l-transparent border-secondary  flex justify-around items-center text-white">
                <h1 className="text-5xl font-bold">W<strong className="text-primary">P</strong></h1>
                <nav className="md-mobile:hidden">
                    <ul className="flex items-center gap-8">
                        <li>
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setActiveLink('home')}
                                className={`text-sm font-bold hover:text-primary cursor-pointer active:text-primary ${activeLink === 'home' ? 'text-primary' : ''}`}>

                                Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="about"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setActiveLink('about')}
                                className={`text-sm font-bold hover:text-primary cursor-pointer active:text-primary ${activeLink === 'about' ? 'text-primary' : ''}`}>
                                Sobre
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="projetos"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setActiveLink('projetos')}
                                className={`text-sm font-bold hover:text-primary cursor-pointer active:text-primary ${activeLink === 'projetos' ? 'text-primary' : ''}`}>
                                Projetos
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="servicos"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setActiveLink('servicos')}
                                className={`text-sm font-bold hover:text-primary cursor-pointer active:text-primary ${activeLink === 'servicos' ? 'text-primary' : ''}`}>

                                Serviços
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="contato"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => setActiveLink('contato')}
                                className={`text-sm font-bold hover:text-primary active:text-primary cursor-pointer ${activeLink === 'contato' ? 'text-primary' : ''}`}>
                                Contato
                            </Link>
                        </li>
                    </ul>
                </nav>

                <div>

                    {
                        navBar ? <button className="px-2 py-2 border md:hidden z-10 relative" onClick={() => setNavBar(false)}>
                            <IconCloseOutline width={20} height={20} />
                        </button> : <button className="px-2 py-2 border md:hidden" onClick={() => setNavBar(true)}>
                            <IconMenu width={20} height={20} />
                        </button>
                    }




                </div>




                {
                    navBar &&  <MenuMobol/>
                }


            </div>

            <div className="flex  p-10 justify-center flex-col items-center gap-5 animate__animated animate__zoomIn animate__delay-3s 2s">
                <Image src={You} width={200} height={200} alt="" className="rounded-full mt-20" />
                <small className="font-bold text-white">Olá, eu sou</small>
                <h2 className="font-bold text-white text-5xl md-mobile:text-4xl">Willian <strong className="text-primary">Pereira</strong></h2>
                <span className="text-secondary text-xl text-center">Eu atuo como <strong className="text-white">freelancer</strong>, oferecendo meus serviços de forma independente para diversos projetos.</span>

                <div className="flex items-center gap-5">
                    <Link to="https://drive.google.com/file/d/1Ho3ZcUpZkDkvPLUkBE5Z8ieNHAwEBmHr/view?usp=sharing" target="_blank" className="bg-btn1 py-3 px-3 cursor-pointer rounded-md text-white font-bold uppercase hover:bg-btn1-hover animate__animated animate__pulse animate__infinite">
                        Visualizar CV
                    </Link>


                    <Link to="about" className="bg-transparent border-2 border-primary py-3 px-3 rounded-md text-white font-bold hover:bg-btn1-hover uppercase cursor-pointer">
                        Sobre
                    </Link>
                </div>
            </div>



        </header >
    )
}