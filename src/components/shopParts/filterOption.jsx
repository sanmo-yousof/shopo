"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { Checkbox } from "../ui/checkbox";
import { useState } from "react";
import { Categories, FilterBrands, Size, Storage } from "@/utils/utils";
import { Plus } from "lucide-react";
import { Slider } from "../ui/slider";

const FilterSideBar = () => {
  const [store, setStore] = useState(Storage[0]);

  return (
    <div className="lg:py-6 lg:px-6 bg-white">
      {/* Categories */}
      <div className="pb-8">
        <h4 className="text-black mb-4 text-base font-semibold">
          Product Categories
        </h4>
        <div className="space-y-3 text-gray-500">
          {Categories.map((category) => (
            <div key={category} className="flex  justify-between items-center">
              <div className="flex gap-2 items-center">
                <Checkbox
                  id={category}
                  className="border-gray-500 data-[state=checked]:bg-[#1867d6]"
                />
                <label htmlFor={category} className="text-xs">
                  {category}
                </label>
              </div>
              <span>
                <Plus className="w-3 h-3 cursor-pointer"/>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="border-y py-6 ">
        <h4 className="text-black text-base mb-4 font-semibold">Price Range</h4>
        <Slider
      defaultValue={[50]}
      max={100}
      step={1}
      className={cn("w-full")}
      
    />
      </div>

      {/* Brands */}
      <div className="border-b py-6">
        <h4 className="text-black text-base font-semibold mb-4">Brands</h4>
        <div className="flex text-gray-500 flex-col space-y-3">
          {FilterBrands.map((brand) => (
            <div key={brand} className="flex gap-2 items-center">
              <Checkbox
                id={`brand-${brand}`}
                className="border-gray-500 data-[state=checked]:bg-[#1867d6]"
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
                  ? "bg-[#1867d6] text-white border-[#1867d6]"
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
        <div className="flex text-gray-500 flex-col space-y-3">
          {Size.map((s) => (
            <div key={s} className="flex gap-2 items-center">
              <Checkbox
                id={`size-${s}`}
                className="border-gray-500  data-[state=checked]:bg-[#1867d6]"
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
