"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
import { Categories, FilterBrands, Size, Storage } from "@/utils/utils";

const FilterSideBar = () => {
  const [store, setStore] = useState(Storage[0]);

  return (
    <div className="lg:py-6 lg:px-6 bg-white">
      {/* Categories */}
      <div className="pb-8">
        <h4 className="text-black mb-4 text-base font-semibold">
          Product Categories
        </h4>
        <div className="space-y-1">
          {Categories.map((category) => (
            <div key={category} className="flex justify-between items-center">
              <div className="flex gap-2 items-center">
                <Checkbox
                  id={category}
                  className="border-black data-[state=checked]:bg-[#1867d6]"
                />
                <label htmlFor={category} className="text-xs">
                  {category}
                </label>
              </div>
              <Button className="bg-white text-gray-400 text-sm p-0" size="sm">
                +
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="border-y py-6 ">
        <h4 className="text-black text-base mb-4 font-semibold">Price Range</h4>
      </div>

      {/* Brands */}
      <div className="border-b py-6">
        <h4 className="text-black text-base font-semibold mb-4">Brands</h4>
        <div className="flex flex-col space-y-5">
          {FilterBrands.map((brand) => (
            <div key={brand} className="flex gap-2 items-center">
              <Checkbox
                id={`brand-${brand}`}
                className="border-black data-[state=checked]:bg-[#1867d6]"
              />
              <label htmlFor={`brand-${brand}`} className="text-xs">
                {brand}
              </label>
            </div>
          ))}
        </div>
      </div>

      {/* Storage */}
      <div className="py-6">
        <h4 className="text-black text-base font-semibold mb-4">Storage</h4>
        <div className="flex flex-wrap gap-2 text-xs">
          {Storage?.map((stor) => (
            <Button
              key={stor}
              onClick={() => setStore(stor)}
              variant="outline"
              className={cn(
                "py-2 px-4 text-xs rounded-none",
                stor === store
                  ? "bg-blue-500 text-white border-blue-500"
                  : "bg-white"
              )}
            >
              {stor}
            </Button>
          ))}
        </div>
      </div>

      {/* Sizes */}
      <div className="border-t py-6">
        <h4 className="text-black text-base font-semibold mb-4">Size</h4>
        <div className="flex flex-col space-y-5">
          {Size.map((s) => (
            <div key={s} className="flex gap-2 items-center">
              <Checkbox
                id={`size-${s}`}
                className="border-black  data-[state=checked]:bg-[#1867d6]"
              />
              <label htmlFor={`size-${s}`} className="text-xs">
                {s}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default FilterSideBar;
