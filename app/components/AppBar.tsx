"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react"; 
import ChilloutlyNameAndLogo from "./ChilloutlyNameAndLogo";
import HomeFeatures from "./HomeFeatures";
import GetApp from "./GetApp";

export default function AppBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="fixed flex justify-between items-center w-full   px-4 md:px-[100px] py-3 z-50">
      {/* Left side - Logo */}
      <div className="flex items-center">
        <ChilloutlyNameAndLogo />
      </div>

      {/* Right side - Desktop */}
      <div className="hidden md:flex items-center gap-[42px]">
        <HomeFeatures />
        <GetApp />
      </div>

      {/* Hamburger icon - Mobile */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-[64px] left-0 w-full bg-[#272F57] shadow-md flex flex-col items-center gap-6 py-6 md:hidden z-40">
          <HomeFeatures />
          <GetApp />
        </div>
      )}
    </div>
  );
}
