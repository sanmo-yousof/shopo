import { Brands } from "@/utils/utils";
import Image from "next/image";

const AllBrands = () => {
  return (
    <section className=" ">
      <div className="max-w-7xl py-8 lg:py-16 grid-cols-2 px-2 grid sm:grid-cols-4  mx-auto gap-[2px] items-center justify-center lg:grid-cols-6">
        {Brands.map((brand, indx) => {
          return (
            <div
              key={indx}
              className="h-30 lg:h-34  bg-white flex items-center justify-center"
            >
              <Image src={brand} alt="brnad" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default AllBrands;
