import { Products } from "@/utils/utils";
import ProductCardSecond from "../productCardSecond";
import { ArrowRight } from "lucide-react";

const TopSelling = () => {
  return(
    <section className="mt-8 lg:mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <h2 className="sectionHeading">Top Selling Product</h2>
            <div>
              <a className="flex text-base" href="#">
                View More <ArrowRight />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-4 lg:gap-7 gap-5  md:grid-cols-2 ">
            {Products?.sort((a, b) => b.selling - a.selling)
              ?.slice(0, 4)
              ?.map((product, indx) => {
                return <ProductCardSecond product={product} key={indx} />;
              })}
          </div>
        </div>
      </section>
  )
};
export default TopSelling