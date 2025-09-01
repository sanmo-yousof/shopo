"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
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
  HeartIcon,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { MenuCategories, Navmenu } from "@/utils/utils";
import Link from "next/link";
import WishlistIcon from "./wishlistIcon";

export default function MobileMenu({ isOpen, onClose }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [toggleMenu, setToggleMenu] = useState(true);
  const [openSubmenuIndex, setOpenSubmenuIndex] = useState(null);
  const pathname = usePathname();
 

  if (!isOpen) return null;

  const menuIcon = [House, PackageSearch, ShoppingCart, ReceiptText, HeartIcon ,Layout, LogIn];
  const submenuIcon = [ShieldCheck, ScrollText, CircleQuestionMark];

   
  

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
            <Link className="relative" href={"/wishlist"}>
            <WishlistIcon/>
            </Link>
          </div>
          <Button
            onClick={onClose}
            className="rounded-full h-12 w-12"
            variant="outline"
          >
            <X/>
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

        {/* Toggle */}
        <div className="flex justify-center w-full px-4 items-center gap-2 border-b pb-2">
          <span
            onClick={() => setToggleMenu(true)}
            className={`text-base cursor-pointer ${
              toggleMenu ? "text-black" : "text-gray-400"
            } font-semibold w-1/2`}
          >
            Categories
          </span>

          <span
            onClick={() => setToggleMenu(false)}
            className={`text-base cursor-pointer ${
              !toggleMenu ? "text-black" : "text-gray-400"
            } font-semibold w-1/2`}
          >
            Main Menu
          </span>
        </div>

        {/* Categories */}
        {toggleMenu ? (
          <div className="w-full mt-4 font-medium px-0">
            {MenuCategories?.map((category, index) => {
              const Icon = category.icon;
              const isActive = pathname === category.href;

              return (
                <Link
                  key={index}
                  href={category.href}
                  className={`w-full block py-3 px-4 duration-300 cursor-pointer flex items-center text-[12px] gap-2 
                    ${
                      isActive
                        ? "bg-[#1867d6] text-white"
                        : "hover:bg-[#1867d6] hover:text-white"
                    }`}
                >
                  <Icon className="h-4 w-4" />
                  <p>{category.label}</p>
                </Link>
              );
            })}
          </div>
        ) : (
          /* Main Menu */
          <div className="w-full font-medium px-0">
            {Navmenu.map((category, index) => {
              const isMenuOpen = openSubmenuIndex === index;
              const Icon = menuIcon[index];

              const toggleSubmenu = () => {
                setOpenSubmenuIndex((prev) => (prev === index ? null : index));
              };

              if (category.subMenu) {
                return (
                  <div key={index}>
                    <div
                      onClick={toggleSubmenu}
                      className="flex duration-300 cursor-pointer text-sm w-full py-3 px-4 justify-between items-center hover:bg-[#1867d6] hover:text-white"
                    >
                      <p>{category.mainManu}</p>
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-300 ${
                          isMenuOpen ? "rotate-180" : ""
                        }`}
                      />
                    </div>

                    {/* Submenu */}
                    {isMenuOpen &&
                      category.subMenu.map((single, idx) => {
                        const SubIcon = submenuIcon[idx];
                        const isActive = pathname === category.subhref[idx];

                        return (
                          <Link
                            key={idx}
                            href={category.subhref[idx]}
                            className={`flex w-full gap-2 text-sm py-3 px-6 items-center 
                              ${
                                isActive
                                  ? "bg-[#1867d6] text-white"
                                  : "hover:bg-[#1867d6] hover:text-white"
                              }`}
                          >
                            <SubIcon className="w-4 h-4" />
                            <p>{single}</p>
                          </Link>
                        );
                      })}
                  </div>
                );
              }

              const isActive = pathname === category.href;

              return (
                <Link
                  key={index}
                  href={category.href}
                  className={`flex duration-300 cursor-pointer text-sm w-full py-3 px-4 gap-2 items-center 
                    ${
                      isActive
                        ? "bg-[#1867d6] text-white"
                        : "hover:bg-[#1867d6] hover:text-white"
                    }`}
                >
                  <Icon className="w-4" />
                  <p>{category.mainManu}</p>
                </Link>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
