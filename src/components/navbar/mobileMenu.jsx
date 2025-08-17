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
import { MobileMainMenuLinks } from "@/utils/utils"

export default function MobileMenu({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [toggleMenu, setToggleMenu] = useState(true);

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
      <div className="fixed left-0 top-0 h-full w-80 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto">
        {/* Header */}
        <div className="flex p-4 justify-between items-center">
          <div className="flex space-x-3">
            <Repeat2 className="cursor-pointer w-6 h-6 text-gray-600" />
            <Heart className="cursor-pointer w-6 h-6 text-gray-600" />
          </div>
          <Button
            onClick={onClose}
            className="rounded-full h-12 w-12"
            variant="outline"
          >
            X
          </Button>
        </div>

        {/* Search */}
        <div className="p-4">
          <div className="flex items-center gap-2 mb-4">
            <div className="flex-1 relative">
              <input
                type="text"
                placeholder="Search Product..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-3 pr-12 py-2 border border-gray-300 rounded-none text-sm outline-none focus:border-[#1867d6]"
              />
              <Button
                size="sm"
                className="absolute h-full rounded-none p-3 right-0 top-0"
              >
                <Search />
              </Button>
            </div>
          </div>
        </div>

        {/* Categories / Main Menu Toggle */}
        <div className="flex justify-center gap-2 border-b pb-2">
          <Button
            onClick={() => setToggleMenu(true)}
            className={`text-lg ${
              toggleMenu ? "text-gray-700" : "text-gray-400"
            } font-semibold bg-white`}
          >
            Categories
          </Button>
          |
          <Button
            onClick={() => setToggleMenu(false)}
            className={`text-lg ${
              !toggleMenu ? "text-gray-700" : "text-gray-400"
            } font-semibold bg-white`}
          >
            Main Menu
          </Button>
        </div>

        {/* Categories */}
        {toggleMenu ? (
          <div className="w-full mt-4 font-medium px-0">
            {MenuCategories.map((category, index) => {
              const Icon = icon[index];
              return (
                <div key={index}>
                  <div className="hover:!bg-[#1867d6] hover:!text-white py-4 px-4 duration-300 cursor-pointer">
                    <div className="flex w-full justify-between items-center">
                      <div className="flex items-center text-[12px] gap-2">
                        <Icon />
                        <p>{category}</p>
                      </div>
                      <ChevronRight size={16} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          /* Main Menu (submenu always visible) */
          <div className="w-full mt-4 font-medium px-0">
            {MobileMainMenuLinks.map((category, index) => (
              <div key={index}>
                
                  <div className="flex duration-300 cursor-pointer hover:!text-white w-full py-4 px-4  hover:!bg-[#1867d6] justify-between items-center">
                    <p>{category.mainManu}</p>
                    <ChevronRight size={16} />
                  </div>

                  {/* Always visible submenu */}
                  {category?.subMenu && (
                    <div className="ml-6">
                      {category.subMenu.map((single, idx) => (
                        <div
                          key={idx}
                          className="flex hover:bg-amber-400 w-full justify-between py-3 px-2 items-center"
                        >
                          <p>{single}</p>
                          <ChevronRight size={14} />
                        </div>
                      ))}
                    </div>
                  )}
                
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
