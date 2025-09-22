import { FooterData } from "@/utils/utils";
import { Facebook, Instagram, Youtube } from "lucide-react";
import Image from "next/image";
import payment from "@/asset/footerImages/paymentgetways.png";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#ffffff]">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex lg:py-14 py-8 items-center justify-center">
          <Image src="/logo-3.svg" alt="logo" width={150} height={50} />
        </div>

        <hr />

        <div className=" flex flex-col gap-6 lg:py-14 py-8 lg:flex-row lg:gap-12">
          {/* Static About Section */}
          <div className="w-full lg:w-[420px]">
            <h3 className="text-base font-semibold mb-4">About Us</h3>
            <p className="sm:text-sm text-xs w-full sm:w-1/2 lg:w-[80%] text-gray-500 leading-relaxed">
              We know there are a lot of threa developers our but we pride into
              a firm in the industry.
            </p>
          </div>

          {/* Dynamic Footer Sections */}
          <div className="flex-1 grid grid-cols-1 gap-6  lg:grid-cols-3 lg:gap-12">
            {FooterData?.map((section, idx) => (
              <div key={idx}>
                <h3 className="text-base font-semibold mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link, i) => (
                    <li
                      key={i}
                      className="text-sm text-gray-500 hover:text-primary transition-colors duration-200 cursor-pointer"
                    >
                      <Link href={section.href[i]}>{link}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <hr className="pb-6 lg:pb-8" />
        <div className="pb-6 flex lg:justify-between lg:flex-row justify-center items-center flex-col lg:pb-8">
          <div className="flex items-center justify-between lg:justify-start gap-3">
            <div className="flex gap-1">
              <Instagram className="h-5 w-5 cursor-pointer hover:text-black text-gray-500" />
              <Facebook className="h-5 w-5 cursor-pointer hover:text-black text-gray-500" />
              <Youtube className="h-5 w-5 cursor-pointer hover:text-black text-gray-500" />
            </div>
            <p className="sm:text-sm  text-gray-500 text-[11px] ">
              ©2025{" "}
              <span className="font-semibold text-gray-800">Quomodosoft</span>{" "}
              All rights reserved
            </p>
          </div>

          <div className=" mt-4  lg:mt-0">
            <Link href={"#"}>
              <Image src={payment} alt="pyment" quality={100} />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
