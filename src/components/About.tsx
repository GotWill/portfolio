import Image from "next/image";
import Iam from '../assets/bg.jpg'


export default function About() {
    return (
        <section className="bg-about pt-28 pb-20  border border-t-transparent border-l-transparent border-r-transparent border-b-secondary animate__animated animate__backInRight" id="about">
            <div className="max-w-7xl w-full m-auto flex justify-around gap-10 px-6 md-note:flex-col md-note:px-0">
                <div className="w-full md-note:flex md-note:justify-center  md-mobile:px-4">
                    <Image src={Iam} width={400} height={400} alt="" className="rounded w-full h-full" />
                </div>

                <div className="flex flex-col gap-2  md-note:px-8 ">
                    <span className="text-primary font-bold ">Sobre Min</span>
                    <h2 className="text-white font-bold text-3xl">Willian Pereira</h2>
                    <p className="text-secondary text-lg">
                     Sou um desenvolvedor full stack com mais de 3 anos de experiência. Sou apaixonado por programação e estou constantemente atualizado sobre as últimas tendências e tecnologias do mercado. Meu objetivo é oferecer soluções inovadoras e eficientes para os desafios de desenvolvimento.
                    </p>
                    <p className="text-secondary text-lg">
                    Tenho um foco especial em criar interfaces intuitivas e responsivas, garantindo uma experiência de usuário excepcional. Minhas habilidades de resolução de problemas e pensamento criativo me permitem encontrar soluções personalizadas para as necessidades específicas dos clientes.
                    </p>
                    <p className="text-secondary text-lg">
                    Se você está procurando um desenvolvedor full stack dedicado, atualizado e altamente qualificado, estou pronto para ajudar a transformar suas ideias em realidade. Vamos trabalhar juntos para criar soluções excepcionais e impactantes. Entre em contato e vamos iniciar uma jornada de sucesso juntos!
                    </p>

                </div>
            </div>
        </section>
    )
}