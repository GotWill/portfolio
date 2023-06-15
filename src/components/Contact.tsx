import Title from "./Title";

export default function Contact(){
    return (
        <section className="bg-secondary pt-28 pb-20" id="contato">
                <div className="flex flex-col justify-center items-center">
                    <Title title="COMO POSSO TE AJUDAR?"/>
                    <p className="mt-3 max-w-[600px] w-full m-auto text-center text-secondary pb-11">Preencha o formulário e em breve entrarei em contato!</p>
                </div>


                <form action="" className="max-w-[538px] m-auto flex flex-col justify-center items-center gap-4 md-mobile:px-5">
                    <div className="flex  items-center flex-wrap gap-4">
                        <input type="text" className="bg-secondary border border-[#606060] outline-none text-secondary py-3 px-4 rounded-md focus:border-primary md-mobile:w-full" placeholder="Nome*" required/>
                        <input type="email"  className="bg-secondary border border-[#606060] outline-none text-secondary py-3 px-4 rounded-md focus:border-primary md-mobile:w-full" placeholder="E-mail*" required/>
                      
                    </div>
                   <div className="w-full">
                      <textarea className="bg-secondary border border-[#606060] outline-none text-secondary py-3 px-4 rounded-md focus:border-primary w-full min-h-[185px] resize-none md-mobile:w-full" placeholder="Sua mensagem aqui*" required></textarea>
                      <button  className="bg-btn1 mt-2 py-3 px-3 rounded-md text-white font-bold uppercase hover:bg-btn1-hover ">
                      Enviar mensagem
                    </button>
                   </div>
                   
                </form>
        </section>
    )
}