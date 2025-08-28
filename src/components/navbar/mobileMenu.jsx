"use client";

import { useState } from "react";

import {
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
  ChevronDown,
  House,
  ShoppingCart,
  PackageSearch,
  ReceiptText,
  LogIn,
  ShieldCheck,
  CircleQuestionMark,
  ScrollText,
  Layout,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MenuCategories } from "@/utils/utils";
import { MobileMainMenuLinks } from "@/utils/utils";
import Link from "next/link";

export default function MobileMenu({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [toggleMenu, setToggleMenu] = useState(true);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);

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

  const menuIcon = [House,PackageSearch,ShoppingCart,ReceiptText,Layout,LogIn]
  const submenuIcon = [ShieldCheck,ScrollText ,CircleQuestionMark]

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
        <div className="flex justify-center w-full px-4  items-center gap-2 border-b pb-2">
          <span
            onClick={() => setToggleMenu(true)}
            className={`text-base ${
              toggleMenu ? "text-black" : "text-gray-600"
            } font-semibold   w-1/2`}
          >
            Categories
          </span>

          
          
          <span
            onClick={() => setToggleMenu(false)}
            className={`text-base ${
              !toggleMenu ? "text-black" : "text-gray-600"
            } font-semibold  w-1/2`}
          >
            Main Menu
          </span>
        </div>

        {/* Categories */}
        {toggleMenu ? (
          <div className="w-full mt-4 font-medium px-0">
            {MenuCategories?.map((category, index) => {
              const Icon = icon[index];
              return (
                <div key={index}>
                  <Link
                    href={category?.href}
                    className="hover:!bg-[#1867d6] hover:!text-white w-full block py-3 px-4 duration-300 cursor-pointer"
                  >
                    <div className="flex items-center text-[12px] gap-2">
                      <Icon className="h-4 w-4" />
                      <p>{category?.label}</p>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>
        ) : (
          /* Main Menu (submenu always visible) */
          <div className="w-full  font-medium px-0">
            {MobileMainMenuLinks.map((category, index) => {
              const isOpen = openSubmenuIndex === index;
              const Icon = menuIcon[index];

              const toggleSubmenu = () => {
                setOpenSubmenuIndex((prev) => (prev === index ? null : index));
              };

              return (
                <div key={index}>
                  {category.subMenu ? (
                    // Parent with submenu
                    <>
                      <div
                        onClick={toggleSubmenu}
                        className="flex duration-300 cursor-pointer text-sm hover:!text-white w-full py-3 px-4 hover:!bg-[#1867d6] justify-between items-center"
                      >
                        <p>{category.mainManu}</p>
                        <ChevronDown
                          size={14}
                          className={`transition-transform duration-300 ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </div>

                      {/* Submenu */}
                      {isOpen && category.subMenu && category.subhref && (
                        <div className="ml-6">
                          {category.subMenu.map((single, idx) => {
                            const Icon = submenuIcon[idx]
                            return(
                            <Link
                              key={idx}
                              href={category.subhref[idx]}
                              className="flex hover:bg-amber-400 w-full gap-2 text-sm py-3 hover:text-white px-2 items-center"
                            >
                              <Icon className="w-4 h-4"/>
                              <p>{single}</p>
                            </Link>
                          )})}
                        </div>
                      )}
                    </>
                  ) : (
                    // Single-level menu with direct link
                    <Link
                      href={category.href}
                      className="flex duration-300 cursor-pointer hover:!text-white text-sm w-full py-3 px-4 hover:!bg-[#1867d6] gap-2 items-center"
                    >
                      <Icon className="w-4"/>
                      <p>{category.mainManu}</p>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
