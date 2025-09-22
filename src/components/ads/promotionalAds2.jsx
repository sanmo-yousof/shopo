import { ArrowRight } from "lucide-react";
import Link from "next/link";
import add2 from "@/asset/addImages/add2.jpg";

const PromotionalAds2 = () => {
  return (
    <div
      className="relative mt-8 lg:mt-16 h-[200px] lg:h-[300px] bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${add2.src})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative pl-6 text-white">
        <h4 className="text-base font-semibold pt-8">HEADSET</h4>
        <h2 className="text-2xl mt-4 font-bold">Beat Wireless Headphone</h2>
      </div>

       <div className="absolute bottom-8 left-6"> 
        <Link href={"#"} className="text-primary underline text-sm"> Shop Now <ArrowRight className="inline h-5 w-5" /> </Link> 
      </div>
    </div>
  );
};

export default PromotionalAds2;
