import IconLinkedin from "@/icons/IconLinkedin";
import IconChevronDoubleUp from "@/icons/iconChevronDoubleUp";
import IconFacebook from "@/icons/iconFacebook";
import IconGithub from "@/icons/iconGitHub";
import IconInstagram from "@/icons/iconInstagram";
import Link from "next/link";

export default function Foother() {
    return (
        <footer className="bg-about py-12 relative">

            <div className="absolute -top-5 right-4 w-[50px] h-[50px] rounded-full bg-btn1">
                <div className="flex justify-center items-center h-full">
                    <Link href="">
                        <IconChevronDoubleUp width={18} height={18} color="#FFF" />
                    </Link>
                </div>


            </div>

            <div className="flex justify-center items-center gap-5">
              <Link href="https://github.com/GotWill" target="_blank" className="hover:-translate-y-4 hover:transition hover:ease-in-out ">
               <IconGithub width={30} height={30} color="#FFF"/>
              </Link>
              <Link href="https://www.facebook.com/profile.php?id=100022067898785&mibextid=ZbWKwL" target="_blank" className="hover:-translate-y-4 hover:transition hover:ease-in-out ">
               <IconFacebook width={30} height={30} color="#FFF"/>
              </Link>
              <Link href="https://www.instagram.com/eaemanowill/" target="_blank" className="hover:-translate-y-4 hover:transition hover:ease-in-out ">
               <IconInstagram width={30} height={30} color="#FFF"/>
              </Link>
              <Link href="https://www.linkedin.com/in/willian21/" target="_blank" className="hover:-translate-y-4 hover:transition hover:ease-in-out ">
               <IconLinkedin width={30} height={30} color="#FFF"/>
              </Link>
            </div>
        </footer>
    )
}