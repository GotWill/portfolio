import IconReact from "@/icons/iconReact";
import Image from "next/image";
import Title from "./Title";
import IconResponsive from "@/icons/iconResponsive";
import IconLightbulb from "@/icons/iconLightbulb";
import IconRocketSharp from "@/icons/IconRocketSharp";
import IconLightbulbFlashFill from "@/icons/IconLightbulbFlashFill";

export default function Skils() {



    return (
        <section className="bg-secondary pt-28 pb-20  border border-t-transparent border-l-transparent border-r-transparent border-b-secondary">
            <div className="max-w-4xl w-full m-auto flex items-center justify-between md-mobile:justify-center">
                <IconLightbulbFlashFill width={48} height={48} className="text-primary animate-bounce md-mobile:hidden" />

                <Title title="MINHAS HABILIDADES" />
                <span></span>
            </div>
            <p className="mt-3 max-w-[600px] w-full m-auto text-center text-secondary">
                Inovação Constante: Acompanhamento das últimas tendências e adoção de melhores práticas.
            </p>


            <div className=" flex justify-center items-center gap-5 mt-6 flex-wrap md-mobile:px-5">
                <div className="bg-cards relative p-10 rounded-xl flex flex-col gap-3 w-[350px] h-[271px] group">
                    <IconLightbulb width={48} height={48} className="text-primary" />
                    <h4 className="text-white font-bold ">Resolução de problemas</h4>
                    <p className="text-secondary text-sm">
                        apacidade de identificar e solucionar problemas técnicos, depurar erros e otimizar o desempenho de aplicativos e sistemas.
                    </p>


                    <div className="hidden  group-hover:block after:bg-btn1 after:transition  after:absolute after:-z-10 after:w-full after:h-full after:top-0 after:left-0 after:rounded-xl after:origin-bottom after:-rotate-3 " />

                </div>

                <div className="bg-cards relative p-10 rounded-xl flex flex-col gap-3 w-[350px] h-[271px] group">
                    <IconResponsive width={48} height={48} className="text-primary" />
                    <h4 className="text-white font-bold ">Design responsivo</h4>
                    <p className="text-secondary text-sm">
                    Conhecimento em design responsivo para criar aplicativos e sites visualmente atraentes e funcionais em dispositivos diversos.





                    </p>


                    <div className="hidden after:-z-10  after:transition group-hover:block after:bg-btn1  after:absolute after:w-full after:h-full after:top-0 after:left-0 after:rounded-xl after:origin-bottom after:-rotate-3" />

                </div>


                <div className="bg-cards relative p-10 rounded-xl flex flex-col gap-3 w-[350px] group">
                    <IconRocketSharp width={48} height={48} className="text-primary" />
                    <h4 className="text-white font-bold ">Aprendizado contínuo</h4>
                    <p className="text-secondary">Comprometido com o aprendizado contínuo, busco constantemente expandir meus conhecimentos e habilidades.</p>


                    <div className="hidden   group-hover:block after:transition after:bg-btn1  after:absolute after:-z-10 after:w-full after:h-full after:top-0 after:left-0 after:rounded-xl after:origin-bottom after:-rotate-3" />

                </div>






            </div>
        </section>
    )
}