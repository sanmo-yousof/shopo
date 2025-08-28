
import { Handbag, Heart, Repeat2, UserRound } from "lucide-react";
import Image from "next/image";
import { Countries, Currencys, Languages } from "@/utils/utils";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "@/components/ui/button";
import Onlydropdown from "../onlydropdown";
import Menubar from "./menubar";
import MobileMenuToggleBtn from "./mobileMenuToggleButton";

export default function Navbar() {
  
  return (
    <header>
      <div className="">
        <div className="flex max-w-7xl px-2 py-3  mx-auto items-center justify-between">
          {/* Left Links */}
          <ul className="text-xs flex space-x-6 font-medium">
            <li>
              <a href="#">Account</a>
            </li>
            <li>
              <a href="#">Track Order</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
          </ul>

          {/* Dropdowns */}
          <div className="sm:flex items-center hidden space-x-4">
            {/* Country Dropdown */}
            <Onlydropdown data={Countries} />
            <Onlydropdown data={Currencys} />
            <Onlydropdown data={Languages} />
          </div>
        </div>
        <hr />
        <div className="flex  mx-auto max-w-7xl py-5 px-2 justify-between items-center">
          <div className="block lg:hidden">
            <MobileMenuToggleBtn/>
          </div>
          <div>
            <Image src="/logo-3.svg" alt="logo" width={150} height={50} />
          </div>
          <div className="border justify-between gap-2 lg:flex items-center hidden w-[500px]">
            <div className="text-xs">
              <input
                className="outline-0 w-[250px] border-r-1 pl-3 py-2"
                placeholder="Search Product...."
                type="text"
              />
            </div>
            <div className="">
              <Select>
                <SelectTrigger className="py-0 rounded-none w-[150px] border-none shadow-none text-xs outline-none focus:outline-none focus:ring-0">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <Button className={'rounded-none'} variant={"secondary"} >
                Search
              </Button>
            </div>
          </div>
          <div className="flex space-x-4">
            <Repeat2 className="cursor-pointer w-6 h-6 hidden lg:block text-gray-600" />
            <Heart className="cursor-pointer w-6 h-6 hidden lg:block text-gray-600" />
            <Handbag className="cursor-pointer w-6 h-6 text-gray-600" />
            <UserRound className="cursor-pointer hidden lg:block w-6 h-6 text-gray-600" />
          </div>
        </div>
        <Menubar />
      </div>
    </header>
  );
}
