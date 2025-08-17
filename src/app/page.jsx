import HeroSlider from "@/components/heroSlider";
import ProductCard from "@/components/productCard";
import { Brands, Products } from "@/utils/utils";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

const Home = () => {
  return (
    <>
      <HeroSlider />
      <section className=" bg-[#f7f7f7]">
        <div className="max-w-7xl py-8 lg:py-16 grid-cols-2 px-2 grid sm:grid-cols-4  mx-auto gap-[2px] items-center justify-center lg:grid-cols-6">
          {Brands.map((brand, indx) => {
            return (
              <div
                key={indx}
                className="h-30 lg:h-34  bg-white flex items-center justify-center"
              >
                <Image src={brand}  alt="brnad" />
              </div>
            );
          })}
        </div>
      </section>

      <section className="bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-[#1d1d1d] flex items-center justify-between  font-semibold">
            <h2 className="text-xl sm:text-3xl ">New Arrivals</h2>
            <div>
              <a className="flex text-base" href="#">
                View More <ArrowRight />
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 mt-4 lg:gap-7 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {Products?.map((product, indx) => {
              return (
                // <div key={product.id}>
                //   <div>
                //     <Image
                //     src={product.image}
                //     width={200}
                //     height={200}
                //     />
                //   </div>
                // </div>
                <ProductCard product={product} key={indx} />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
