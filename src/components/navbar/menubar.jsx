import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronRight, Menu } from "lucide-react";
import { MenuCategories, Navmenu } from "@/utils/utils";
import Link from "next/link";

const Menubar = () => {
  return (
    <div className="bg-primary hidden lg:block">
      <div className="flex items-center justify-between mx-auto max-w-7xl py-3 px-4">
        {/* Left side */}
        <div className="flex items-center gap-6">
          {/* All Categories Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex cursor-pointer items-center gap-2 px-4 py-3 -mb-3 bg-white justify-between text-[#1c1c1c] outline-0 rounded-t-md min-w-68">
              <div className="flex gap-2  items-center">
                <Menu size={16} /> All Categories
              </div>
              <ChevronDown size={16} />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-68 hidden lg:block right-0-0 font-medium px-0 rounded-t-none">
              {MenuCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <div key={index}>
                    <Link
                      href={category?.href}
                      className="hover:!bg-primary hover:!text-white rounded-none py-3 px-4 duration-300  block cursor-pointer"
                    >
                      <div className="flex items-center text-[12px] gap-2">
                        <Icon className="hover:text-white h-4 w-4 " />
                        <p>{category?.label}</p>
                      </div>
                    </Link>
                  </div>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Navigation Menu */}
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              {Navmenu.map((item, index) => {
                if (item?.subMenu) {
                  return (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuTrigger className="flex items-center gap-2">
                        {item.mainManu}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="z-10">
                        <ul className="w-[220px] p-2 space-y-1">
                          {item.subMenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.subhref[subIndex]}
                                  className="p-2 hover:bg-accent hover:text-accent-foreground rounded-md block"
                                >
                                  {subItem}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </NavigationMenuItem>
                  );
                } else {
                  // ✅ Normal links: Use NavigationMenuItem without NavigationMenuLink
                  return (
                    <NavigationMenuItem key={index}>
                      <Link
                        href={item.href}
                        className="px-4 py-2 text-white hover:bg-primary rounded-md block"
                      >
                        {item.mainManu}
                      </Link>
                    </NavigationMenuItem>
                  );
                }
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side */}
        <Button variant={"secondary"} className="rounded-none">
          Become a Seller <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
};

export default Menubar;
