import { Expand, Heart, Repeat2 } from "lucide-react";
import Image from "next/image";
import { Button } from "./ui/button";

const ProductCardSecond = ({ product }) => {
  const {
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
  } = product;
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
        <p className="text-gray-700 cursor-pointer duration-400 hover:text-[#1868d5] font-semibold text-sm md:text-base line-clamp-2">
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
          <Button>
            Add to Cart
          </Button>
        </div>
      </div>
      <div className="absolute flex flex-col space-y-3 right-5 opacity-0 translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
          <span className="p-2 bg-gray-200 cursor-pointer rounded-md">
            <Expand className="h-5 w-5" />
          </span>
          <span className="p-2 bg-gray-200 cursor-pointer rounded-md">
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
