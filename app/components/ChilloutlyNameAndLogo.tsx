import Image from "next/image";
export default function ChilloutlyNameAndLogo(){
    return(<div className="flex gap-2 items-center">
        <Image
            src={"/img/logo.png"}
            alt="Email"
            height={33}
            width={40}
            />
        <span className="text-white font-bold text-[27px]">Chilloutly</span>
    </div>);
}