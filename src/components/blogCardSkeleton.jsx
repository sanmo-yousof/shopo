
import { Skeleton } from "./ui/skeleton";

const BlogSkeleton = () => {
  return (
    <div className="group hover:shadow-lg border rounded-md transition-all duration-300 overflow-hidden">
      {/* Image Skeleton */}
      <div className="relative overflow-hidden">
        <Skeleton className="w-full h-48" />
        <div className="absolute top-3 left-3">
          <Skeleton className="w-16 h-6 rounded" />
        </div>
      </div>

      <div className="p-4">
        {/* Category */}
        <div className="text-center my-4 flex items-center justify-center gap-2 text-sm">
          <Skeleton className="w-20 h-6 rounded" />
        </div>

        {/* Title */}
        <div className="md:text-xl text-center sm:text-lg text-sm lg:mb-4 mb-2 leading-tight">
          <Skeleton className="w-3/4 h-6 mx-auto" />
        </div>

        {/* Meta Info */}
        <div className="flex justify-center gap-3 mb-3">
          <div className="text-xs gap-2 text-gray-500 flex items-center">
            <Skeleton className="w-16 h-4" />
            <Skeleton className="w-5 h-5 rounded-full" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="w-5 h-5 rounded" />
            <Skeleton className="w-5 h-5 rounded" />
          </div>
        </div>

        {/* Description */}
        <div className="pt-0 text-center">
          <div className="text-xs leading-relaxed mb-4">
            <Skeleton className="w-full h-4 mb-2" />
            <Skeleton className="w-5/6 h-4 mx-auto" />
          </div>

          {/* Button */}
          <Skeleton className="w-24 h-9 mx-auto rounded" />
        </div>
      </div>
    </div>
  );
};
export default BlogSkeleton;
