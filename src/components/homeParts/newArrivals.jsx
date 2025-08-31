"use client";

import { Products } from "@/utils/utils";
import { ArrowRight } from "lucide-react";
import ProductCard from "../productCard";
import Link from "next/link";
import useAllProducts from "@/hook/useAllProduct";
import ProductCard1Skeletion from "../productCard1skeleton";
const NewArrivals = () => {
  const [data, loading] = useAllProducts();
  

  const newarrivals = Products.filter(
    (product) => product?.section === "new arrivals"
  );

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-[#1d1d1d] flex items-center justify-between  font-semibold">
          <h2
            className="sectionHeading
            "
          >
            New Arrivals
          </h2>
          <div>
            <Link className="flex text-base" href="/shop">
              View More <ArrowRight />
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 mt-4 lg:gap-7 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {loading
            ? Array(6)
                .fill(0)
                .map((_, i) => <ProductCard1Skeletion key={i} />)
            : data?.map((product, indx) => (
                <ProductCard product={product} key={indx} />
              ))}
        </div>
      </div>
    </section>
  );
};

export default NewArrivals;
