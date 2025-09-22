import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";
import add1 from "@/asset/addImages/add1.jpg";

const PromotionalAds1 = () => {
  return (
    <div
      className="relative max-w-7xl mx-auto mt-8 lg:mt-16 h-[150px] md:h-[200px] lg:h-[250px] w-full bg-no-repeat bg-center bg-cover flex justify-center items-center"
      style={{ backgroundImage: `url(${add1.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative mx-4 text-center text-white">
        <h4 className="text-xs md:text-sm">HEADPHONE</h4>
        <h2 className="lg:text-2xl my-2 text-center font-bold md:text-xl text-lg">
          Get the best deal for Headphones
        </h2>

        <Button className="mt-2">
          Shop Now <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default PromotionalAds1;
