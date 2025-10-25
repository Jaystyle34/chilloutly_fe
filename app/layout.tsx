import type { Metadata } from "next";
import "./globals.css";
import GetApp from "./components/GetApp";
import HomeFeatures from "./components/HomeFeatures";
import ChilloutlyNameAndLogo from "./components/ChilloutlyNameAndLogo";
import Image from "next/image";
import AppBar from "./components/AppBar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Chilloutly",
  description: "A platform that handles events of any kind",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body
        className={`antialiased w-full bg-white`}
      >
        <div className="flex flex-col pt-[20px] gap-4  bg-[url('/img/image1.svg')] bg-no-repeat bg-cover bg-center">
          {/* AppBar */}
        
          <AppBar/>

          <div className={` flex flex-col items-center py-[24px] pt-[100px] w-full  px-[20px] md:px-[200px] bg-white/0`}>
            <span className="font-normal md:font-semibold text-white text-[25px] mdm:text-[64px] text-center">Create Discover, and Experience Events <span className="text-[#6F87F8]">Like Never Before</span></span>
            <span className="text-white font-normal text-[18px] text-center">From intimate gatherings to grand festivals — host, manage, and attend events effortlessly, all in one app.</span>
            <div className="flex flex-col items-center bg-[#E9EDFE30]/19 p-[26px] rounded-[7px] gap-[20px]">
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
       
        <div className="bg-white flex-1">
             {children}
          </div>
      </body>
    </html>
  );
}
