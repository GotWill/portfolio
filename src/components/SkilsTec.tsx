import { itemsSkilTec } from "@/data/projects";
import Title from "./Title";

export default function SkilsTec() {
    return (
        <section className=" pt-28 pb-20  border border-t-transparent border-l-transparent border-r-transparent border-b-secondary" id="about">
            <div className="flex justify-center">
                <Title title="Habilidades" />
            </div>


            <div className="mt-8 flex justify-center items-center flex-wrap gap-5">

                {
                    itemsSkilTec.map((skil) => {
                        console.log(skil.bg)
                        return (
                            <div key={skil.id} className="w-48 h-40 md-mobile:w-40 px-3 bg-secondary rounded-3xl flex justify-center items-center flex-col gap-4  overflow-hidden text-white relative">

                                <div className="z-10">
                                    {skil.imagePath}
                                </div>

                                <h4 className="text-base font-bold z-10 text-center">{skil.title}</h4>

                                <span className={`border-after before:absolute before:left-[4.5rem] before:animate-spin-slow before:w-20 before:h-64 before:bg-btn1 before:top-[-40%] after:absolute after:inset-[5px] bg-gradient-css after:rounded-3xl`}></span>
                            </div>

                        )
                    })
                }



            </div>
        </section>
    )
}