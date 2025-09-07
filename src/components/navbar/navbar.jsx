

import { Repeat2, UserRound } from "lucide-react";
import Image from "next/image";
import { Countries, Currencys, Languages } from "@/utils/utils";
import Onlydropdown from "../onlydropdown";
import Menubar from "./menubar";
import MobileMenuToggleBtn from "./mobileMenuToggleButton";
import Link from "next/link";
import WishlistIcon from "./wishlistIcon";
import CartIcon from "./cartIcon";
import ProductSearch from "./productSearch";


export default function Navbar() {
  return (
    <header>
      <div className="">
        <div className="flex max-w-7xl px-4 py-3 mx-auto items-center justify-between">
          {/* Left Links */}
          <ul className="text-xs flex space-x-6 font-medium">
            <li><a href="#">Account</a></li>
            <li><a href="#">Track Order</a></li>
            <li><a href="#">Support</a></li>
          </ul>

          {/* Dropdowns */}
          <div className="sm:flex items-center hidden space-x-4">
            <Onlydropdown data={Countries} />
            <Onlydropdown data={Currencys} />
            <Onlydropdown data={Languages} />
          </div>
        </div>
        <hr />
        <div className="flex mx-auto max-w-7xl py-5 px-4 justify-between items-center">
          <div className="block lg:hidden">
            <MobileMenuToggleBtn />
          </div>
          <div>
            <Image src="/logo-3.svg" alt="logo" width={150} height={50} />
          </div>
          <ProductSearch/>
          <div className="flex space-x-4">
            <Repeat2 className="cursor-pointer w-6 h-6 hidden lg:block text-gray-600" />
            <Link className="relative hidden lg:block" href={"/wishlist"}>
              <WishlistIcon />
            </Link>
            <Link className="relative" href={"/cart"}>
              <CartIcon/>
            </Link>
            <Link href={"/dashboard"}>
              <UserRound className="cursor-pointer hidden lg:block w-6 h-6 text-gray-600" />
            </Link>
          </div>
        </div>
        <Menubar />
      </div>
    </header>
  );
}
