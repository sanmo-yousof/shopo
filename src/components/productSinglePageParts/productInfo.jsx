"use client"

import Image from "next/image";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { useState } from "react";
import { Flag, Heart } from "lucide-react";
import { Button } from "../ui/button";
import facebook from "@/asset/singleProductImages/facebook.png";
import twitter from "@/asset/singleProductImages/twitter.png";
import pinterest from "@/asset/singleProductImages/pinterest.png";
import useSingleProduct from "@/hook/useSingleProduct";

const ProductInfo = () => {
    const [color, setColour] = useState("red");
    const {data} = useSingleProduct()
  return (
    <>
      <div className="mx-4 flex flex-col my-8 gap-12 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <div>
            <Image
              src={data?.images}
              alt="product"
              width={400}
              height={400}
              quality={100}
              className="border p-8 sm:px-32 lg:p-10 w-full"
            />
          </div>
          <div className="lg:mt-4 mt-2 flex-wrap lg:gap-4 gap-2 flex">
            {data?.allimages?.map((im, indx) => {
              return (
                <Image
                  src={im}
                  key={indx}
                  alt="product"
                  width={100}
                  height={200}
                  quality={100}
                  className="border w-16 h-18 sm:w-24 sm:h-26  md:p-4 p-2"
                />
              );
            })}
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <h4 className="text-xs lg:text-sm text-gray-500 font-semibold uppercase mb-2">
            {data?.category}
          </h4>

          <h2 className="text-base sm:text-lg  md:text-xl lg:text-2xl">
            {data?.name}
          </h2>

          <div className="flex items-center mt-2 space-x-1 ">
            {[...Array(Math.floor(data?.rating))].map((_, index) => (
              <span key={index} className="text-yellow-500 text-2xl">
                ★
              </span>
            ))}{" "}
            <span className="text-xs text-gray-500 lg:text-sm">
              {data?.reviewCount} reviews
            </span>
          </div>

          <div className="mt-4 text-base">
            {data?.originalPrice && (
              <span className="line-through text-gray-400 mr-4">
                ${data?.originalPrice}
              </span>
            )}

            <span className="text-red-600 text-xl font-semibold">
              ${data?.price}
            </span>
          </div>

          <p className="text-xs mt-6 lg:text-base text-gray-600 md:text-sm">
            {data?.description}
          </p>

          <div className="mt-7">
            <h2 className="text-sm font-normal">COLOR</h2>
            <div className="flex gap-4 mt-4">
              {["red", "green", "blue"].map((c) => (
                <div
                  key={c}
                  onClick={() => setColour(c)}
                  className={`h-7 w-7 rounded-full cursor-pointer bg-${c}-500 ${
                    color === c ? `ring-2 ring-${c}-500` : ""
                  }`}
                ></div>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <h2 className="text-sm font-normal">SIZE</h2>
            <Select>
              <SelectTrigger className="md:py-6 py-5 mt-2 rounded-none max-w-[400px] w-full border shadow-none text-xs outline-none focus:outline-none focus:ring-0">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="small">Small</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="large">Large</SelectItem>
                <SelectItem value="extra large">Extra Large</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex mt-7 gap-2 sm:gap-4 justify-between">
            <div className="border px-2 sm:px-8 flex items-center text-lg justify-center gap-3">
              <span className="cursor-pointer  text-gray-500">-</span>
              <span>17</span>
              <span className="cursor-pointer text-gray-500">+</span>
            </div>
            <div className="border px-2 sm:px-5 flex items-center justify-center">
              <Heart className="text-gray-500 md:h-9 md:w-9" />
            </div>
            <div className="w-full">
              <Button variant={"blackBg"} size={"lg"} className=" w-full ">
                Add to Cart
              </Button>
            </div>
          </div>

          <div className="mt-7 space-y-2">
            <p className="text-sm md:text-base">
              Category : <span className="text-gray-500">{data?.category}</span>
            </p>

            <p className="text-sm md:text-base">
              Tags : <span className="text-gray-500">Beer, Foamer</span>
            </p>

            <p className="text-sm md:text-base">
              SKU : <span className="text-gray-500">Ke-91039</span>
            </p>
          </div>

          <div>
            <div className="text-sm flex text-red-500 gap-2 items-center  font-semibold mt-5 mb-3 md:text-base">
              <Flag />
              <span className=" cursor-pointer "> Report This Item</span>
            </div>

            <div className="flex gap-2 items-center">
              <p className="text-sm md:text-base">Share This</p>
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
    </>
  );
};

export default ProductInfo;
