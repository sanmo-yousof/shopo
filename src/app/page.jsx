import HeroSlider from "@/components/heroSlider";
import { Brands } from "@/utils/utils";
import Image from "next/image";

const  Home = () =>  {
  return (
    <>
    <HeroSlider/>
    <section className=" bg-[#f8f8f8]">
      <div className="max-w-7xl py-8 lg:py-16 grid-cols-2 px-2 grid md:grid-cols-4  mx-auto gap-[2px] items-center justify-center lg:grid-cols-6">
        {Brands.map((brand,indx) => {
          return (
            <div key={indx} className="h-16 sm:h-30 lg:h-30  bg-white flex items-center justify-center">
              <Image
            src={brand}
            alt="brnad"
            />
            </div>
          )
        } )}
      </div>
    </section>
    </>
  );
}

export default Home;
