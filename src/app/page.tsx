import Skils from "@/components/Skils";
import Header from "../components/Header";
import About from "@/components/About";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Contact from "@/components/Contact";
import Foother from "@/components/Foother";

export default function Home() {
  return (
    <main>
      <Header/>
      <Skils/>
      <About/>
      <Portfolio/>
      <Services/>
      <Contact/>
      <Foother/>
    </main>
  )
}
