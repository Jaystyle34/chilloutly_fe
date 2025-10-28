import Image from "next/image"
export default function BottomBar(){
    return(<div className="bg-[#272F57]  py-[20px] px-[20px] sm:py-[60px]  sm:px-[55px]">
            <div className="flex flex-col lg:flex-row gap-4 bg-white p-[20px] sm:p-[60px] md:gap-[100px] rounded-[20px]">
              <div className="flex flex-col gap-6">
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
                </div>
                
    
                <div className="flex flex-col gap-4">
                  <span className="text-black font-semibold text-[21px]/7 text-[#2D2D2D]">Connect with us</span>
                  <div className="flex gap-3">
                     <Image
                    src={"/img/call.png"}
                    alt="Email"
                    height={24}
                    width={24}
                  />
                    <span className="text-[#2D2D2D] font-normal text-[16px]">+234814647758</span>
                  </div>

                  <div className="flex gap-3">
                     <Image
                    src={"/img/email.png"}
                    alt="Email"
                    height={24}
                    width={24}
                  />
                    <span className="text-[#2D2D2D] font-normal text-[16px]">chilloutly1@gmail.com</span>
                  </div>
                </div>
    
              </div>
              <div className="flex flex-col bg-[#272F57] rounded-[20px] py-[32px] px-[31px] gap-[20px]">
               <div className="flex flex-col gap-[8px]">
                <span className="font-semibold text-[40px]/10 text-white">Stay Updated with Financial Insights</span>
                <span className="font-normal text-[18px]/7 text-white">Get expert tips, market updates, and exclusive offers delivered to your inbox.</span>
               </div>
                <div className="flex items-center bg-[#EDEDED] py-[3px] sm:py-[7px] px-[10px] rounded-[59px] gap-1">
                   <div className="flex flex-col items-center justify-center bg-[#D9D9D9] h-[40px] w-[40px] h-full rounded-full p-1 ">
                    <Image
                      src={"/img/letter.png"}
                      alt="Email"
                      height={26}
                      width={26}
                      className="h-[26px] w-[26px] p-1 "

                    />
                   </div>
                    <input type="email" 
                    placeholder="Enter your email"
                    className="w-full text-black border border-transparent p-1"/>
                  <div className="flex items-center rounded-[24px] bg-[#272F57] h-full px-[24px] py-2 md:py-[0px]">
                    <button>Subscribe</button>
                  </div>
                </div>
              </div>
    
            </div>
    
    </div>)
}