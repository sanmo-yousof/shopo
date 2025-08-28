import { Button } from "@/components/ui/button";
import { Orders } from "@/utils/utils";
import { Eye } from "lucide-react";
import Link from "next/link";
import ProductViewModal from "./productViewModal";

const RecentOrders = () => {
  return (
    <>
      <h2 className="lg:text-2xl text-base sm:text-xl font-semibold text-gray-700">
        Recent Orders
      </h2>
      <div className="overflow-x-auto mt-3">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow table-auto">
          <thead>
            <tr className="bg-blue-100 text-left text-xs md:text-sm font-semibold text-gray-700">
              <th className="md:py-4 py-3 border-r px-4 whitespace-nowrap">
                #Order ID
              </th>
              <th className="md:py-4 py-3 border-r px-4 whitespace-nowrap">
                Date
              </th>
              <th className="md:py-4 py-3 border-r px-4 whitespace-nowrap">
                Total Amount ($)
              </th>
              <th className="md:py-4 py-3 px-4 border-r whitespace-nowrap">
                Status
              </th>
              <th className="md:py-4 py-3 px-4 whitespace-nowrap min-w-[100px]">
                View
              </th>
            </tr>
          </thead>
          <tbody>
            {Orders.map((order) => (
              <tr
                key={order.id}
                className=" text-xs md:text-sm text-gray-700 hover:bg-gray-50 transition"
              >
                <td className="md:py-4 border-r py-2 px-4 border-b whitespace-nowrap">
                  {order.order_id}
                </td>
                <td className="md:py-4 border-r py-2 px-4 border-b whitespace-nowrap">
                  {order.date}
                </td>
                <td className="md:py-4 border-r py-2 px-4 border-b whitespace-nowrap">
                  ${order.total_amount.toFixed(2)}
                </td>
                <td className="md:py-4 py-2 border-r px-4 border-b whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      order.order_status === "Completed"
                        ? "bg-green-500 text-white"
                        : "bg-yellow-500 text-white"
                    }`}
                  >
                    {order.order_status}
                  </span>
                </td>
                <td className="md:py-4 py-2 px-4 border-b whitespace-nowrap">
                 
                    <ProductViewModal/>
                 
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default RecentOrders;
