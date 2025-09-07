"use client";

import { useState, useEffect } from "react";
import ProductCard from "../productCard";
import useAllProducts from "@/hook/useAllProduct";
import ProductCard1Skeletion from "../productCard1skeleton";
import FilterBar from "./filterBar";

const AllProducts = ({q,category}) => {
  const [data, loading] = useAllProducts();
  const [sort, setSort] = useState("name-asc");
  const [loader, setLoader] = useState(false);

  const [sortedData, setSortedData] = useState([]);

  
  useEffect(() => {
    if (!data) return;

    setLoader(true); 
    const timer = setTimeout(() => {
      let sorted = [...data];

      switch (sort) {
        case "name-asc":
          sorted.sort((a, b) => a.name.localeCompare(b.name));
          break;
        case "name-desc":
          sorted.sort((a, b) => b.name.localeCompare(a.name));
          break;
        case "price-asc":
          sorted.sort((a, b) => a.price - b.price);
          break;
        case "price-desc":
          sorted.sort((a, b) => b.price - a.price);
          break;
        default:
          break;
      }

      setSortedData(sorted);
      setLoader(false); 
    }, 500); 

  //  Category filter function 




    return () => clearTimeout(timer);



  }, [data, sort]);

  return (
    <>
      <FilterBar sort={sort} onSortChange={setSort} />
      <div className="grid grid-cols-1 mt-8 sm:grid-cols-2 gap-8 lg:grid-cols-3">
        {loading || loader
          ? Array(6)
              .fill(0)
              .map((_, i) => <ProductCard1Skeletion key={i} />)
          : sortedData.map((product, indx) => (
              <ProductCard product={product} key={indx} />
            ))}
      </div>
    </>
  );
};

export default AllProducts;
