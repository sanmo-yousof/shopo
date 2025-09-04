"use client";

import Image from "next/image";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { useEffect, useState } from "react";
import { Flag, Heart, Minus, Plus } from "lucide-react";
import { Button } from "../ui/button";
import facebook from "@/asset/singleProductImages/facebook.png";
import twitter from "@/asset/singleProductImages/twitter.png";
import pinterest from "@/asset/singleProductImages/pinterest.png";
import ProductInfoSkeleton from "../productInfoSkeleton";
import useSingleProduct from "@/hook/useSingleProduct";
import { getWishlist, removeWishlist, setCart, setWishlist } from "@/utils/loaclSorage";
import Swal from "sweetalert2";

const ProductInfo = () => {
  const [color, setColour] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [size, setSize] = useState("");

  const { singleData, loading } = useSingleProduct();
  const [image, setImage] = useState(singleData?.images);
  const [wishlist, setWishlistState] = useState([]);

  useEffect(() => {
    setWishlistState(getWishlist());
  }, []);

  useEffect(() => {
    if (singleData?.images) {
      setImage(singleData?.images);
      setColour(singleData?.colors[0]);
      setSize(singleData?.sizes[0]);
    }
  }, [singleData]);

  const handleWishlist = (id) => {
    if (wishlist.includes(id)) {
      removeWishlist(id);
      setWishlistState(getWishlist());
    } else {
      setWishlist(id);
      setWishlistState(getWishlist());
    }
  };

  const handleIncrement = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : prev));
  };

  const handleSizeChange = (field, value) => {
    if (field === "size") {
      setSize(value);
    }
  };


  const handleAddtoCart = () => {
      const cartData = {
      ...singleData,
      orderQuantity: quantity,
      orderColor: color,
      orderSize: size,
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
    <>
      {loading ? (
        <ProductInfoSkeleton />
      ) : (
        <div className="mx-4 flex flex-col my-8 gap-12 lg:flex-row">
          <div className="w-full lg:w-1/2">
            <div>
              <Image
                src={image ? image : singleData?.images}
                alt="product"
                width={400}
                height={400}
                quality={100}
                className=" border rounded-md p-4 sm:p-8 lg:p-10 w-full h-60 sm:h-72 md:h-80 lg:h-[400px] object-contain"
              />
            </div>
            <div className="lg:mt-4 mt-2 flex-wrap lg:gap-4 gap-2 flex">
              {singleData?.allImages?.map((im, indx) => {
                return (
                  <Image
                    src={im}
                    key={indx}
                    alt="product"
                    width={100}
                    height={200}
                    quality={100}
                    className={`border ${
                      image === im ? "border-blue-800" : "border"
                    } rounded-md cursor-pointer w-16 h-16 sm:w-24 sm:h-24  md:p-4 p-2`}
                    onClick={() => setImage(im)}
                  />
                );
              })}
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h4 className="text-xs lg:text-sm text-gray-500 font-semibold uppercase mb-2">
              {singleData?.category}
            </h4>

            <h2 className="text-base sm:text-lg  md:text-xl lg:text-2xl">
              {singleData?.name}
            </h2>

            <div className="flex items-center mt-2 space-x-1 ">
              {Number.isFinite(singleData?.rating) &&
                [...Array(Math.floor(singleData.rating))].map((_, index) => (
                  <span key={index} className="text-yellow-500 text-2xl">
                    ★
                  </span>
                ))}

              <span className="text-xs text-gray-500 ">
                {singleData?.reviewCount} reviews
              </span>
            </div>

            <div className="mt-4 text-base">
              {singleData?.originalPrice && (
                <span className="line-through text-gray-400 mr-4">
                  ${singleData?.originalPrice}
                </span>
              )}

              <span className="text-red-600 text-xl font-semibold">
                ${singleData?.price}
              </span>
            </div>

            <p className="text-xs mt-6  text-gray-600 md:text-sm">
              {singleData?.description}
            </p>

            <div className="mt-7">
              <h2 className="text-xs lg:text-sm text-gray-500 font-semibold ">
                COLOR
              </h2>
              <div className="flex gap-4 mt-4">
                {singleData?.colors?.map((c) => (
                  <div
                    key={c}
                    onClick={() => setColour(c)}
                    className={`h-5 w-5 border border-black rounded-full ${
                      color === c ? `ring-2 ring-gray-500` : ""
                    }`}
                    style={{ backgroundColor: c }}
                  />
                ))}
              </div>
            </div>

            <div className="mt-7">
              <h2 className="text-xs lg:text-sm text-gray-500 font-semibold ">
                SIZE
              </h2>
              <Select
                value={size}
                onValueChange={(value) => handleSizeChange("size", value)}
              >
                <SelectTrigger className="md:py-6 py-5 mt-2 max-w-[400px] w-full border shadow-none text-xs outline-none focus:outline-none focus:ring-0">
                  <SelectValue placeholder="Select Size" />
                </SelectTrigger>
                <SelectContent>
                  {singleData?.sizes.map((item, indx) => (
                    <SelectItem key={indx} value={item}>
                      {item}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="flex mt-7 gap-2 sm:gap-4 justify-between">
              <div className="border flex items-center text-lg justify-between gap-3">
                <Button
                  className="h-full rounded-none"
                  onClick={handleDecrement}
                  disabled={quantity === 1}
                >
                  <Minus />
                </Button>

                <span className="text-gray-500">{quantity}</span>

                <Button
                  className="h-full rounded-none"
                  onClick={handleIncrement}
                >
                  <Plus />
                </Button>
              </div>

              <div
                onClick={() => handleWishlist(singleData?.id)}
                className={`border cursor-pointer px-2 sm:px-5 flex items-center ${
                  wishlist.includes(singleData?.id)
                    ? "bg-[#1867d6] text-white"
                    : "bg-gray-200"
                } justify-center`}
              >
                <Heart className="md:h-8 md:w-8" />
              </div>
              <div className="w-full ">
                <Button onClick={() => handleAddtoCart()} size={"lg"} className=" w-full ">
                  Add to Cart
                </Button>
              </div>
            </div>

            <div className="mt-7 space-y-2">
              <p className="text-xs md:text-sm">
                Category :{" "}
                <span className="text-gray-500">{singleData?.category}</span>
              </p>

              <p className="text-xs md:text-sm">
                Featured : <span className="text-gray-500">Beer, Foamer</span>
                {singleData?.featured?.map((single, indx) => (
                  <span key={indx} className="text-gray-500">
                    {single},{" "}
                  </span>
                ))}
              </p>

              <p className="text-xs md:text-sm">
                SKU : <span className="text-gray-500">Ke-91039</span>
              </p>
            </div>

            <div>
              <div className="text-xs flex text-red-500 gap-2 items-center  font-semibold mt-5 mb-3 md:text-sm">
                <Flag />
                <span className=" cursor-pointer "> Report This Item</span>
              </div>

              <div className="flex gap-2 items-center">
                <p className="text-xs md:text-sm">Share This</p>
                <div className="flex gap-2">
                  <Image
                    src={facebook}
                    alt="facebook icon"
                    width={25}
                    height={25}
                    quality={100}
                    className="cursor-pointer"
                  />
                  <Image
                    src={pinterest}
                    alt="pinterest icon"
                    width={25}
                    height={25}
                    quality={100}
                    className="cursor-pointer"
                  />
                  <Image
                    src={twitter}
                    alt="twitter icon"
                    width={25}
                    height={25}
                    quality={100}
                    className="cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductInfo;
