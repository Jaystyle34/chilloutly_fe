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
    <div className="flex flex-col items-center justify-center h-full  justify-center bg-white  ">

          <div className="flex flex-col  gap-4  bg-no-repeat bg-cover bg-center bg-[#272F57] bg-[url('/img/bg.svg')]">
    
          <div className={`flex flex-col items-center gap-8 pb-[20px] sm:pb-[100px] pt-[100px] w-full  px-[20px] xlg:px-[200px] bg-[#0C1332]/90 backdrop-blur-[2px]`}>
            <div className="flex flex-col gap-1">
              <span className="font-normal md:font-semibold text-white text-[25px] lg:text-[64px]/18 text-center">Create Discover, and Experience Events <span className="text-[#6F87F8]">Like Never Before</span></span>
              <span className="text-white font-normal text-[18px] text-center">From intimate gatherings to grand festivals — host, manage, and attend events effortlessly, all in one app.</span>
            </div>
            <div className="flex flex-col items-center bg-[#E9EDFE]/19  p-[26px] rounded-[7px] gap-[20px]">
              <div className="flex gap-[8px] items-center justify-center bg-transparent">
                <Image
                src={'/img/key.png'}
                alt="Phone"
                height={12}
                width={14}
                />
                <span className="font-semibold text-[18px] text-white text-center">Our Security, our Priority</span>
              </div>
              
              <span className="font-normal text-white text-[16px] text-center">Secured with industry-standard 256-bit encryption. Your data and funds are protected by the same technology trusted by leading global banks.</span>
    
            </div>
          </div>

          
        </div>
      <WhatCanYoudoWithChilloutly/>
      <div className="flex flex-col  items-center justify-center p-[20px]  sm:p-[133px] w-full gap-[80px] w-full ">
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


