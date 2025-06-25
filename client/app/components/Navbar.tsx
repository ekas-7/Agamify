import Image from "next/image";
import Logo from "@/components/icons/Logo.png";
import ClientNavbarButtons from "./ClientNavbarButtons";
import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between mx-auto max-w-[1400px] m-4 relative z-50 outline-none focus:outline-none">
            <Link href="/" className="flex p-2 gap-2 cursor-pointer select-none">
                <Image src={Logo} alt="Logo" width={35} height={35} />
                <h1 className="text-2xl uppercase font-jura text-white">Agamify</h1>
            </Link>
            <ClientNavbarButtons />
        </nav>
    );
}