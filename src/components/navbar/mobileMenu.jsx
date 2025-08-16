"use client";

import { useState } from "react";
import {
  ChevronRight,
  Search,
  Gamepad2,
  Armchair,
  Trophy,
  Coffee,
  Shirt,
  Repeat2,
  Heart,
  MonitorSmartphone,
  CarFront,
  Images,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MenuCategories } from "@/utils/utils";


export default function MobileMenu({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState("");

  const [toggleMenu,setToggleMenu] = useState(true)

  if (!isOpen) return null;

   const icon = [
    MonitorSmartphone,
    Gamepad2,
    Images,
    CarFront,
    Armchair,
    Trophy,
    Coffee,
    Shirt,
  ];

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 bg-opacity-50 z-40 lg:hidden"
        onClick={onClose}
      />

      {/* Mobile Menu */}
      <div className="fixed  left-0 top-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto">
        {/* Header with Search */}
        

        <div className="flex p-4 justify-between items-center">
            <div className="flex  space-x-3">
              <Repeat2 className="cursor-pointer w-6 h-6  text-gray-600" />
              <Heart className="cursor-pointer w-6 h-6  text-gray-600" />
              
            </div>
            <div>
              <Button onClick={onClose} className='rounded-full h-12 w-12' variant="outline">X</Button>
            </div>
          </div>

          <div className="p-4">
          
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search Product..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-3 pr-12 py-2 border border-gray-300 rounded-none text-sm outline-none focus:border-blue-500"
              />
              <Button
                size="sm"
                className="absolute h-full rounded-none p-3 right-0 top-0 "
              >
                <Search className="" />
              </Button>
            </div>
          </div>
        </div>

        {/* Categories Header */}
        <div className="   ">
          
          <Button onClick={() => setToggleMenu(true)} className={`text-lg ${toggleMenu === true? "text-gray-700":"text-gray-400" } font-semibold bg-white `}>
            Categories 
          </Button> | <Button onClick={() => setToggleMenu(false)} className={`text-lg ${toggleMenu === false? "text-gray-700":"text-gray-400" } font-semibold bg-white `}>
            Main Menu 
          </Button>
        </div>
{
  toggleMenu ? <div className="w-full mt-4 font-medium px-0 rounded-t-none">
              {MenuCategories.map((category, index) => {
                const Icon = icon[index];
                return (
                  <div key={index}>
                    {/* <DropdownMenuSeparator className="my-0" /> */}
                    <div className="hover:!bg-[#1867d6] hover:!text-white rounded-none py-4 px-4 duration-300  cursor-pointer">
                      <div className="flex w-full justify-between items-center">
                        <div className="flex items-center text-[12px] gap-2">
                          <Icon className="hover:text-white" />
                          <p>{category}</p>
                        </div>
                        <ChevronRight className="hover:text-white" size={16} />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>:""
}
       
          
        

        
      </div>
    </>
  );
}
