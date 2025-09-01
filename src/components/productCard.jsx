"use client";

import { Expand, Handbag, Heart, Repeat2 } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { getCart, getWishlist, removeWishlist, setCart, setWishlist } from "@/utils/loaclSorage";

const ProductCard = ({ product }) => {
  
  const { id, name, price, originalPrice, sizes, rating, images, colors } = product;
  
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
    orderSize: sizes[0]
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

console.log(getCart())


  return (
    <div className="bg-white group shadow-md overflow-hidden">
      {/* Image Wrapper */}
      <div className="w-full lg:p-12 relative sm:p-16 md:p-8 h-[220px] flex justify-center items-center bg-white">
        <Image
          alt="Product Image"
          src={images}
          width={200}
          height={200}
          quality={100}
          className="object-cover"
        />
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

      {/* Details Section */}
      <div className="p-6 relative">
        {/* Rating */}
        <div className="flex items-center space-x-1">
          {[...Array(Math.floor(rating))].map((_, index) => (
            <span key={index} className="text-yellow-500 text-2xl">
              ★
            </span>
          ))}
        </div>

        {/* Product Name */}
        <Link
          href={`/shop/${id}`}
          className="text-gray-700 cursor-pointer duration-400 hover:text-[#1867d6] font-semibold text-base line-clamp-2"
        >
          {name}
        </Link>

        {/* Price */}
        <div className="mt-3 text-lg">
          {originalPrice && (
            <span className="line-through text-gray-400 mr-2">
              ${originalPrice}
            </span>
          )}
          <span className="text-red-600 font-semibold">${price}</span>
        </div>

        {/* Add to Cart button */}
        <div className="absolute bottom-4 left-0 right-0 px-6 space-y-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          <Button
            onClick={() => handleAddToCart()}
            className="w-full rounded-none"
          >
            <Handbag /> Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
