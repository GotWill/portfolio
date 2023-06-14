import IconMobile from "@/icons/iconMobile";
import IconMonitor from "@/icons/iconMonitor";
import Image from "next/image";

export default function Services() {
    return (
        <section className="bg-about pt-28 pb-20" id="servicos">
            <div className="max-w-4xl w-full m-auto flex items-center justify-between md-mobile:justify-center">
                <Image src="https://ethemestudio.com/demo/fungi/3_programmer/image/design-elements/intro-element-1.png" width={50} height={47} alt="" className="md-mobile:hidden" />
                <h3 className="text-white font-bold text-xl">SERVIÇOS</h3>
                <span></span>
            </div>
            <p className="mt-3 max-w-[600px] w-full m-auto text-center text-secondary pb-11">
                Duis aute irure dolor in reprehen pteur sint occaecat cupidatat non proident, sunt in culim id est.
            </p>



            <div className="flex justify-center items-center gap-5 px-8 flex-wrap">
                <div className="w-[370px] border border-secondary py-14 px-12 rounded-xl flex flex-col justify-center items-center gap-5 hover:bg-[#3c3c3c] group ">
                    <div className="flex justify-center items-center bg-services-icon w-[96px] h-[96px] rounded-full group-hover:bg-btn1">
                        <IconMonitor width={36} height={36} className="text-primary group-hover:text-white" />
                    </div>
                    <h3 className="text-white font-bold text-2xl">Desktop Apps</h3>
                    <p className="text-secondary text-sm text-center">
                        Yeprehe nderit in voluptate velit esse prehen pteur sint occaecat cupidat cillum dolore eu fugiat nulla pan proide ulpa rum.


                    </p>
                </div>
                <div className="w-[370px] border border-secondary py-14 px-12 rounded-xl flex flex-col justify-center items-center gap-5 hover:bg-[#3c3c3c] group ">
                    <div className="flex justify-center items-center bg-services-icon w-[96px] h-[96px] rounded-full group-hover:bg-btn1">
                        <IconMobile width={36} height={36} className="text-primary group-hover:text-white" />
                    </div>
                    <h3 className="text-white font-bold text-2xl">Desktop Apps</h3>
                    <p className="text-secondary text-sm text-center">
                        Yeprehe nderit in voluptate velit esse prehen pteur sint occaecat cupidat cillum dolore eu fugiat nulla pan proide ulpa rum.


                    </p>
                </div>
                <div className=" w-[370px] border border-secondary py-14 px-12 rounded-xl flex flex-col justify-center items-center gap-5 hover:bg-[#3c3c3c] group ">
                    <div className="flex justify-center items-center bg-services-icon w-[96px] h-[96px] rounded-full group-hover:bg-btn1">
                        <IconMonitor width={36} height={36} className="text-primary group-hover:text-white" />
                    </div>
                    <h3 className="text-white font-bold text-2xl">Desktop Apps</h3>
                    <p className="text-secondary text-sm text-center">
                        Yeprehe nderit in voluptate velit esse prehen pteur sint occaecat cupidat cillum dolore eu fugiat nulla pan proide ulpa rum.


                    </p>
                </div>
            </div>
        </section>
    )
}