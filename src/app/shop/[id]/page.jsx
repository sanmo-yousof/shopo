"use client"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Products } from "@/utils/utils";
import Image from "next/image";
import { useParams } from "next/navigation";

const SinglePage = () => {
  const {id} = useParams();
  const data = Products.find(single => single.id === Number(id));
  console.log(data);
  return (
    <div className="max-w-7xl mx-auto">
      <div className="mx-4 flex flex-col my-8 gap-12 lg:flex-row">
        <div className="w-full lg:w-1/2">
          <div>
            <Image
            src={data?.images}
            alt="product"
            width={400}
            height={400}
            quality={100}
            className="border p-8 sm:px-32 lg:p-10 w-full"
            />
          </div>
        </div>
        <div className="w-full lg:w-1/2">

        <h4 className="text-xs lg:text-sm text-gray-500 font-semibold uppercase mb-2">{data?.category}</h4>

        <h2 className="text-base sm:text-lg  md:text-xl lg:text-2xl">{data?.name}</h2>

        <div className="flex items-center mt-2 space-x-1 ">
          {[...Array(Math.floor(data?.rating))].map((_, index) => (
            <span key={index} className="text-yellow-500 text-2xl">
              ★
            </span> 
          ))} <span className="text-xs text-gray-500 lg:text-sm">
            {data?.reviewCount} reviews
          </span>
        </div>

        <div className="mt-4 text-base">
          {data?.originalPrice && (
            <span className="line-through text-gray-400 mr-4">
              ${data?.originalPrice}
            </span>
          )}

          <span className="text-red-600 text-xl font-semibold">${data?.price}</span>
        </div>

        <p className="text-xs mt-6 lg:text-base text-gray-600 md:text-sm">{data?.description}</p>

        <div className="mt-7">
          <h2 className="text-sm font-normal ">COLOR</h2>
        </div>

        <div className="mt-7">
          <h2 className="text-sm font-normal">SIZE</h2>
          <Select>
                <SelectTrigger className="py-6 mt-2 rounded-none max-w-[400px] w-full border shadow-none text-xs outline-none focus:outline-none focus:ring-0">
                  <SelectValue placeholder="Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Small</SelectItem>
                  <SelectItem value="dark">Medium</SelectItem>
                  <SelectItem value="system">Large</SelectItem>
                  <SelectItem value="system">Extra Large</SelectItem>
                </SelectContent>
              </Select>
        </div>

        </div>

      </div>
    </div>
  );
};
export default SinglePage;
