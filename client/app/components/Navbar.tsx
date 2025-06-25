"use client";

import Image from "next/image";
import Logo from "@/components/icons/Logo.png";
import ClientNavbarButtons from "./ClientNavbarButtons";

export default function Navbar() {
    return (
        <nav className="flex items-center justify-between mx-auto max-w-[1400px] m-4">
            <div className="flex p-2 gap-2 cursor-pointer select-none">
                <Image src={Logo} alt="Logo" width={35} height={35} />
                <h1 className="text-2xl uppercase font-jura text-white">Agamify</h1>
            </div>
            <ClientNavbarButtons />
        </nav>
    );
}