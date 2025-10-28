import BottomBar from "../components/BottomBar";
import FAQ from "../components/FAQ";
import GetTheApp from "../components/GetTheApp";
import Image from "next/image";
const helps =[
    "Visit the in-app Help Center for quick guides and FAQs",
    "Report any issue or contact support directly through your profile.",
    "Our team replies within 24 hours to keep things running smoothly.",
    "Secure payments and refund system"
]

export default function Page(){
    return (<div className="bg-white flex flex-col">
        <div className="flex flex-col items-center pt-[20px] pb-[80px] bg-no-repeat bg-cover bg-center bg-[#272F57] ">
            <span className="text-white text-center py-[100px] font-normal md:font-semibold  text-[30px] md:text-[64px]">Help Center</span>
            <div className="flex flex-col bg-[#E9EDFE30] rounded-[7px] p-[26px] gap-[20px]">
                <span className="text-center text-[24px] font-semibold text-[#E9EDFE]">Need help or have questions?</span>
                <div className="flex flex-col gap-[23px]">
                    {helps.map((h, i)=> <div key={i} className="flex  items-center gap-[8px]">
                        <Image
                            src={"/img/arrow-right-green.png"}
                            alt="Arrow image"
                            height={24}
                            width={24}
                        />
                        <span>{h}</span>
                         </div>)}
                </div>
            </div>
        </div>
         <div className="flex flex-col bg-white items-center justify-center p-[20px]  sm:p-[133px] w-full gap-[80px] w-full bg-red-200">
            
            <GetTheApp/>
        </div>
        
        <BottomBar/>
    </div>)
}