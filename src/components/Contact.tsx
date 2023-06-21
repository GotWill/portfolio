import Title from "./Title";
import emailjs from '@emailjs/browser';
import z from 'zod'
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import swal from "sweetalert";
import IconEmailPlusOutline from "@/icons/IconEmailPlusOutline";


export default function Contact() {

    const schema = z.object({
        name: z.string().nonempty('Campo obrigatorio.'),
        message: z.string().nonempty('Campo obrigatorio.'),
        email: z.string().email('Formato de E-mail invalido').nonempty('Campo obrigatorio.')
    })

    type inputsForm = z.infer<typeof schema>


    const { register, handleSubmit, reset, formState: { errors } } = useForm<inputsForm>({
        resolver: zodResolver(schema)
    })


    function sendForm(data: inputsForm) {

        const { email, message, name } = data;

        const templateParams = {
            from_name: name,
            email: email,
            message: message,
        }

        emailjs.send("service_snflurw", "template_ynwmktj", templateParams, "AZsMidZ_Av1R_RW1t")
            .then((response) => {
                swal({
                    title: "Sucesso",
                    text: "Sua mensagem foi enviado",
                    icon: "success",
                });

            }, (err) => {
                swal({
                    title: "Ops",
                    text: "Sua mensagem não foi enviada, Tente mais tarde",
                    icon: "error",
                });
            })


        reset()

    }
    return (
        <section className="bg-secondary pt-28 pb-20  border border-t-transparent border-l-transparent border-r-transparent border-b-secondary" id="contato">
            <div className="max-w-4xl w-full m-auto  flex  justify-between md-mobile:justify-center items-center">
                <IconEmailPlusOutline width={48} height={48} className="text-primary animate-bounce md-mobile:hidden" />

                <Title title="COMO POSSO TE AJUDAR?" />
                <span></span>
            </div>
            <p className="mt-3 max-w-[600px] w-full m-auto text-center text-secondary pb-11">Preencha o formulário e em breve entrarei em contato!</p>


            <form onSubmit={handleSubmit(sendForm)} className="max-w-[538px] m-auto flex flex-col justify-center items-center gap-4 md-mobile:px-5">
                <div className="w-full flex  items-center md-mobile:flex-wrap gap-4">
                    <div className="flex flex-col gap-3 w-full">
                        <input
                            type="text"
                            className="bg-secondary border border-[#606060] outline-none text-secondary py-3 px-4 rounded-md focus:border-primary md-mobile:w-full"
                            placeholder="Nome*"
                            {...register('name')}
                        />
                        {errors.name && <span className="text-red-900 font-bold">{errors.name?.message}</span>}
                    </div>

                    <div className="flex flex-col gap-3 w-full">
                        <input
                            type="email"
                            className="bg-secondary border border-[#606060] outline-none text-secondary py-3 px-4 rounded-md focus:border-primary md-mobile:w-full"
                            placeholder="E-mail*"
                            {...register('email')}
                        />
                        {errors.email && <span className="text-red-900 font-bold">{errors.email?.message}</span>}

                    </div>


                </div>
                <div className="w-full">
                    <div className="flex flex-col gap-3">
                        <textarea
                            className="bg-secondary border border-[#606060] outline-none text-secondary py-3 px-4 rounded-md focus:border-primary w-full min-h-[185px] resize-none md-mobile:w-full"
                            placeholder="Sua mensagem aqui*"
                            {...register('message')}
                        ></textarea>
                        {errors.message && <span className="text-red-900 font-bold">{errors.message?.message}</span>}
                    </div>

                    <button className="bg-btn1 mt-2 py-3 px-3 rounded-md text-white font-bold uppercase hover:bg-btn1-hover ">
                        Enviar mensagem
                    </button>
                </div>

            </form>
        </section>
    )
}