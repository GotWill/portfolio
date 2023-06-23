import IconBolt from "@/icons/iconBolt";

export default function Slider(){
    return (
        <section className="bg-gradient-css pt-28 pb-20  border border-t-transparent border-l-transparent border-r-transparent border-b-secondary">
            <div className="flex justify-center items-center gap-6 animate-slider-text whitespace-nowrap">
                <h6 className="font-bold text-primary">Front-End Developer</h6>
                <IconBolt width={25} height={25} className="text-primary"/>
                <h6 className="font-bold text-primary">Interface</h6>
                <IconBolt width={25} height={25} className="text-primary"/>
                <h6 className="font-bold text-primary">Desenvolvedor Mobile</h6>
                <IconBolt width={25} height={25} className="text-primary"/>

               

                
            </div>
        </section>
    )
}