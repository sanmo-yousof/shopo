import { Skeleton } from "./ui/skeleton";

const ProductCard3Skeleton = () => {
  return(
    <div className="bg-white gap-2 items-center flex">
      {/* Image Skeleton */}
      <div className="p-4">
        <Skeleton className="h-[70px] w-[70px] rounded-md" />
      </div>

      {/* Details Skeleton */}
      <div className="space-y-2">
        {/* Product Name Skeleton */}
        <Skeleton className="h-4 w-[120px] rounded" />

        {/* Price Section Skeleton */}
        <div className="flex space-x-2">
          <Skeleton className="h-4 w-[40px] rounded" />
          <Skeleton className="h-4 w-[60px] rounded" />
        </div>
      </div>
    </div>
  )
};

export default ProductCard3Skeleton;