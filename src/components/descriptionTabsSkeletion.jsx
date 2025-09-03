// components/descriptionTabsSkeleton.jsx
"use client";

const DescriptionTabsSkeleton = () => {
  return (
    <div className="bg-gray-100 py-6 mt-16 animate-pulse">
      <div className="max-w-7xl mx-auto px-4">
        {/* Tabs */}
        <div className="flex gap-5">
          <div className="h-6 w-20 bg-gray-300 rounded"></div>
          <div className="h-6 w-20 bg-gray-300 rounded"></div>
          <div className="h-6 w-24 bg-gray-300 rounded"></div>
        </div>

        {/* Content */}
        <div className="md:py-12 py-6">
          <div className="h-6 w-40 bg-gray-300 mb-4 rounded"></div>
          <div className="h-4 w-full bg-gray-300 mb-2 rounded"></div>
          <div className="h-4 w-4/5 bg-gray-300 mb-2 rounded"></div>
          <div className="h-4 w-2/3 bg-gray-300 mb-2 rounded"></div>

          <div className="mt-6">
            <div className="h-6 w-32 bg-gray-300 mb-3 rounded"></div>
            <div className="space-y-2">
              <div className="h-4 w-1/2 bg-gray-300 rounded"></div>
              <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
              <div className="h-4 w-1/3 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DescriptionTabsSkeleton;
