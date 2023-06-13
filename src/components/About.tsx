import Image from "next/image";

export default function About() {
    return (
        <section className="bg-about pt-14 pb-24">
            <div className="max-w-5xl w-full m-auto flex justify-around gap-10 flex-wrap">
                <Image src="https://ethemestudio.com/demo/fungi/3_programmer/image/about-image-1.png" width={400} height={400} alt="" />

                <div className="flex flex-col gap-2 md-note:px-6">
                    <span className="text-primary font-bold text-lg">About</span>
                    <h2 className="text-white font-bold text-3xl">I build software that solve your problem
                    </h2>
                    <p className="text-secondary text-lg">
                      Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                   
                  
                    <div className="flex justify-between items-center mt-4 flex-wrap ">
                        <ul className="flex flex-col gap-3">
                            <li>
                                <h4 className="text-white font-bold text-xl">Nome</h4>
                                <p className="text-secondary text-base">Willian de jesus pereira</p>
                            </li>
                            <li>
                                <h4 className="text-white font-bold text-xl">Telefone</h4>
                                <p className="text-secondary text-base">(11) 9652-39222</p>
                            </li>
                           
                        </ul>


                        <ul className="flex flex-col gap-3">
                            <li>
                                <h4 className="text-white font-bold text-xl">E-mail</h4>
                                <p className="text-secondary text-base">willianpereira0912@gmail.com</p>
                            </li>
                            <li>
                                <h4 className="text-white font-bold text-xl">Formação</h4>
                                <p className="text-secondary text-base">Ensino Médio</p>
                            </li>
                        </ul>
                       
                   </div>

                  
                  
                </div>
            </div>
        </section>
    )
}