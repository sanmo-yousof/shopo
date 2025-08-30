import React from "react";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { Button } from "@/components/ui/button";
import {
  Armchair,
  CarFront,
  ChevronDown,
  ChevronRight,
  Coffee,
  Gamepad2,
  Images,
  Menu,
  MonitorSmartphone,
  Shirt,
  Trophy,
} from "lucide-react";
import { MenuCategories } from "@/utils/utils";
import ListItem from "./menuListItem";
import Link from "next/link";

const Menubar = () => {
  const components = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ];

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

  const MobileMainMenuLinks = [
    {
      mainManu: "Home",
      href: "/",
    },
    {
      mainManu: "Shop",
      href: "/shop",
    },
    {
      mainManu: "Cart",
      href: "/cart",
    },
    {
      mainManu: "Checkout",
      href: "/checkout",
    },
    {
      mainManu: "Dashboard",
      href: "/dashboard",
    },
    {
      mainManu: "Login",
      href: "/login",
    },
    {
      mainManu: "Pages",
      subMenu: ["Privacy Policy", "Terms and Conditions", "FAQ"],
      subhref: ["/privacy", "/terms", "/faq"],
    },
  ];

  return (
    <div className="bg-[#1868d5] hidden lg:block">
      <div className="flex items-center justify-between mx-auto max-w-7xl py-3 px-2">
        {/* Left side */}
        <div className="flex items-center gap-6">
          {/* All Categories Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-2 px-4 py-3 -mb-3 bg-white justify-between text-[#1c1c1c] outline-0 rounded-t-md min-w-68">
              <div className="flex gap-2  items-center">
                <Menu size={16} /> All Categories
              </div>
              <ChevronDown size={16} />
            </DropdownMenuTrigger>

            <DropdownMenuContent className="w-68 hidden lg:block right-0-0 font-medium px-0 rounded-t-none">
              {MenuCategories.map((category, index) => {
                const Icon = icon[index];
                return (
                  <div key={index}>
                    <Link
                      href={category?.href}
                      className="hover:!bg-[#1867d6] hover:!text-white rounded-none py-3 px-4 duration-300  block cursor-pointer"
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
              {MobileMainMenuLinks.map((item, index) => {
                if (item.subMenu) {
                  // Render dropdown for items with submenu
                  return (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuTrigger>
                        {item.mainManu}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent className="z-10">
                        <ul className="w-[200px] p-2">
                          {item.subMenu.map((subItem, subIndex) => (
                            <li key={subIndex}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={item.subhref[subIndex]}
                                  className="block p-2 hover:bg-accent hover:text-accent-foreground rounded-md"
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
                  // Render regular link for items without submenu
                  return (
                    <NavigationMenuItem key={index}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink className="px-4 py-2 text-white hover:bg-[#1867d6] hover:text-white rounded-md">
                          {item.mainManu}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  );
                }
              })}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Right side */}
        <Button variant={"secondary"} className="">
          Become a Seller <ChevronRight size={16} />
        </Button>
      </div>
    </div>
  );
};

export default Menubar;
