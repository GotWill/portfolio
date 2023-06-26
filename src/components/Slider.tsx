import IconBolt from "@/icons/iconBolt";

export default function Slider(){
    return (
        <section className="bg-gradient-css pt-28 pb-20  border border-t-transparent border-l-transparent border-r-transparent border-b-secondary">
            <div className="flex justify-center items-center gap-6 overflow-hidden w-full">
                <h6 className="flex justify-center items-center gap-6 font-bold text-primary  animate-slider-text whitespace-nowrap ">
                    Front-End Developer
                    <IconBolt width={25} height={25} className="text-primary"/>
                    Interface
                    <IconBolt width={25} height={25} className="text-primary"/>
                    Desenvolvedor Mobile
                    <IconBolt width={25} height={25} className="text-primary"/>
                    Performance
                    <IconBolt width={25} height={25} className="text-primary"/>
                    Acessibilidade
                    <IconBolt width={25} height={25} className="text-primary"/>

                </h6>
                  

                
            </div>
        </section>
    )
}