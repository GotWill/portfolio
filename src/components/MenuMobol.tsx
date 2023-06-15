import { useState } from 'react';
import { Link } from 'react-scroll';



export default function MenuMobol() {
    const [activeLink, setActiveLink] = useState('');

    function menuClick(text: string){
        setActiveLink(text)
    }

    return (

        <div className={`fixed top-0 right-0 bg-[#2f2f2f] min-h-screen w-60 md:hidden`}>
            <nav className="min-h-screen mt-24 px-8">
                <ul className="flex flex-col gap-5">
                <li>
                            <Link
                                to="home"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => menuClick('home')}
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
                                onClick={() => menuClick('about')}
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
                                onClick={() => menuClick('projetos')}
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
                                onClick={() => menuClick('servicos')}
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
                                onClick={() => menuClick('contato')}
                                className={`text-sm font-bold hover:text-primary active:text-primary cursor-pointer ${activeLink === 'contato' ? 'text-primary' : ''}`}>
                                Contato
                            </Link>
                        </li>
                </ul>
            </nav>
        </div>
        
    )
}