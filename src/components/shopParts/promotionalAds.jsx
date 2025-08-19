import { ArrowRight } from "lucide-react";
import Link from "next/link";

const PromotionalAds = () => {
  return(
     <div
          className="bg-cover mt-8 bg-gray-200 lg:mt-16 h-[150px] md:h-[200px] w-full lg:h-[250px] bg-no-repeat bg-center  flex items-center"
          // style={{ backgroundImage: `url(${banner.src})` }}
        >
          <div className="pl-12">
            <h2 className="lg:text-2xl text-center font-bold md:text-xl  text-base">Get the Best Deal for Headphones</h2>
            <div>
              <Link href={'#'} className="text-[#1868d5] underline text-sm">Shop Now <ArrowRight className="inline h-5 w-5"/></Link>
            </div>
            
            
          </div>
        </div>
  );
};
export default PromotionalAds;