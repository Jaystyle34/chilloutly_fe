import Image from "next/image";
import FAQ from "./components/FAQ";
import GetTheApp from "./components/GetTheApp";
import BottomBar from "./components/BottomBar";
import WhatCanYoudoWithChilloutly from "./components/WhatcanYouDoWithChilloutly";

const whys = [
  "Intuitive and easy-to-use interface", 
  "Verified events and trusted community", 
  "Real-time updates and instant notifications", "Secure payments and refund system", 
  "Perfect for individuals, brands, and event planners"
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full  items-start justify-center ">
      
      
      <WhatCanYoudoWithChilloutly/>

      <div className="flex flex-col bg-white items-center justify-center p-[20px]  sm:p-[133px] w-full gap-[80px] w-full bg-red-200">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 w-full">
          <div className="flex flex-col">
            <span className="font-semibold text-[40px] text-black">Why <span className="text-[#6F87F8]">Chilloutly?</span></span>
            <div className="flex flex-col gap-[16px] py-[10px] px-[3px]">
              {whys.map((text)=><div key={text} className="flex gap-[8px] items-center">
                <Image
                  src={"/img/arrow-right.png"}
                  alt="Arrow right"
                  height={24}
                  width={24}
                />
                <span className="text-black font-normal text-[18px]">{text}</span>
              </div>)}
            </div>
          </div>
          <Image
          src={"/img/image1.svg"}
          alt="Image"
          height={700}
          width={480}
          />
        </div>

        <GetTheApp/>

        <FAQ/>
      </div>


      <BottomBar/>
    </div>
  );
}


