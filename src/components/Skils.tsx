import IconReact from "@/icons/iconReact";
import Image from "next/image";
import Title from "./Title";
import IconResponsive from "@/icons/iconResponsive";
import IconLightbulb from "@/icons/iconLightbulb";
import IconRocketSharp from "@/icons/IconRocketSharp";
import IconLightbulbFlashFill from "@/icons/IconLightbulbFlashFill";
import IconUsers from "@/icons/iconUsers";

export default function Skils() {



    return (
        <section className="bg-secondary pt-28 pb-20 animate__animated animate__backInLeft border border-t-transparent border-l-transparent border-r-transparent border-b-secondary">
            <div className="max-w-4xl w-full m-auto flex items-center justify-between md-mobile:justify-center">
                <div className="animate-bounce">

                </div>

                <Title title="FORÇAS E VALORES" />
                <span></span>
            </div>
            <p className="mt-3 max-w-[600px] w-full m-auto text-center text-secondary md-mobile:px-3">
                Em minha jornada, descobri que minhas forças e valores são os pilares que impulsionam meu crescimento e sucesso.
            </p>


            <div className=" flex justify-center items-center gap-5 mt-6 flex-wrap md-mobile:px-5">
                <div className="bg-cards relative p-10 rounded-xl flex flex-col gap-3 w-[350px] h-[271px] group">
                    <IconLightbulb width={48} height={48} className="text-primary" />
                    <h4 className="text-white font-bold ">Resolução de problemas</h4>
                    <p className="text-secondary text-sm">
                        Capacidade de identificar e solucionar problemas técnicos, depurar erros e otimizar o desempenho de aplicativos e sistemas.
                    </p>



                    <div className="hidden  group-hover:block after:bg-btn1 after:transition  after:absolute after:-z-10 after:w-full after:h-full after:top-0 after:left-0 after:rounded-xl after:origin-bottom after:-rotate-3 " />


                </div>

                <div className="bg-cards relative p-10 rounded-xl flex flex-col gap-3 w-[350px] h-[271px] group">
                    <IconUsers width={48} height={48} className="text-primary" />
                    <h4 className="text-white font-bold ">Trabalho em Equipe</h4>
                    <p className="text-secondary text-sm">
                    Valorizo o trabalho em equipe, contribuindo harmoniosamente para o alcance de metas compartilhadas, ao mesmo tempo em que apoio e reconheço os esforços dos colegas.
                    </p>

                    <div className="hidden after:-z-10  after:transition group-hover:block after:bg-btn1  after:absolute after:w-full after:h-full after:top-0 after:left-0 after:rounded-xl after:origin-bottom after:-rotate-3" />

                </div>

                <div className="bg-cards relative p-10 rounded-xl flex flex-col gap-3 w-[350px] h-[271px] group">
                    <IconRocketSharp width={48} height={48} className="text-primary" />
                    <h4 className="text-white font-bold ">Aprendizado contínuo</h4>
                    <p className="text-secondary text-sm">Comprometido com o aprendizado contínuo, busco constantemente expandir meus conhecimentos e habilidades.</p>


                    <div className="hidden   group-hover:block after:transition after:bg-btn1  after:absolute after:-z-10 after:w-full after:h-full after:top-0 after:left-0 after:rounded-xl after:origin-bottom after:-rotate-3" />

                </div>
            </div>
        </section>
    )
}