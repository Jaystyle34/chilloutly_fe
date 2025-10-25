import Image from "next/image"
export default function BottomBar(){
    return(<div className="bg-[#272F57]  py-[20px] px-[20px] sm:py-[60px]  sm:px-[55px]">
            <div className="flex flex-col md:flex-row gap-4 bg-white p-[20px] sm:p-[60px] rounded-[20px]">
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
                  <span className="text-black">chilloutly1@gmail.com</span>
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
    
    </div>)
}