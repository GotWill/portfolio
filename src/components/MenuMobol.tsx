import Link from "next/link";

export default function MenuMobol() {
    return (
        <div className="fixed top-0 right-0 bg-[#2f2f2f] min-h-screen w-60 md:hidden">
            <nav className="min-h-screen mt-24 px-8">
                <ul className="flex flex-col gap-5">
                    <li>
                        <Link href="#" className="text-lg font-bold hover:text-primary active:text-primary">
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="font-bold text-lg hover:text-primary active:text-primary">
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="font-bold text-lg hover:text-primary active:text-primary">
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="font-bold text-lg hover:text-primary active:text-primary">
                            Service
                        </Link>
                    </li>
                    <li>
                        <Link href="#" className="font-bold text-lg hover:text-primary active:text-primary">
                            Contato
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}