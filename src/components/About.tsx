import Image from "next/image";
import Iam from '../assets/bg.jpg'


export default function About() {
    return (
        <section className="bg-about pt-28 pb-20  border border-t-transparent border-l-transparent border-r-transparent border-b-secondary" id="about">
            <div className="max-w-7xl w-full m-auto flex justify-around gap-10 px-6 md-note:flex-col md-note:px-0">
                <div className="w-full md-note:flex md-note:justify-center  md-mobile:px-4">
                    <Image src={Iam} width={400} height={400} alt="" className="rounded w-full h-full" />
                </div>
                <div className="flex flex-col gap-2  md-note:px-8">
                    <span className="text-primary font-bold ">Sobre mim</span>
                    <h2 className="text-white font-bold text-3xl">Willian Pereira</h2>
                    <p className="text-secondary text-lg">
                        Desenvolvedor Full Stack com foco em Front-End, com experiência em <strong>JavaScript, TypeScript, React, Next.js, PHP,</strong> entre outras tecnologias. Sou movido pela curiosidade e paixão por aprender — estou sempre buscando evoluir, seja por meio de cursos, bootcamps ou desafios práticos.
                    </p>
                    <p className="text-secondary text-lg">
                        Tenho vivência na criação de e-commerces (usando plataformas como Tray, Yampi e Irroba) e no desenvolvimento de sistemas web personalizados, do planejamento à entrega. Também atuei na criação de dashboards interativos com o Looker Studio.Tenho vivência na criação de e-commerces (usando plataformas como Tray, Yampi e Irroba) e no desenvolvimento de sistemas web personalizados, do planejamento à entrega. Também atuei na criação de dashboards interativos com o Looker Studio.                    </p>
                    <p className="text-secondary text-lg">
                        Tenho especial interesse em criar interfaces intuitivas, responsivas e com boa usabilidade, mas também me sinto confortável no back-end.                    
                    </p>
                    <p className="text-secondary text-lg">
                      Prezo por código limpo, boas práticas e por entregar valor real por meio da tecnologia.
                    </p>
                </div>
            </div>
        </section>
    )
}import Image from "next/image";
import Iam from '../assets/bg.jpg'


export default function About() {
    return (
        <section className="bg-about pt-28 pb-20  border border-t-transparent border-l-transparent border-r-transparent border-b-secondary" id="about">
            <div className="max-w-7xl w-full m-auto flex justify-around gap-10 px-6 md-note:flex-col md-note:px-0">
                <div className="w-full md-note:flex md-note:justify-center  md-mobile:px-4">
                    <Image src={Iam} width={400} height={400} alt="" className="rounded w-full h-full" />
                </div>
                <div className="flex flex-col gap-2  md-note:px-8">
                    <span className="text-primary font-bold ">Sobre mim</span>
                    <h2 className="text-white font-bold text-3xl">Willian Pereira</h2>
                    <p className="text-secondary text-lg">
                        Desenvolvedor Full Stack com foco em Front-End, com experiência em <strong>JavaScript, TypeScript, React, Next.js, PHP,</strong> entre outras tecnologias. Sou movido pela curiosidade e paixão por aprender — estou sempre buscando evoluir, seja por meio de cursos, bootcamps ou desafios práticos.
                    </p>
                    <p className="text-secondary text-lg">
                        Tenho vivência na criação de e-commerces (usando plataformas como Tray, Yampi e Irroba) e no desenvolvimento de sistemas web personalizados, do planejamento à entrega. Também atuei na criação de dashboards interativos com o Looker Studio.Tenho vivência na criação de e-commerces (usando plataformas como Tray, Yampi e Irroba) e no desenvolvimento de sistemas web personalizados, do planejamento à entrega. Também atuei na criação de dashboards interativos com o Looker Studio.                    </p>
                    <p className="text-secondary text-lg">
                        Tenho especial interesse em criar interfaces intuitivas, responsivas e com boa usabilidade, mas também me sinto confortável no back-end.                    
                    </p>
                    <p className="text-secondary text-lg">
                      Prezo por código limpo, boas práticas e por entregar valor real por meio da tecnologia.
                    </p>
                </div>
            </div>
        </section>
    )
}