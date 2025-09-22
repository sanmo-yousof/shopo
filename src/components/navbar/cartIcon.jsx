"use client";

import { Handbag } from "lucide-react";
import { useEffect, useState } from "react";
import { getCart } from "@/utils/loaclSorage";

const CartIcon = ({ size = 6 }) => {
  const [cartCount, setCartCount] = useState(0);

  useEffect(() => {
    // update after client mounts
    setCartCount(getCart().length);

    const handleCartUpdate = () => setCartCount(getCart().length);
    window.addEventListener("CartUpdated", handleCartUpdate);
    return () => window.removeEventListener("CartUpdated", handleCartUpdate);
  }, []);

  return (
    <div className="relative">
      <Handbag
        className="cursor-pointer text-gray-600"
        style={{ width: size * 4, height: size * 4 }}
      />
      {cartCount >= 0 && (
        <span className="absolute -top-1.5 -right-2 bg-primary text-white text-[8px] rounded-full py-0.5 px-1.5">
          {cartCount}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
