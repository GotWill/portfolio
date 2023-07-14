import IconMobile from "@/icons/iconMobile";
import IconMonitor from "@/icons/iconMonitor";
import Image from "next/image";
import Title from "./Title";
import IconEmail from "@/icons/iconEmail";
import IconTools from "@/icons/iconTools";
import IconStore from "@/icons/iconStore";

export default function Services() {
    return (
        <section className="bg-about pt-28 pb-20  border border-t-transparent border-l-transparent border-r-transparent border-b-secondary" id="servicos">
            <div className="max-w-4xl w-full m-auto flex items-center justify-between md-mobile:justify-center">
                <IconTools width={48} height={48} className="text-primary animate-bounce md-mobile:hidden" />
                <Title title="SERVIÇOS"/>
                <span></span>
            </div>
            <p className="mt-3 max-w-[600px] w-full m-auto text-center text-secondary pb-11 md-mobile:px-3">
            Desenvolvedor experiente oferecendo serviços de software, aplicativos e email marketing. Soluções personalizadas para impulsionar o crescimento do seu negócio. Entre em contato para saber mais.
            </p>



            <div className="flex justify-center items-center gap-5 px-8 flex-wrap">
                <div className="w-[370px] border border-secondary py-14 px-12 rounded-xl flex flex-col justify-center items-center gap-5 hover:bg-[#3c3c3c] group ">
                    <div className="flex justify-center items-center bg-services-icon w-[96px] h-[96px] rounded-full group-hover:bg-btn1">
                        <IconMonitor width={36} height={36} className="text-primary group-hover:text-white" />
                    </div>
                    <h3 className="text-white font-bold text-2xl md-mobile:text-xl">Web Development</h3>
                    <p className="text-secondary text-sm text-center">
                    Desenvolvimento web profissional para impulsionar sua presença online. Soluções personalizadas e visualmente atraentes. Transforme sua visão em realidade.

                    </p>
                </div>
                <div className="w-[370px] h-[381px] border border-secondary py-14 px-12 rounded-xl flex flex-col justify-center items-center gap-5 hover:bg-[#3c3c3c] group ">
                    <div className="flex justify-center items-center bg-services-icon w-[96px] h-[96px] rounded-full group-hover:bg-btn1">
                        <IconMobile width={36} height={36} className="text-primary group-hover:text-white" />
                    </div>
                    <h3 className="text-white font-bold text-2xl md-mobile:text-xl">Mobile Apps</h3>
                    <p className="text-secondary text-sm text-center">
                    Desenvolvimento de aplicativos móveis personalizados para aumentar sua presença digital. Experiências intuitivas que cativam os usuários.
                    </p>
                </div>
                <div className=" w-[370px] border border-secondary py-14 px-12 rounded-xl flex flex-col justify-center items-center gap-5 hover:bg-[#3c3c3c] group ">
                    <div className="flex justify-center items-center bg-services-icon w-[96px] h-[96px] rounded-full group-hover:bg-btn1">
                        <IconEmail width={36} height={36} className="text-primary group-hover:text-white" />
                    </div>
                    <h3 className="text-white font-bold text-2xl md-mobile:text-xl">E-mail Marketing</h3>
                    <p className="text-secondary text-sm text-center">
                    E-mail marketing estratégico para aumentar o engajamento e as conversões. Alcance seu público-alvo de forma eficaz e impulsione seus resultados.
                    </p>
                </div>

                <div className=" w-[370px] border border-secondary py-14 px-12 rounded-xl flex flex-col justify-center items-center gap-5 hover:bg-[#3c3c3c] group ">
                    <div className="flex justify-center items-center bg-services-icon w-[96px] h-[96px] rounded-full group-hover:bg-btn1">
                        <IconStore width={36} height={36} className="text-primary group-hover:text-white" />
                    </div>
                    <h3 className="text-white font-bold text-2xl md-mobile:text-xl">E-commerce</h3>
                    <p className="text-secondary text-sm text-center">
                    Desenvolvedor especializado em e-commerces, criando interfaces atraentes e funcionais para uma experiência de compra online de qualidade. Garantindo segurança e desempenho para impulsionar o sucesso do seu negócio.
                    </p>
                </div>
            </div>
        </section>
    )
}