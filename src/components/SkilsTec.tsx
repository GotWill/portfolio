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
                        console.log(skil.bg);
                        return (
                            <div key={skil.id} className="w-48 h-40 md-mobile:w-40 px-3 bg-secondary rounded-3xl flex justify-center items-center flex-col gap-4  overflow-hidden text-white relative">

                                <div className="z-10">
                                    {skil.imagePath}
                                </div>

                                <h4 className="text-base font-bold z-10 text-center">{skil.title}</h4>

                                <span className={`border-after before:absolute before:left-[4.5rem] before:animate-spin-slow before:w-20 before:h-64 ${skil.bg === 'html' ? 'before:bg-[#fc4503]' : ''} ${skil.bg === 'css' ? 'before:bg-[#0328fc]' : ''} ${skil.bg === 'js' ? 'before:bg-[#fefe01]' : ''} ${skil.bg === 'typescript' ? 'before:bg-[#007acc]' : ''} ${skil.bg === 'php' ? 'before:bg-[#4e5b98]' : ''} ${skil.bg === 'node' ? 'before:bg-[#026e00]' : ''} ${skil.bg === 'php' ? 'before:bg-[#4e5b98]' : ''} ${skil.bg === 'react' || skil.bg === 'react-native' ? 'before:bg-[#61dafb]' : ''} ${skil.bg === 'next' ? 'before:bg-[#FFF]' : ''} ${skil.bg === 'styled-components' ? 'before:bg-[#9f70b8]' : ''} ${skil.bg === 'bootstrap' ? 'before:bg-[#712cf9]' : ''} ${skil.bg === 'bootstrap' ? 'before:bg-[#712cf9]' : ''} ${skil.bg === 'tailwind' ? 'before:bg-[#38bdf8]' : ''} ${skil.bg === 'mysql' ? 'before:bg-[#3e6e93]' : ''} ${skil.bg === 'postgresql' ? 'before:bg-[#336791]' : ''} ${skil.bg === 'github' ? 'before:bg-[#de4736]' : ''}  ${skil.bg === 'wordpress' ? 'before:bg-[#288eb0]' : ''}  ${skil.bg === 'ruby' ? 'before:bg-[#D30001]' : ''} before:top-[-40%] after:absolute after:inset-[5px] bg-gradient-css after:rounded-3xl `}></span>
                            </div>

                        )
                    })
                }



            </div>
        </section>
    )
}