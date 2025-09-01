const WishlistSkeleton = ({ rows = 3 }) => {
  return (
  <tbody>
          {[...Array(rows)].map((_, indx) => (
            <tr key={indx} className="text-gray-500 text-sm sm:text-base animate-pulse">
              <td className="p-3 border-b">
                <div className="flex items-center gap-2">
                  <div className="w-20 h-20 bg-gray-200 rounded-md" />
                  <div className="h-4 w-[150px] bg-gray-200 rounded" />
                </div>
              </td>
              <td className="p-3 border-b">
                <div className="h-5 w-5 bg-gray-200 rounded-full border" />
              </td>
              <td className="p-3 border-b">
                <div className="h-4 w-10 bg-gray-200 rounded" />
              </td>
              <td className="p-3 border-b">
                <div className="h-4 w-14 bg-gray-200 rounded" />
              </td>
              <td className="p-3 border-b">
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 bg-gray-200 rounded" />
                  <div className="h-4 w-6 bg-gray-200 rounded" />
                  <div className="h-6 w-6 bg-gray-200 rounded" />
                </div>
              </td>
              <td className="p-3 border-b">
                <div className="h-4 w-14 bg-gray-200 rounded" />
              </td>
              <td className="p-3 border-b">
                <div className="h-6 w-6 bg-gray-200 rounded" />
              </td>
            </tr>
          ))}
        </tbody>
      
  );
};

export default WishlistSkeleton;
