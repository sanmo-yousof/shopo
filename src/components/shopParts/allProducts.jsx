"use client";

import { useState, useEffect } from "react";
import ProductCard from "../productCard";
import useAllProducts from "@/hook/useAllProduct";
import ProductCard1Skeletion from "../productCard1skeleton";
import FilterBar from "./filterBar";
import Image from "next/image";
import emptyProduct from "@/asset/emptyImages/productNotFound.png";

const AllProducts = ({ q, category }) => {
  const [data, loading] = useAllProducts();
  const [sort, setSort] = useState("name-asc");
  const [loader, setLoader] = useState(false);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    if (!data) return;
    setLoader(true);

    const timer = setTimeout(() => {
      let filtered = [...data];

      if (q) {
        filtered = filtered.filter((item) =>
          item.name.toLowerCase().includes(q.toLowerCase())
        );
      }

      if (category) {
        filtered = filtered.filter((item) =>
          item.category.toLowerCase().includes(category.toLowerCase())
        );
      }

      switch (sort) {
        case "name-asc":
          filtered.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "name-desc":
          filtered.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "price-asc":
          filtered.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          filtered.sort((a, b) => b.price - a.price);
          break;
        default:
          break;
      }

      setSortedData(filtered);
      setLoader(false);
    }, 500);

    //  Category filter function
    return () => clearTimeout(timer);
  }, [data, sort, q, category]);

  console.log(sortedData);

  return (
    <>
      <FilterBar sort={sort} onSortChange={setSort} />

      {q ? (
        <h2 className="text-base text-center mt-6 font-semibold text-gray-500 sm:text-xl ">
          Result For "<span className="text-[#1867d6]">{q}</span>"
        </h2>
      ) : (
        ""
      )}

      <div className="mt-8">
        {loading || loader ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3">
            {Array(6)
              .fill(0)
              .map((_, i) => (
                <ProductCard1Skeletion key={i} />
              ))}
          </div>
        ) : sortedData.length === 0 ? (
          <div className="flex flex-col min-h-[60vh] items-center justify-center w-full text-sm p-3 text-gray-500">
            <Image
              src={emptyProduct}
              alt="empty"
              height={250}
              width={250}
              quality={100}
            />
            <p className="mt-4">No products found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 lg:grid-cols-3">
            {sortedData.map((product, indx) => (
              <ProductCard product={product} key={indx} />
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AllProducts;
