"use client";

import { Expand, Heart, Repeat2 } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import { getWishlist, removeWishlist, setCart, setWishlist } from "@/utils/loaclSorage";
import { useEffect, useState } from "react";
import Link from "next/link";
import Swal from "sweetalert2";

const ProductCardSecond = ({ product }) => {
  const {
    id,
    name,
    category,
    price,
    originalPrice,
    discount,
    rating,
    reviewCount,
    images,
    badge,
    inStock,
    colors,
    sizes
  } = product;

  const [wishlist, setWishlistState] = useState([]);
  useEffect(() => {
    setWishlistState(getWishlist());
  }, []);

  const handleWishlist = (id) => {
    if (wishlist.includes(id)) {
      removeWishlist(id);
      setWishlistState(getWishlist());
    } else {
      setWishlist(id);
      setWishlistState(getWishlist());
    }
  };

  const handleAddToCart = () => {
    const cartData = {
      ...product,
      orderQuantity: 1,
      orderColor: colors[0],
      orderSize: sizes[0],
    };

    setCart(cartData);

    Swal.fire({
      position: "center",
      icon: "success",
      title: "Added to cart successfully!",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  return (
    <div className="bg-white group shadow-xs items-center flex relative  overflow-hidden">
      {/* Image Wrapper with fixed size */}
      <div className="w-1/3  bg-white">
        <Image
          alt="Product Image"
          src={images}
          width={200}
          height={200}
          quality={100}
          className="object-cover p-4"
        />
      </div>

      {/* Details Section with Padding */}
      <div className=" w-2/3 px-2 py-4  relative">
        {/* Rating */}
        <div className="flex items-center space-x-1 ">
          {[...Array(Math.floor(rating))].map((_, index) => (
            <span key={index} className="text-yellow-500 text-2xl">
              ★
            </span>
          ))}
        </div>

        {/* Product Name */}
        <p className="text-gray-700 cursor-pointer duration-400 hover:text-[#1867d6] font-semibold text-sm md:text-base line-clamp-2">
          {name}
        </p>

        {/* Price Section */}
        <div className="mt-3 text-base md:text-lg">
          {originalPrice && (
            <span className="line-through text-gray-400 mr-2">
              ${originalPrice}
            </span>
          )}

          <span className="text-red-600 font-semibold">${price}</span>
        </div>
        <div className="mt-4">
          <Button onClick = {handleAddToCart}>Add to Cart</Button>
        </div>
      </div>
      <div className="absolute flex flex-col space-y-3 right-5 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
        <span className="p-2 bg-gray-200 cursor-pointer rounded-md">
          <Link href={`/shop/${id}`}>
            <Expand className="h-5 w-5" />
          </Link>
        </span>
        <span
          onClick={() => handleWishlist(id)}
          className={`p-2 rounded-md cursor-pointer ${
            wishlist.includes(id) ? "bg-[#1867d6] text-white" : "bg-gray-200"
          }`}
        >
          <Heart className="h-5 w-5" />
        </span>
        <span className="p-2 bg-gray-200 cursor-pointer rounded-md">
          <Repeat2 className="h-5 w-5" />
        </span>
      </div>
    </div>
  );
};

export default ProductCardSecond;
