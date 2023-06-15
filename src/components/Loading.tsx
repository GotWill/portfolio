
import Image from 'next/image'
import LoadingGif from '../assets/loading.gif'

export default function Loading(){
    return (
        <div className="fixed w-full h-full bg-black z-[9999] flex justify-center items-center">
            <Image src={LoadingGif} width={200} height={200} alt=""  />
        </div>
    )
}