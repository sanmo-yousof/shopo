"use client";
import { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./mobileMenu";


const MobileMenuToggleBtn = () => {
   const [isOpen, setIsOpen] = useState(false);
  return(
    <>
      {/* Button */}
      <Menu
        className="w-6 h-6 cursor-pointer"
        onClick={() => setIsOpen(true)}
      />

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  )
}

export default MobileMenuToggleBtn;