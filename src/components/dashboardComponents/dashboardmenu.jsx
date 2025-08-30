"use client";

import { DashboardLinks } from "@/utils/utils";
import { PanelLeftOpen, PanelRightOpenIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const DashboardMenu = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const pathname = usePathname();

  return (
    <>
    <div
      className={`hidden lg:block  bg-white min-h-[100vh] 
      ${openMenu ? "w-89" : "w-16"}  
      border transition-all duration-300`}
    >
      {/* Toggle Button */}
      <div
        title="Toggle Menu"
        onClick={() => setOpenMenu(!openMenu)}
        className={`flex text-gray-500 ${
          openMenu ? "justify-between" : "justify-center"
        } items-center px-2 py-3`}
      >
        {openMenu ? (
          <>
            <span className="font-bold text-sm lg:text-lg">Dashboard</span>
            <PanelRightOpenIcon className="cursor-pointer" />
          </>
        ) : (
          <PanelLeftOpen className="cursor-pointer" />
        )}
      </div>

      {/* Menu Items */}
      <ul className="border-t">
        {DashboardLinks?.map((item, indx) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;
          return (
            <li key={indx}>
              <Link
                href={item?.href}
                className={`rounded-none py-3 px-2 duration-300 block cursor-pointer
                  ${
                    isActive
                      ? "bg-[#1867d6] text-white"
                      : "hover:bg-[#1867d6] hover:text-white"
                  }`}
              >
                <div
                  className={`flex items-center ${
                    !openMenu && "justify-center"
                  } gap-3 text-xs lg:text-sm`}
                >
                  <Icon className="h-5 w-5" />
                  {openMenu && <p>{item?.text}</p>}
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
    </>
    
  );
};

export default DashboardMenu;
