import Image from "next/image";

export default function WhatCanYoudoWithChilloutly(){
    return (
          <div className="flex flex-col items-center justify-center w-full  bg-[#F3FDF9] py-[20px] md:py-[113px] gap-[24px]">
            <div className="flex flex-col items-center text-black ">
              <span className="font-semibold text-[30px] md:text-[40px] text-black text-center">What You Can Do With <span className="text-[#6F87F8]">Chilloutly</span></span>
              <span className="font-normal text-[18px] text-[#3A3A3A] text-center">Save, invest, borrow, and grow on one trusted platform, built for your financial success.</span>
            </div>
            <div className="flex flex-col lg:flex-row gap-[37px] items-center">
              <Image
              src={'/img/phone.png'}
              alt="Phone"
              height={700}
              width={400}
              className="h-[500px] w-[250px] sm:h-[700px] sm:w-[400px]"
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
          </div>);
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