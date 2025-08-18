import Image from "next/image";
import { Button } from "../ui/button";
import mobile from "@/asset/homeImages/phone.png";
import Link from "next/link";
import playstore from '@/asset/homeImages/playstore.png'
import applestore from '@/asset/homeImages/applestore.png'
import campaign from "@/asset/homeImages/campaign-1.jpg"
import campaign2 from "@/asset/homeImages/campaign-2.jpg"

const FlashSale = () => {
  return (
    <section className="mt-8 lg:mt-16">
      <div className="flex max-w-7xl mx-auto gap-8 px-4 flex-col lg:flex-row">
        <div className="border p-8 lg:p-12 w-full lg:w-1/2 flex flex-col justify-center"
        style={{ backgroundImage: `url(${campaign.src})` }}>
          {/* Countdown Timer */}
          <div className="grid grid-cols-4  gap-4 mb-8">
            {["Days", "Hours", "Minutes", "Seconds"].map((label, idx) => {
              const colors = [
                "text-red-500",
                "text-blue-500",
                "text-green-500",
                "text-pink-500",
              ];
              return (
                <div key={label} className="text-center">
                  <div
                    className={`text-4xl lg:text-5xl font-bold ${colors[idx]} mb-2`}
                  >
                    00
                  </div>
                  <div className="text-sm font-medium text-gray-700">
                    {label}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Flash Sale Title */}
          <h1 className="text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            WOO! Flash Sale
          </h1>

          {/* Shop Now Button */}
          <Button className="w-fit bg-black hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-medium flex items-center gap-2 mb-8">
            Shop Now
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Button>
        </div>

        {/* Right Section - Mobile App */}
        <div className="border w-full lg:w-1/2  p-8 lg:p-12 flex flex-col justify-center"
        style={{ backgroundImage: `url(${campaign2.src})` }}>
          {/* Mobile App Version Label */}
          <div className="text-xs sm:text-sm font-semibold text-gray-600 mb-4 tracking-wide">
            MOBILE APP VERSION
          </div>

          {/* Title */}
          <h2 className="text-2xl lg:text-3xl font-medium text-gray-900 mb-2">
            Get Our <span className="text-red-500">Mobile App</span>
          </h2>
          <p className="text-2xl lg:text-3xl font-medium text-gray-900 mb-8">
            It makes easy for your life
          </p>

          {/* Download Buttons */}
          <div className="flex flex-row gap-4 mb-8">
            <Link href="/product/123">
              <Image
                src={playstore}
                alt="Product"
                quality={100}
                width={150}
                height={150}
                className="cursor-pointer"
              />
            </Link>
            <Link href="/product/123">
              <Image
                src={applestore}
                alt="Product"
                quality={100}
                width={150}
                height={150}
                className="cursor-pointer"
              />
            </Link>
          </div>
          <div>
            <Image src={mobile} alt="mobile" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FlashSale;
