import Image from "next/image";
import Link from "next/link";
import Title from "./Title";
import IconDiagramProject from "@/icons/IconDiagramProject";
import { useKeenSlider } from "keen-slider/react"
import "keen-slider/keen-slider.min.css"
import { useState } from "react";

export default function Portfolio() {

    const [activeDots, setActiveDots] = useState('')
    const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
        initial: 0,
        breakpoints: {
            '(max-width: 768px)': {
                slides: {
                    perView: 1,
                   spacing: 20
                }
            }
        },
        slides: {
            perView: 3,
            spacing: 15
        },
    })


    function next(e: any){
        e.stopPropagation() || instanceRef.current?.next()
        setActiveDots('next')
    }

    function prev(e: any){
        e.stopPropagation() || instanceRef.current?.prev()
        setActiveDots('prev')
    }

    return (
        <section className="bg-secondary pt-28 pb-20  border border-t-transparent border-l-transparent border-r-transparent border-b-secondary" id="projetos">
            <div className="max-w-4xl w-full m-auto flex items-center justify-between md-mobile:justify-center">

                <IconDiagramProject width={48} height={48} className="text-primary animate-bounce md-mobile:hidden" />
                <Title title="PROJETOS" />
                <span></span>
            </div>
            <p className="mt-3 max-w-[600px] w-full m-auto text-center text-secondary pb-5">
                Descubra meus projetos inovadores e criativos. Explore minha área dedicada a soluções personalizadas que transformam ideias em realidade.
            </p>


            <div className="flex justify-center items-center gap-5 flex-wrap navigation-wrapper">


                <div ref={sliderRef} className="keen-slider md-mobile:px-5">
                    <div className="keen-slider__slide number-slide1">
                        <div className="rounded-xl overflow-hidden relative group">
                            <Image src="https://ethemestudio.com/demo/fungi/3_programmer/image/blog/post-thumbnail-01.jpg" width={300} height={300} alt="" className="w-full" />

                            <div className="hidden group-hover:block group-hover:bg-about group-hover:h group-hover:absolute group-hover:top-0 group-hover:w-full group-hover:h-full group-hover:opacity-[0.8] group-hover:text-white group-hover:transition-all">
                                <div className="flex justify-center items-center h-full">
                                    <Link href="" className="bg-btn1 border-2  py-3 px-3 rounded-md text-white font-bold  uppercase">
                                        Visualizar Projeto
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="keen-slider__slide number-slide1">
                        <div className="rounded-xl overflow-hidden relative group">
                            <Image src="https://ethemestudio.com/demo/fungi/3_programmer/image/blog/post-thumbnail-01.jpg" width={300} height={300} alt="" className="w-full" />

                            <div className="hidden group-hover:block group-hover:bg-about group-hover:h group-hover:absolute group-hover:top-0 group-hover:w-full group-hover:h-full group-hover:opacity-[0.8] group-hover:text-white group-hover:transition-all">
                                <div className="flex justify-center items-center h-full">
                                    <Link href="" className="bg-btn1 border-2  py-3 px-3 rounded-md text-white font-bold  uppercase">
                                        Visualizar Projeto
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="keen-slider__slide number-slide1">
                        <div className="rounded-xl overflow-hidden relative group">
                            <Image src="https://ethemestudio.com/demo/fungi/3_programmer/image/blog/post-thumbnail-01.jpg" width={300} height={300} alt="" className="w-full" />

                            <div className="hidden group-hover:block group-hover:bg-about group-hover:h group-hover:absolute group-hover:top-0 group-hover:w-full group-hover:h-full group-hover:opacity-[0.8] group-hover:text-white group-hover:transition-all">
                                <div className="flex justify-center items-center h-full">
                                    <Link href="" className="bg-btn1 border-2  py-3 px-3 rounded-md text-white font-bold  uppercase">
                                        Visualizar Projeto
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div className="keen-slider__slide number-slide1">
                        <div className="rounded-xl overflow-hidden relative group">
                            <Image src="https://ethemestudio.com/demo/fungi/3_programmer/image/blog/post-thumbnail-01.jpg" width={300} height={300} alt="" className="w-full" />

                            <div className="hidden group-hover:block group-hover:bg-about group-hover:h group-hover:absolute group-hover:top-0 group-hover:w-full group-hover:h-full group-hover:opacity-[0.8] group-hover:text-white group-hover:transition-all">
                                <div className="flex justify-center items-center h-full">
                                    <Link href="" className="bg-btn1 border-2  py-3 px-3 rounded-md text-white font-bold  uppercase">
                                        Visualizar Projeto
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                
                    <div className="flex justify-center items-center gap-4">
                        <div className={`w-3 h-3 bg-white rounded-full ${activeDots === 'prev' ? 'bg-btn1-hover' : ''}`}
                            onClick={prev}
                        >

                        </div>
                        <div className={`w-3 h-3 bg-white rounded-full ${activeDots === 'next' ? 'bg-btn1-hover' : ''}`} onClick={next}/>

                    </div>
            </div>
        </section>
    )
}