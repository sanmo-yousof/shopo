"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import { getWishlist } from "@/utils/loaclSorage";

const WishlistIcon = ({ size = 6 }) => {
  const [wishlistCount, setWishlistCount] = useState(getWishlist().length);

  useEffect(() => {
    const handleWishlistUpdate = () => setWishlistCount(getWishlist().length);
    window.addEventListener("wishlistUpdated", handleWishlistUpdate);
    return () => {
      window.removeEventListener("wishlistUpdated", handleWishlistUpdate);
    };
  }, []);

  return (
    <>
      <Heart
        className="cursor-pointer text-gray-600"
        style={{ width: size * 4, height: size * 4 }}
      />
      <span className="absolute -top-1.5 -right-2 bg-[#1867d6] text-white text-[8px] rounded-full py-0.5 px-1.5">
        {wishlistCount}
      </span>
    </>
  );
};

export default WishlistIcon;
