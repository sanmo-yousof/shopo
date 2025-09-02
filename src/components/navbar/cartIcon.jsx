"use client";

import { Handbag } from "lucide-react";
import { useEffect, useState } from "react";
import { getCart } from "@/utils/loaclSorage";

const CartIcon = ({ size = 6 }) => {
  const [cartCount, setCartCout] = useState(getCart().length);

  useEffect(() => {
    const handleCartUpdate = () => setCartCout(getCart().length);
    window.addEventListener("CartUpdated", handleCartUpdate);
    return () => {
      window.removeEventListener("CartUpdated", handleCartUpdate);
    };
  }, []);

  return (
    <>
      <Handbag
        className="cursor-pointer text-gray-600"
        style={{ width: size * 4, height: size * 4 }}
      />
      <span className="absolute -top-1.5 -right-2 bg-[#1867d6] text-white text-[8px] rounded-full py-0.5 px-1.5">
        {cartCount}
      </span>
    </>
  );
};

export default CartIcon;
