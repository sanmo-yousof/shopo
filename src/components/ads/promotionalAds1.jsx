import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const PromotionalAds1 = () => {
  return (
    <div
      className="max-w-7xl mx-auto bg-cover mt-8 bg-gray-200   lg:mt-16 h-[150px] flex justify-center  items-center md:h-[200px] w-full lg:h-[250px] bg-no-repeat bg-center"
      // style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div className=" mx-4 text-center  ">
        <h4 className="text-xs md:text-sm">HEADPHONE</h4>
        <h2 className="lg:text-2xl my-2 text-center font-bold md:text-xl  text-lg">
          Get the best deal for Headphones
        </h2>

        <Button>
          Shop Now <ArrowRight />
        </Button>
      </div>
    </div>
  );
};
export default PromotionalAds1;
