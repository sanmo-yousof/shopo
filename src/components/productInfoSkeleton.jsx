"use client";



const ProductInfoSkeleton = () => {
  return (
    <div className="mx-4 flex flex-col my-8 gap-12 lg:flex-row animate-pulse">
      {/* Left side - Image + thumbnails */}
      <div className="w-full lg:w-1/2">
        {/* Main image skeleton */}
        <div className="border rounded-md p-4 sm:p-8 lg:p-10 w-full h-60 sm:h-72 md:h-80 lg:h-[400px] flex items-center justify-center">
          <div className="w-full h-full bg-gray-200 rounded-md" />
        </div>

        {/* Thumbnails */}
        <div className="lg:mt-4 mt-2 flex-wrap lg:gap-4 gap-2 flex">
          {[1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-16 h-16 sm:w-24 sm:h-24 md:p-4 p-2 bg-gray-200 rounded-md"
            />
          ))}
        </div>
      </div>

      {/* Right side - Info */}
      <div className="w-full lg:w-1/2 space-y-4">
        <div className="h-4 w-24 bg-gray-200 rounded" /> {/* category */}
        <div className="h-6 w-2/3 bg-gray-200 rounded" /> {/* name */}

        <div className="flex items-center gap-2">
          <div className="h-4 w-24 bg-gray-200 rounded" /> {/* rating */}
          <div className="h-4 w-12 bg-gray-200 rounded" /> {/* reviews */}
        </div>

        <div className="flex items-center gap-4">
          <div className="h-4 w-16 bg-gray-200 rounded" /> {/* original price */}
          <div className="h-5 w-20 bg-gray-200 rounded" /> {/* price */}
        </div>

        <div className="h-20 w-full bg-gray-200 rounded" /> {/* description */}

        {/* Color */}
        <div className="mt-7">
          <div className="h-4 w-16 bg-gray-200 rounded mb-3" />
          <div className="flex gap-4">
            {[1, 2, 3].map((c) => (
              <div
                key={c}
                className="h-7 w-7 rounded-full bg-gray-200"
              />
            ))}
          </div>
        </div>

        {/* Size */}
        <div className="mt-7">
          <div className="h-4 w-16 bg-gray-200 rounded mb-3" />
          <div className="h-10 w-full max-w-[400px] bg-gray-200 rounded" />
        </div>

        {/* Quantity + Wishlist + Cart */}
        <div className="flex mt-7 gap-2 sm:gap-4 justify-between">
          <div className="w-28 h-10 bg-gray-200 rounded" /> {/* qty buttons */}
          <div className="w-12 h-10 bg-gray-200 rounded" /> {/* heart */}
          <div className="flex-1 h-10 bg-gray-200 rounded" /> {/* add to cart */}
        </div>

        {/* Extra info */}
        <div className="space-y-2">
          <div className="h-4 w-40 bg-gray-200 rounded" />
          <div className="h-4 w-32 bg-gray-200 rounded" />
          <div className="h-4 w-24 bg-gray-200 rounded" />
        </div>

        {/* Report & Share */}
        <div className="mt-5 space-y-3">
          <div className="h-4 w-32 bg-gray-200 rounded" />
          <div className="flex gap-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-6 w-6 bg-gray-200 rounded" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfoSkeleton;
