import Image from "next/image";
import Link from "next/link";

export default function About() {
    return (
        <section className="bg-about pt-28 pb-20  border border-t-transparent border-l-transparent border-r-transparent border-b-secondary animate__animated animate__backInRight" id="about">
            <div className="max-w-5xl w-full m-auto flex justify-around gap-10 md-note:flex-col">
                <div className="w-full md-note:flex md-note:justify-center  md-note:px-8">
                    <Image src="https://ethemestudio.com/demo/fungi/3_programmer/image/about-image-1.png" width={400} height={400} alt="" />
                </div>

                <div className="flex flex-col gap-2 md-note:px-8 ">
                    <h2 className="text-primary font-bold text-3xl">Paixão e Dedicação</h2>
                    <p className="text-secondary text-lg">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="text-secondary text-lg">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                    <p className="text-secondary text-lg">
                        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>


                   


                    <div className="mt-5">
                    <Link href="https://drive.google.com/file/d/1Ho3ZcUpZkDkvPLUkBE5Z8ieNHAwEBmHr/view?usp=sharing" target="_blank" className="bg-btn1 py-3 px-3 cursor-pointer rounded-md text-white font-bold uppercase hover:bg-btn1-hover animate__animated animate__pulse animate__infinite">
                        Visualizar CV
                    </Link>
                    </div>



                </div>
            </div>
        </section>
    )
}