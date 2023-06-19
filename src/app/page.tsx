
"use client"
import 'animate.css';
import Skils from "@/components/Skils";
import Header from "../components/Header";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Foother from "@/components/Foother";
import { useEffect, useState } from "react";
import Loading from "@/components/Loading";
import IconWhatsapp from "@/icons/iconWhatsapp";
import Link from "next/link";


export default function Home() {

  const [loading, setLoading] = useState(true)

  useEffect(() =>{
  const timer =  setTimeout(()=>{
    setLoading(false)
   },300)

   return () => clearTimeout(timer);

  }, [])

  return (
    <div>

      {
        loading && <Loading/>
      }

      <Header/>
      <Skils/>
      <About/>
      <Portfolio/>
      <Services/>
      <Contact/>
      <Foother/>

      <Link href="https://api.whatsapp.com/send?phone=5511965239222" target="_blank" className="fixed flex justify-center items-center bg-[#25d366] w-14 h-14 rounded-full z-[999] bottom-8 right-3">
        <IconWhatsapp width={30} height={30} color="#FFF"/>
      </Link>
    </div>
  )
}
