import { Products } from "@/utils/utils";
import { ArrowRight } from "lucide-react";
import ProductCard from "../productCard";

const NewArrivals = () => {
return(
  <section className="">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-[#1d1d1d] flex items-center justify-between  font-semibold">
            <h2
              className="sectionHeading
            "
            >
              New Arrivals
            </h2>
            <div>
              <a className="flex text-base" href="#">
                View More <ArrowRight />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-4 lg:gap-7 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Products?.map((product, indx) => {
              return <ProductCard product={product} key={indx} />;
            })}
          </div>
        </div>
      </section>
)
}

export default NewArrivals;