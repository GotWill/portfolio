import Image from "next/image";
import Link from "next/link";
import Title from "./Title";

export default function Portfolio(){
    return (
        <section className="bg-secondary pt-28 pb-20" id="projetos">
             <div className="max-w-4xl w-full m-auto flex items-center justify-between md-mobile:justify-center">
                <Image src="https://ethemestudio.com/demo/fungi/3_programmer/image/design-elements/intro-element-1.png" width={50} height={47} alt="" className="md-mobile:hidden" />
                <Title title="PORTFOLIO"/>
                <span></span>
             </div>
            <p className="mt-3 max-w-[600px] w-full m-auto text-center text-secondary pb-5">
              Descubra meus projetos inovadores e criativos. Explore minha área dedicada a soluções personalizadas que transformam ideias em realidade.
            </p>


            <div className="flex justify-center items-center gap-5 flex-wrap">
                    <div className="rounded-xl overflow-hidden relative group">
                        <Image src="https://ethemestudio.com/demo/fungi/3_programmer/image/blog/post-thumbnail-01.jpg" width={300} height={300} alt="" />

                        <div className="hidden group-hover:block group-hover:bg-about group-hover:h group-hover:absolute group-hover:top-0 group-hover:w-full group-hover:h-full group-hover:opacity-[0.8] group-hover:text-white group-hover:transition-all">
                            <div className="flex justify-center items-center h-full">
                             <Link href="" className="bg-btn1 border-2  py-3 px-3 rounded-md text-white font-bold  uppercase">
                                Visualizar Projeto
                             </Link>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl overflow-hidden relative group">
                        <Image src="https://ethemestudio.com/demo/fungi/3_programmer/image/blog/post-thumbnail-01.jpg" width={300} height={300} alt="" />

                        <div className="hidden group-hover:block group-hover:bg-about group-hover:h group-hover:absolute group-hover:top-0 group-hover:w-full group-hover:h-full group-hover:opacity-[0.8] group-hover:text-white group-hover:transition-all">
                            <div className="flex justify-center items-center h-full">
                             <Link href="" className="bg-btn1 border-2  py-3 px-3 rounded-md text-white font-bold  uppercase">
                                Visualizar Projeto
                             </Link>
                            </div>
                        </div>
                    </div>

                    <div className="rounded-xl overflow-hidden relative group">
                        <Image src="https://ethemestudio.com/demo/fungi/3_programmer/image/blog/post-thumbnail-01.jpg" width={300} height={300} alt="" />

                        <div className="hidden group-hover:block group-hover:bg-about group-hover:h group-hover:absolute group-hover:top-0 group-hover:w-full group-hover:h-full group-hover:opacity-[0.8] group-hover:text-white group-hover:transition-all">
                            <div className="flex justify-center items-center h-full">
                             <Link href="" className="bg-btn1 border-2  py-3 px-3 rounded-md text-white font-bold  uppercase">
                                Visualizar Projeto
                             </Link>
                            </div>
                        </div>
                    </div>
            </div>


           
        </section>
    )
}