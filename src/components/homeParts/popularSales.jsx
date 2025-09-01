"use client"

import ProductCard from "../productCard";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import useAllProducts from "@/hook/useAllProduct";
import ProductCard1Skeletion from "../productCard1skeleton";

const PopularSales = () => {
  const [data, loading] = useAllProducts();
  return (
    <section className="mt-8 lg:mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <h2 className="sectionHeading">Popular Sales</h2>
          <div>
            <Link className="flex text-base" href="/shop">
              View More <ArrowRight />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-4 lg:gap-7 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {loading
            ? Array(4)
                .fill(0)
                .map((_, i) => <ProductCard1Skeletion key={i} />)
            : data
                ?.sort((a, b) => b.rating - a.rating)
                ?.slice(0, 4)
                ?.map((product, indx) => {
                  return <ProductCard product={product} key={indx} />;
                })}
        </div>
      </div>
    </section>
  );
};
export default PopularSales;
