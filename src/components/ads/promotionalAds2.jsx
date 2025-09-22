import { ArrowRight } from "lucide-react";
import Link from "next/link";

const PromotionalAds2 = () => {
  return (
    <div
      className="bg-cover relative mt-8 bg-gray-200 lg:mt-16 h-[300px] bg-no-repeat bg-center"
      // style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div className="pl-6">
        <h4 className="text-base font-semibold pt-8">HEADSET</h4>
        <h2 className="text-2xl mt-4 font-bold">Beat Wireless Headphone</h2>
      </div>
      <div className="absolute bottom-8 left-6">
        <Link href={"#"} className="text-primary underline text-sm">
          Shop Now <ArrowRight className="inline h-5 w-5" />
        </Link>
      </div>
    </div>
  );
};
export default PromotionalAds2;
