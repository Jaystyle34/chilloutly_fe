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
        {/* AppBar */}
        
          <AppBar/>

       
        <div className="bg-white flex-1">
             {children}
          </div>
      </body>
    </html>
  );
}
