"use client";
import { DashboardLinks } from "@/utils/utils";
import { Layout, SidebarOpen } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Button } from "../ui/button";

const DashBoardMobileMenu = () => {
  const [openSideBar, setOpenSideBar] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <div className="mb-6 lg:hidden">
        <Button onClick={() => setOpenMenu(!openMenu)}>
          <SidebarOpen />
          <span>Dashboard </span>
        </Button>
      </div>

      {openMenu && (
        <>
          {/* Overlay */}
          <div
            onClick={() => setOpenMenu(!openMenu)}
            className="fixed inset-0 bg-black/30 bg-opacity-50 z-40 lg:hidden"
          />
          {/* Mobile Menu */}
          <div className="fixed left-0 top-0 h-full w-64 bg-white z-50 transform transition-transform duration-300 ease-in-out lg:hidden overflow-y-auto">
            <div className="flex p-4 justify-between items-center">
              <Image
                src={"/logo-3.svg"}
                width={100}
                height={50}
                quality={100}
                alt="logo"
              />
              <Button
                onClick={() => setOpenMenu(false)}
                className="rounded-full h-12 w-12"
                variant="outline"
              >
                X
              </Button>
            </div>
            <div>
              <ul className="border-t ">
                {DashboardLinks?.map((item, indx) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;
                  return (
                    <li key={indx}>
                      <Link
                        href={item?.href}
                        className={`rounded-none py-3 px-4 duration-300 block cursor-pointer
                  ${
                    isActive
                      ? "bg-primary text-white"
                      : "hover:bg-primary hover:text-white"
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
          </div>
        </>
      )}
    </>
  );
};

export default DashBoardMobileMenu;
