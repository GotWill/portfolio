import Btn from "./Btn";

export default function Cta(){
    return (
        <section className="bg-gradient-css pt-28 pb-20  border border-t-transparent border-l-transparent border-r-transparent border-b-secondary">
            <div className="flex justify-center items-center flex-col gap-4">
                <h3 className="text-white font-bold text-2xl text-center">Precisa de um desenvolvedor confiável? Estou aqui para ajudar.</h3>
               <Btn title="Solicite um orçamento"/>
            </div>
        </section>
    )
}