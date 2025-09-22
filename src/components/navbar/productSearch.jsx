"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import emptyProduct from "@/asset/emptyImages/productNotFound.png";

const ProductSearch = () => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [loading, setLoading] = useState();
  const router = useRouter();

  useEffect(() => {
    fetch("/allproduct.json")
      .then((res) => res.json())
      .then((result) => setData(result));
  }, []);

  useEffect(() => {
    if (!query.trim()) {
      setFilteredData([]);
      setLoading(false);
      return;
    }

    setLoading(true);
    const timer = setTimeout(() => {
      let filtered = data;

      // filter by query
      filtered = filtered.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      );

      // filter by category only if selected
      if (category) {
        filtered = filtered.filter(
          (p) => p.category.toLowerCase() === category.toLowerCase()
        );
      }

      setFilteredData(filtered);
      setLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query, data, category]);

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (query) params.set("q", query);
    if (category) params.set("category", category);

    router.push(`/shop?${params.toString()}`);
  };

  return (
    <div className="relative">
      <div className="border rounded-md justify-between gap-2 items-center overflow-hidden w-[500px] hidden lg:flex">
        {/* Search input */}
        <div className="text-sm  w-[250px]">
          <input
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowDropdown(true);
            }}
            J
            onFocus={() => setShowDropdown(true)}
            onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
            placeholder="Search Product...."
            className="outline-0 w-full border-r pl-3 py-3"
          />
          {/* Suggestion dropdown */}
        </div>

        {/* Category dropdown */}
        <div>
          <Select onValueChange={(val) => setCategory(val)}>
            <SelectTrigger className="py-0 rounded-none w-[150px] border-none shadow-none text-sm outline-none focus:outline-none focus:ring-0">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Electronics">Electronics</SelectItem>
              <SelectItem value="Gaming">Gaming</SelectItem>
              <SelectItem value="Computers">Computers</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Search button */}
        <div>
          <Button
            onClick={handleSearch}
            className={"rounded-none h-full md:py-3 w-full"}
          >
            Search
          </Button>
        </div>
      </div>

      {showDropdown && (
        <div className="absolute w-[90%] mt-1 z-50">
          {loading ? (
            <div className="bg-white py-8 border rounded-md shadow-lg p-3 text-center text-gray-500">
              Searching...
            </div>
          ) : filteredData.length > 0 ? (
            <ul className="bg-white space-y-2 p-3 rounded-md shadow-lg max-h-60 overflow-y-auto">
              {filteredData.map((p) => {
                const regex = new RegExp(`(${query})`, "gi");
                const parts = p.name.split(regex);
                return (
                  <li
                    key={p.id}
                    className="hover:bg-gray-100 rounded-md border p-2"
                  >
                    <Link href={`/shop/${p.id}`}>
                      <div className="flex gap-2 items-center">
                        <Image
                          src={p.images}
                          alt="product"
                          width={40}
                          height={40}
                          className="rounded-md"
                        />
                        <div>
                          <p className="text-xs text-gray-500">
                            {parts.map((part, index) =>
                              part.toLowerCase() === query.toLowerCase() ? (
                                <span
                                  key={index}
                                  className="text-primary font-semibold"
                                >
                                  {part}
                                </span>
                              ) : (
                                <span key={index}>{part}</span>
                              )
                            )}
                          </p>
                          <span className="text-sm text-red-500">
                            {p.price}
                          </span>
                        </div>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ul>
          ) : query ? (
            <div className="bg-white border text-sm rounded-md shadow-lg p-3 text-center text-gray-500">
              <div className="flex justify-center items-center">
                <Image
                  src={emptyProduct}
                  alt="empty"
                  height={250}
                  width={250}
                  quality={100}
                  className=""
                />
              </div>
              No products found.
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
};

export default ProductSearch;
