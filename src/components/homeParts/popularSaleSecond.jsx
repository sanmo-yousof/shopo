"use client"
import { Products } from "@/utils/utils";
import { ArrowRight } from "lucide-react";
import ProductCardThird from "../productCardThird";
import Link from "next/link";
import useAllProducts from "@/hook/useAllProduct";
import ProductCard3Skeleton from "../productCard3skeleton";

const PopularSaleSecond = () => {
  const [data,loading] = useAllProducts()
  return(
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
          <div className="grid grid-cols-1 gap-y-1 gap-x-8 md:grid-cols-2 mt-4 lg:grid-cols-3 ">

              {loading
            ? Array(12)
                .fill(0)
                .map((_, i) => <ProductCard3Skeleton key={i} />)
            : data
                ?.map((product, indx) => {
                return <ProductCardThird product={product} key={indx} />;
                })}
          </div>
        </div>
      </section>
  );
};
export default PopularSaleSecond;