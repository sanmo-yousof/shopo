"use client"


import ProductCardSecond from "../productCardSecond";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import useAllProducts from "@/hook/useAllProduct";
import ProductCard2Skeletion from "../productCard2skeleton";

const TopSelling = () => {
  const [data,loading] = useAllProducts();
  return(
    <section className="mt-8 lg:mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <h2 className="sectionHeading">Top Selling Product</h2>
            <div>
              <Link className="flex text-base" href="/shop">
                View More <ArrowRight />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-4 lg:gap-7 gap-5  md:grid-cols-2 ">
              {loading
            ? Array(4)
                .fill(0)
                .map((_, i) => <ProductCard2Skeletion key={i} />)
            : data?.sort((a, b) => b.selling - a.selling)
              ?.slice(0, 4)
              ?.map((product, indx) => {
                return <ProductCardSecond product={product} key={indx} />;
              }
            )}
          </div>
        </div>
      </section>
  )
};
export default TopSelling