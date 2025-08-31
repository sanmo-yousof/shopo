import { Skeleton } from "./ui/skeleton";

const ProductCard1Skeletion = () => {
  return (
    <div className="">
      <div className="bg-white shadow-md overflow-hidden">
        {/* Product image */}
        <div className="w-full lg:p-12 relative sm:p-16 md:p-8 h-[300px] flex justify-center items-center bg-gray-200"></div>

        <div className="p-6 mt-5 relative">
          {/* <div className="flex items-center space-x-1 mb-4">
            <div className="h-6 w-24 bg-gray-300 rounded animate-pulse"></div>
          </div> */}

          <div className="h-4 w-3/4 bg-gray-300 rounded animate-pulse mb-3"></div>
          <div className="h-4 w-1/2 bg-gray-300 rounded animate-pulse mb-6"></div>

          {/* <div className="mt-3 flex items-center">
            <div className="h-7 w-16 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-7 w-12 bg-gray-300 rounded animate-pulse ml-2"></div>
          </div> */}

          <div className="">
            <div className="h-10 w-full bg-gray-300 rounded animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard1Skeletion;
