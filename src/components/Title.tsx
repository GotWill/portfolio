type Props = {
    title: string
}

export default function Title({title}: Props){
    return <h3 className="text-white relative font-bold text-xl after:w-0 after:h-0 after:border-8 after:border-transparent after:border-b-primary after:border-r-primary after:-left-8 after:top-1 after:absolute before:w-0 before:h-0 before:border-8 before:border-transparent before:border-b-primary before:border-l-primary before:-right-8 before:top-1 before:absolute">{title}</h3>

}