"use client";
import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Products, Reviews } from "@/utils/utils";
import { Flag, Heart } from "lucide-react";
import Image from "next/image";
import { useParams } from "next/navigation";
import facebook from "@/asset/singleProductImages/facebook.png";
import twitter from "@/asset/singleProductImages/twitter.png";
import pinterest from "@/asset/singleProductImages/pinterest.png";
import { useState } from "react";
import RelatedProducts from "@/components/productSinglePageParts/realtedProducts";
import PromotionalAds from "@/components/homeParts/promotionalAds";
import Discount from "@/components/shopParts/discount";

const SinglePage = () => {
  const { id } = useParams();
  const data = Products.find((single) => single.id === Number(id));
  const [color, setColour] = useState("red");
  const [isActive, setIsActive] = useState(1);
  const review = Reviews.filter((rev) => rev.id === Number(id));
  const seller = {
    product: 120,
    category: ["Mobile Phone", "Sports", "Gaming", "Electronics"],
    tags: ["Beer", "Foamer"],
    name: "Ridoy Rock",
    country: "Germany",
    img: "https://randomuser.me/api/portraits/men/68.jpg",
    rating: 4.3,
  };

  return (
    <div>
      <div className="max-w-7xl mx-auto">
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
              <Image
                src={data?.images}
                alt="product"
                width={100}
                height={200}
                quality={100}
                className="border w-16 h-18 sm:w-24 sm:h-26  md:p-4 p-2"
              />
              <Image
                src={data?.images}
                alt="product"
                width={100}
                height={200}
                quality={100}
                className="border w-16 h-18 sm:w-24 sm:h-26 md:p-4 p-2"
              />
              <Image
                src={data?.images}
                alt="product"
                width={100}
                height={200}
                quality={100}
                className="border w-16 h-18 sm:w-24 sm:h-26 md:p-4 p-2"
              />
              <Image
                src={data?.images}
                alt="product"
                width={100}
                height={200}
                quality={100}
                className="border w-16 h-18 sm:w-24 sm:h-26 md:p-4 p-2"
              />
              <Image
                src={data?.images}
                alt="product"
                width={100}
                height={200}
                quality={100}
                className="border w-16 h-18 sm:w-24 sm:h-26 md:p-4 p-2"
              />
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
                <Button variant={"blackBg"} className=" w-full ">
                  Add to Cart
                </Button>
              </div>
            </div>

            <div className="mt-7 space-y-2">
              <p className="text-sm md:text-base">
                Category :{" "}
                <span className="text-gray-500">{data?.category}</span>
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
      </div>

      <div className="bg-gray-100 py-6 mt-16">
        <div className="mx-auto max-w-7xl px-4">
          <ul className="flex items-center gap-2 sm:gap-5">
            <li
              className={`${
                isActive === 1 && "!border-[#3B9DF8] !text-black"
              } lg:px-6 px-2 py-2 border-b dark:text-[#abc2d3] text-gray-500 transition duration-300 border-transparent text-sm md:text-lg cursor-pointer`}
              onClick={() => setIsActive(1)}
            >
              {" "}
              Description
            </li>
            <li
              className={`${
                isActive === 2 && "!border-[#3B9DF8] !text-black"
              } lg:px-6 px-2 py-2 text-sm md:text-lg border-b dark:text-[#abc2d3] text-gray-500 transition duration-300 border-transparent cursor-pointer`}
              onClick={() => setIsActive(2)}
            >
              {" "}
              Reviews
            </li>
            <li
              className={`${
                isActive === 3 && "!border-[#3B9DF8] !text-black"
              } lg:px-6 px-2 border-b text-sm text-gray-500 duration-300 border-transparent cursor-pointer`}
              onClick={() => setIsActive(3)}
            >
              {" "}
              Seller Info
            </li>
          </ul>

          <div className="md:py-12 py-6 text-sm md:text-base text-gray-500">
            {isActive === 1 && (
              <div className="">
                <h3 className="font-semibold text-lg  text-black mb-2">
                  Introduction
                </h3>
                <p className=" text-xs sm:text-sm md:text-base">
                  {data?.fullDescription || "No description available."}
                </p>

                <h3 className="font-semibold text-lg  text-black mt-6 mb-2">
                  Features :{" "}
                </h3>
                <ul className="list-disc text-xs sm:text-sm md:text-base space-y-1 ml-6 ">
                  {data?.featured.map((item, indx) => {
                    return (
                      <li className="" key={indx}>
                        {item}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}

            {isActive === 2 && (
              <div className="">
                <h3 className="font-semibold text-lg  text-black mb-2">
                  Reviews
                </h3>
                <div className="space-y-3">
                  {review.map((rev, indx) => {
                    return (
                      <div className="bg-white  sm:p-10 p-4 " key={indx}>
                        <div className="flex justify-between items-center">
                          <div className="flex items-center gap-3">
                            <Image
                              src={rev?.img}
                              height={40}
                              width={40}
                              quality={100}
                              alt="avter"
                              className="rounded-full w-6 sm:w-10"
                            />
                            <div>
                              <h4 className="text-black text-xs md:text-base">
                                {rev.name}
                              </h4>
                              <p className="text-[10px] md:text-xs">
                                {rev.country}
                              </p>
                            </div>
                          </div>
                          <div>
                            {[...Array(Math.floor(rev?.rating))].map(
                              (_, index) => (
                                <span
                                  key={index}
                                  className="text-yellow-500 sm:text-xl text-xs"
                                >
                                  ★
                                </span>
                              )
                            )}
                            <span className="textxs sm:text-sm">
                              ({rev.rating})
                            </span>
                          </div>
                        </div>
                        <p className=" mt-4 text-xs sm:text-sm md:text-base">
                          {rev.desc}
                        </p>
                      </div>
                    );
                  })}
                </div>
                <div className="flex items-center justify-center lg:my-16 my-6">
                  <Button variant={"blackBg"} className=''>Load More</Button>
                </div>

                <div>
                  <h2 className="sectionHeading">Write Your Reviews</h2>
                  <form className="mt-6">
                    <div className="space-y-3 flex flex-col sm:gap-3 sm:flex-row">
                      <div className="flex w-full sm:w-1/3 flex-col">
                      <label className="text-xs sm:text-sm mb-1" htmlFor="name">Name *</label>
                      <input id="name" name="name" className="outline-0 text-xs sm-text-sm border p-2 md:p-3 lg:p-4 bg-white" type="text" />
                    </div>
                    <div className="flex  w-full sm:w-1/3 flex-col">
                      <label className="text-xs sm:text-sm mb-1" htmlFor="email">Email *</label>
                      <input id="email" name="email" className="outline-0 text-xs sm-text-sm border p-2 md:p-3 lg:p-4 bg-white" type="email" />
                    </div>
                    <div className="flex w-full sm:w-1/3 flex-col">
                      <label className="text-xs sm:text-sm mb-1" htmlFor="phone">Phone Number *</label>
                      <input id="phone" name="phone" className="outline-0 text-xs sm-text-sm border p-2 md:p-3 lg:p-4 bg-white" type="text" />
                    </div>
                    </div>

                    <div className="flex w-full mt-4 flex-col">
                      <label className="text-xs sm:text-sm mb-1" htmlFor="msg">Message *</label>
                      <textarea className="bg-white outline-0 p-2 border md:p-3 lg:p-4 " rows={5} name="msg" id="msg"></textarea>
                    </div>

                    <div className="mt-6 flex justify-end">
                      <input type="submit" className="bg-black cursor-pointer text-white px-5 py-3" value={"Submit Review"} />
                    </div>
                  </form>
                </div>
              </div>
            )}

            {isActive === 3 && (
              <div className="flex flex-col sm:flex-row sm:gap-6 md:gap-12">
                
                  <div className="flex items-center gap-4">
                    <Image
                      src={seller?.img}
                      height={40}
                      width={40}
                      quality={100}
                      alt="avter"
                      className="rounded-full lg:w-20 w-14"
                    />
                    <div className="text-center sm:text-left">
                      <h4 className="text-black text-sm md:text-base">
                        {seller.name}
                      </h4>
                      <p className="text-xs md:text-sm">{seller.country}</p>
                      {[...Array(Math.floor(seller?.rating))].map(
                        (_, index) => (
                          <span
                            key={index}
                            className="text-yellow-500 sm:text-xl text-xs"
                          >
                            ★
                          </span>
                        )
                      )}
                      <span className="textxs sm:text-sm">
                        ({seller.rating})
                      </span>
                    </div>
                  </div>
                  <div></div>
                
                <div className="space-y-1 mt-4 sm:mt-0">
                  <p className=" text-xs sm:text-sm md:text-base">
                    <span className="text-black"> Product : </span>
                    {seller.product}
                  </p>
                  <p className=" text-xs sm:text-sm md:text-base">
                    <span className="text-black">Category: </span>
                    {seller.category.map((item, index) => (
                      <span key={index} className="text-gray-500 mr-2">
                        {item}
                      </span>
                    ))}
                    
                  </p>
                  <p className="  text-xs sm:text-sm md:text-base">
                    <span className="text-black">Tags: </span>
                    {seller.tags.map((item, index) => (
                      <span key={index} className="text-gray-500 mr-2">
                        {item}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* related product section  */}
        <div className="">
          <RelatedProducts category={data?.category}/>
        </div>

        {/* ads */}
        <Discount/>
    </div>
  );
};
export default SinglePage;
