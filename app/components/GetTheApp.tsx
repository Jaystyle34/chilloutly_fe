import Image from "next/image"
export default function GetTheApp(){
    return(  <div className="bg-[#F8F9FF] px-[16px] py-[60px] md:px-[55px] g-4 lg:gap-1 ">
        <div className="flex flex-col lg:flex-row  bg-[#6F87F8] rounded-[20px] items-center gap-4 ">
            <div className="flex flex-col pl-[16px] sm:pl-[60px]">
              <span className="font-semibold text-[40px] text-white">Get the App</span>
              <span className="text-white font-normal text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</span>
            </div>
            <Image
                src={"/img/image2.svg"}
                alt="Image"
                height={434}
                width={580}
                className="h-[200px] w-[250px] md:h-[424px] md:w-[580px] h-full"
            />
        </div>
    </div>)
}