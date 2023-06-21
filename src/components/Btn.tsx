import { Link } from "react-scroll";
import { PropsTitle } from "./Title";



export default function Btn({title} : PropsTitle) {
    return (
        <Link to="contato" className="bg-btn1 py-3 px-3 cursor-pointer rounded-md text-white font-bold uppercase hover:bg-btn1-hover animate__animated animate__pulse animate__infinite">
            {title}
        </Link>
    )
}