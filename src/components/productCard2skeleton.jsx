import { Skeleton } from "@/components/ui/skeleton";

const ProductCard2Skeletion = () => {
  return(
    <div className="bg-white group shadow-xs items-center flex relative overflow-hidden">
      {/* Image Skeleton */}
      <div className="w-1/3 bg-white p-4 flex items-center justify-center">
        <Skeleton className="h-[120px] w-[120px] rounded-md" />
      </div>

      {/* Details Skeleton */}
      <div className="w-2/3 px-2 py-4 relative space-y-3">
        {/* Rating Skeleton */}
        <div className="flex space-x-1">
          {[...Array(5)].map((_, index) => (
            <Skeleton key={index} className="h-5 w-5 rounded-full" />
          ))}
        </div>

        {/* Product Name Skeleton */}
        <Skeleton className="h-4 w-3/4 rounded" />
        <Skeleton className="h-4 w-1/2 rounded" />

        {/* Price Skeleton */}
        <div className="flex space-x-2 mt-3">
          <Skeleton className="h-4 w-12 rounded" />
          <Skeleton className="h-4 w-16 rounded" />
        </div>

        {/* Button Skeleton */}
        <Skeleton className="h-10 w-[120px] mt-4 rounded" />
      </div>

      {/* Action Icons Skeleton */}
      <div className="absolute flex flex-col space-y-3 right-5">
        <Skeleton className="h-8 w-8 rounded-md" />
        <Skeleton className="h-8 w-8 rounded-md" />
        <Skeleton className="h-8 w-8 rounded-md" />
      </div>
    </div>
  )
};

export default ProductCard2Skeletion;