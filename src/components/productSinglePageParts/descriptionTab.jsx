"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import useSingleProduct from "@/hook/useSingleProduct";
import { Seller } from "@/utils/utils";

const DescriptionTabs = () => {
  const [isActive, setIsActive] = useState(1);
  const { data, review } = useSingleProduct();
  const [reviewStar,setReviewStar] = useState(0)

  const tabs = [
    { id: 1, label: "Description" },
    { id: 2, label: "Reviews" },
    { id: 3, label: "Seller Info" },
  ];

  return (
    <div className="bg-gray-100 py-6 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center gap-2 sm:gap-5">
          {tabs.map((tab) => (
            <li
              key={tab.id}
              onClick={() => setIsActive(tab.id)}
              className={`${
                isActive === tab.id && "!border-[#3B9DF8] !text-black"
              } border-b border-transparent cursor-pointer px-2 lg:px-6 py-2 text-sm md:text-lg text-gray-500 transition`}
            >
              {tab.label}
            </li>
          ))}
        </ul>

        <div className="md:py-12 py-6 text-sm md:text-base text-gray-500">
          {isActive === 1 && (
            <div>
              <h3 className="font-semibold text-lg text-black mb-2">Introduction</h3>
              <p>{data?.fullDescription || "No description available."}</p>

              <h3 className="font-semibold text-lg text-black mt-6 mb-2">Features:</h3>
              <ul className="list-disc ml-6 space-y-1">
                {data?.featured?.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
          )}

          {isActive === 2 && (
            <div>
              <h3 className="font-semibold text-lg text-black mb-2">Reviews</h3>
              <div className="space-y-3">
                {review.map((rev, i) => (
                  <div key={i} className="bg-white sm:p-10 p-4">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <Image
                          src={rev.img}
                          width={40}
                          height={40}
                          alt="avatar"
                          className="rounded-full w-6 sm:w-10"
                        />
                        <div>
                          <h4 className="text-black text-xs md:text-base">{rev.name}</h4>
                          <p className="text-[10px] md:text-xs">{rev.country}</p>
                        </div>
                      </div>
                      <div>
                        {[...Array(Math.floor(rev.rating))].map((_, j) => (
                          <span key={j} className="text-yellow-500 sm:text-xl text-xs">★</span>
                        ))}
                        <span className="text-xs sm:text-sm">({rev.rating})</span>
                      </div>
                    </div>
                    <p className="mt-4">{rev.desc}</p>
                  </div>
                ))}
              </div>

              <div className="flex justify-center my-6 lg:my-16">
                <Button variant="blackBg" size="sm">Load More</Button>
              </div>

              <form className="mt-6 space-y-4">
                <h2 className="sectionHeading">Write Your Review</h2>
                <div className="space-x-2">
                  {[...Array(Math.floor(5))].map((_, j) => (
                          <span onClick={() => setReviewStar(j)} key={j} className={`text-gray-500 sm:text-3xl cursor-pointer ${reviewStar >= j && "text-yellow-400"} text-2xl`}>★</span>
                        ))}
                </div>
                <div className="flex flex-col sm:flex-row sm:gap-3">
                  {["Name", "Email", "Phone Number"].map((label, i) => (
                    <div key={i} className="flex flex-col w-full sm:w-1/3">
                      <label className="text-xs sm:text-sm mb-1">{label} *</label>
                      <input className="border bg-white p-2 md:p-3 lg:p-4 text-xs sm:text-sm outline-0" />
                    </div>
                  ))}
                </div>

                <div className="flex flex-col mt-4">
                  <label className="text-xs sm:text-sm mb-1">Message *</label>
                  <textarea rows={5} className="border bg-white p-2 md:p-3 lg:p-4 outline-0" />
                </div>

                <div className="mt-6 flex justify-end">
                  <input type="submit" value="Submit Review" className="bg-black text-white px-5 py-3 cursor-pointer" />
                </div>
              </form>
            </div>
          )}

          {isActive === 3 && (
            <div className="flex flex-col sm:flex-row sm:gap-6 md:gap-12">
              <div className="flex items-center gap-4">
                <Image
                  src={Seller.img}
                  width={40}
                  height={40}
                  alt="seller"
                  className="rounded-full w-14 lg:w-20"
                />
                <div>
                  <h4 className="text-black text-sm md:text-base">{Seller.name}</h4>
                  <p className="text-xs md:text-sm">{Seller.country}</p>
                  {[...Array(Math.floor(Seller.rating))].map((_, i) => (
                    <span key={i} className="text-yellow-500 sm:text-xl text-xs">★</span>
                  ))}
                  <span className="text-xs sm:text-sm">({Seller.rating})</span>
                </div>
              </div>

              <div className="space-y-1 mt-4 sm:mt-0">
                <p><span className="text-black">Product:</span> {Seller.product}</p>
                <p>
                  <span className="text-black">Category:</span>{" "}
                  {Seller.category.map((cat, i) => (
                    <span key={i} className="text-gray-500 mr-2">{cat}</span>
                  ))}
                </p>
                <p>
                  <span className="text-black">Tags:</span>{" "}
                  {Seller.tags.map((tag, i) => (
                    <span key={i} className="text-gray-500 mr-2">{tag}</span>
                  ))}
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default DescriptionTabs;
