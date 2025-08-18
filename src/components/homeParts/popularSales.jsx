import { Products } from "@/utils/utils";
import ProductCard from "../productCard";
import { ArrowRight } from "lucide-react";

const PopularSales = () => {
return(
  <section className="mt-8 lg:mt-16">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <h2 className="sectionHeading">Popular Sales</h2>
            <div>
              <a className="flex text-base" href="#">
                View More <ArrowRight />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-4 lg:gap-7 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Products?.sort((a, b) => b.rating - a.rating)
              ?.slice(0, 4)
              ?.map((product, indx) => {
                return <ProductCard product={product} key={indx} />;
              })}
          </div>
        </div>
      </section>
)
}
export default PopularSales