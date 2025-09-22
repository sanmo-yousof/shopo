import banner from "@/asset/homeImages/features-banner.jpg";
import { Button } from "../ui/button";
const Discount = () => {
  return (
    <div
      className="bg-cover mt-8 lg:mt-16 w-full h-[300px] bg-no-repeat bg-center  flex items-center"
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div className="max-w-3xl mx-auto ">
        <h2 className="lg:text-4xl text-center font-bold md:text-3xl  sm:text-2xl text-xl">
          Get <span className="text-primary">20%</span> Off Discount Coupon
        </h2>
        <p className="text-sm mt-2 text-center lg:text-base">
          by Subscribe our Newsletter
        </p>
        <div className="flex px-2 mt-3">
          <input
            className="bg-white  text-xs max-w-2xl w-full lg:text-base md:text-sm  outline-0 lg:p-4 p-3"
            placeholder="Email Address"
            type="text"
          />
          <Button
            variant={"secondary"}
            className="py-5 rounded-none text-xs md:text-base md:py-7"
          >
            Get the Coupon
          </Button>
        </div>
      </div>
    </div>
  );
};
export default Discount;
