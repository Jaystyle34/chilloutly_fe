import Image from "next/image";
import FAQ from "./components/FAQ";

const whys = [
  "Intuitive and easy-to-use interface", 
  "Verified events and trusted community", 
  "Real-time updates and instant notifications", "Secure payments and refund system", 
  "Perfect for individuals, brands, and event planners"
]
export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-full  items-start justify-center bg-red-200 ">
      <div className="flex flex-col items-center justify-center w-full  bg-[#F3FDF9] py-[113px] gap-[24px]">
        <div className="flex flex-col items-center text-black ">
          <span className="font-semibold text-[40px] text-black">What You Can Do With <span className="text-[#6F87F8]">Chilloutly</span></span>
          <span className="font-normal text-[18px] text-[#3A3A3A]">Save, invest, borrow, and grow on one trusted platform, built for your financial success.</span>
        </div>
        <div className="flex flex-col md:flex-row gap-[37px]">
          <Image
          src={'/img/phone.png'}
          alt="Phone"
          height={700}
          width={400}
          />
          <div className="flex flex-col gap-[25px]">
            <WhatYoucanDoItem title="Event Creation" description="Create or join hangouts with just a few taps — add your title, budget, location, and date."/>
            <WhatYoucanDoItem title="Private Events" description="Make your event private and share a unique code with only the people you want to invite." className="bg-[#E9EDFE]"/>
            <WhatYoucanDoItem title="Admin Moderation" description="Make your event private and share a unique code with only the people you want to invite."/>
            <WhatYoucanDoItem title="Automatic Fund Release" description="Make your event private and share a unique code with only the people you want to invite." className="bg-[#E9EDFE]"/>
            <WhatYoucanDoItem title="Refund & Rating" description="Make your event private and share a unique code with only the people you want to invite."/>
            <WhatYoucanDoItem title="Localized Events" description="Make your event private and share a unique code with only the people you want to invite."/>
          </div>
        </div>
      </div>

      <div className="flex flex-col bg-white items-center justify-center p-[133px] w-full gap-[80px]">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 ">
          <div className="flex flex-col">
            <span className="font-semibold text-[40px] text-black">Why <span className="text-[#6F87F8]">Chilloutly?</span></span>
            <div className="flex flex-col gap-[16px] py-[10px] px-[3px]">
              {whys.map((text)=><div key={text} className="flex gap-[8px]">
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

        <div className="bg-[#F8F9FF] px-[16px] py-[60px] md:px-[55px]">
          <div className="flex flex-col md:flex-row py-[1px] md:p-[0px] bg-[#6F87F8] rounded-[20px] items-center">
          <div className="flex flex-col pl-[60px]">
            <span className="font-semibold text-[40px] text-white">Get the App</span>
            <span className="text-white font-normal text-[16px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,</span>

          </div>
          <Image
          src={"/img/image2.svg"}
          alt="Image"
          height={434}
          width={580}
          />

          </div>
        </div>

        <FAQ/>
      </div>


      <div className="bg-[#272F57] py-[60px] px-[55px]">
        <div className="flex bg-white p-[60px]">
          <div className="flex flex-col">
            <div className="flex items-center gap-[14px]">
              <Image
                src={"/img/logo.png"}
                alt="Email"
                height={33}
                width={40}
              />
              <span className="text-[#272F57] font-bold text-[38px]">Chilloutly</span>
            </div>
            <span className="font-normal text-[#2D2D2D] text-[16px]">Create and customize your events, discover exciting experiences around you, and connect with people who share your vibe.</span>

            <div className="flex flex-col">
              <span className="text-black font-semibold text-[21px] text-[#2D2D2D]">Connect with us</span>
              <span className="text-black">hello@chilloutly.com</span>
            </div>

          </div>
          <div className="flex flex-col bg-[#272F57] rounded-[20px] py-[32px] px-[31px]">
            <span className="font-semibold text-[40px] text-white">Stay Updated with Financial Insights</span>
            <span className="font-normal text-[18px] text-white">Get expert tips, market updates, and exclusive offers delivered to your inbox.</span>
            <div className="flex  bg-[#EDEDED] py-[8px] px-[10px] rounded-[60px]">
               <Image
                src={"/img/letter.png"}
                alt="Email"
                height={26}
                width={26}
                />
              <span>Enter your email</span>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

function WhatYoucanDoItem({title, description, className}:{
  title: string,
  description: string,
  className?: string
}){
  return(<div className={`flex flex-col text-black p-[26px] gap-[16px] rounded-[7px] bg-[#D9F9EB] ${className}`}>
    <div className="flex gap-[8px]">
      <Image
        src={"/img/arrow-right.png"}
        alt="Arrow right"
        height={24}
        width={24}
      />
     <span className="text-black font-semibold text-[18px]"> {title}</span>
    </div>
    <span className="font-normal text-[16px] text-[#3A3A3A]"> {description}</span>

  </div>)
}
