import Image from "next/image";
import Logo from "@/components/icons/Logo.png";
const Navbar = () => {
    return (
        <nav className="flex items-center justify-between mx-auto max-w-[1400px] m-4">
            <div className="flex p-2 gap-2 cursor-pointer select-none">
                <Image src={Logo} alt="Logo" width={35} height={35} />
                <h1 className="text-2xl uppercase font-jura text-white">Agamify</h1>
            </div>
            <button className="bg-white text-black px-6 py-3 rounded-full font-inter cursor-pointer select-none hover:bg-[#2D1AE6] hover:text-white transition-colors ease">TRY A DEMO</button>
        </nav>
    );
}

export default Navbar;