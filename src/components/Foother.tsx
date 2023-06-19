import IconLinkedin from "@/icons/IconLinkedin";
import IconChevronDoubleUp from "@/icons/iconChevronDoubleUp";
import IconFacebook from "@/icons/iconFacebook";
import IconGithub from "@/icons/iconGitHub";
import IconInstagram from "@/icons/iconInstagram";
import Link from "next/link";
import { Link as LinkReact } from 'react-scroll';


export default function Foother() {
    return (
        <footer className="bg-secondary py-12 relative">

            <div className="absolute -top-5 right-4 w-[50px] h-[50px] rounded-full bg-btn1">
                <div className="flex justify-center items-center h-full">
                    <LinkReact
                    className="cursor-pointer"
                    to="home"
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}>
                        <IconChevronDoubleUp width={18} height={18} color="#FFF" />
                    </LinkReact>
                </div>


            </div>

            <div className="flex justify-center items-center gap-5">
              <Link href="https://github.com/GotWill" target="_blank" className="hover:-translate-y-4 hover:transition hover:ease-in-out w-10 h-10 bg-about flex justify-center  items-center rounded group hover:bg-btn1">
               <IconGithub width={25} height={25} className="text-primary group-hover:text-white"/>
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=100022067898785&mibextid=ZbWKwL" target="_blank" className="hover:-translate-y-4 hover:transition hover:ease-in-out w-10 h-10 bg-about flex justify-center  items-center rounded group hover:bg-btn1">
               <IconFacebook width={25} height={25}  className="text-primary group-hover:text-white"/>
              </Link>
              <Link href="https://www.instagram.com/eaemanowill/" target="_blank" className="hover:-translate-y-4 hover:transition hover:ease-in-out w-10 h-10 bg-about flex justify-center  items-center rounded group hover:bg-btn1">
               <IconInstagram width={25} height={25} className="text-primary group-hover:text-white"/>
              </Link>
              <Link href="https://www.linkedin.com/in/willian21/" target="_blank" className="hover:-translate-y-4 hover:transition hover:ease-in-out w-10 h-10 bg-about flex justify-center  items-center rounded group hover:bg-btn1">
               <IconLinkedin width={25} height={30} className="text-primary group-hover:text-white"/>
              </Link>
            </div>
        </footer>
    )
}