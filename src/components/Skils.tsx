import IconReact from "@/icons/iconReact";
import Image from "next/image";

export default function Skils() {
    return (
        <section className="bg-secondary pt-14 pb-24">
            <div className="max-w-4xl w-full m-auto flex items-center justify-between md-mobile:justify-center">
                <Image src="https://ethemestudio.com/demo/fungi/3_programmer/image/design-elements/intro-element-1.png" width={50} height={47} alt="" className="md-mobile:hidden" />
                <h3 className="text-white font-bold text-xl">BEM VINDO AO MEU MUNDO</h3>
                <span></span>
            </div>
            <p className="mt-3 max-w-[600px] w-full m-auto text-center text-secondary md-mobile:">
                Sou um jovem empreendedor e entusiasta de tecnologia que adora correr riscos. Cresci em uma família de tecnologia na cidade de Nova York.
            </p>


            <div className=" flex justify-center items-center gap-5 mt-6 flex-wrap md-mobile:px-5">
                <div className="bg-cards relative p-10 rounded-xl flex flex-col gap-3 w-[350px] group">
                    <IconReact width={48} height={48} className="text-primary"/>
                    <h4 className="text-white font-bold ">criatividade</h4>
                    <p className="text-secondary">Não deixe a dor ir para a casa, deixe-a estar a um fio de cabelo da dor, e não haverá igual;</p>


                    <div className="hidden  group-hover:block after:bg-btn1 after:transition-all after:absolute after:w-full after:h-full after:top-0 after:left-0 after:rounded-xl after:origin-bottom after:-rotate-6"/>
                    
                </div>

                <div className="bg-cards relative p-10 rounded-xl flex flex-col gap-3 w-[350px] group">
                    <IconReact width={48} height={48} className="text-primary"/>
                    <h4 className="text-white font-bold ">criatividade</h4>
                    <p className="text-secondary">Não deixe a dor ir para a casa, deixe-a estar a um fio de cabelo da dor, e não haverá igual;</p>


                    <div className="hidden  group-hover:block after:bg-btn1 after:transition-all after:absolute after:w-full after:h-full after:top-0 after:left-0 after:rounded-xl after:origin-bottom after:-rotate-6"/>
                    
                </div>


                <div className="bg-cards relative p-10 rounded-xl flex flex-col gap-3 w-[350px] group">
                    <IconReact width={48} height={48} className="text-primary"/>
                    <h4 className="text-white font-bold ">criatividade</h4>
                    <p className="text-secondary">Não deixe a dor ir para a casa, deixe-a estar a um fio de cabelo da dor, e não haverá igual;</p>


                    <div className="hidden  group-hover:block after:bg-btn1 after:transition-all after:absolute after:w-full after:h-full after:top-0 after:left-0 after:rounded-xl after:origin-bottom after:-rotate-6"/>
                    
                </div>


            


               
            </div>
        </section>
    )
}