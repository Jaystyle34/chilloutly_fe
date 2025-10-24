import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import GetApp from "./components/GetApp";
import HomeFeatures from "./components/HomeFeatures";
import ChilloutlyNameAndLogo from "./components/ChilloutlyNameAndLogo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-full bg-grey-200`}
      >
        <div className="flex content-between justify-between w-full "> 
           <div className="flex  bg-green-200 mx-[100px]">
            <ChilloutlyNameAndLogo/>
           
            </div>
            <div className="flex mx-[100px]">
              <HomeFeatures/>
              <GetApp/>
           </div>
        </div>
        {children}
      </body>
    </html>
  );
}
