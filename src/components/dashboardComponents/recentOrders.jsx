"use client"

import { Button } from "@/components/ui/button";
import { dashboardOverviewCards, Orders } from "@/utils/utils";
import { Eye } from "lucide-react";
import Link from "next/link";
import ProductViewModal from "./productViewModal";
import useAllProducts from "@/hook/useAllProduct";
import { useEffect, useState } from "react";
import { getOrder } from "@/utils/loaclSorage";

const RecentOrders = () => {
  const[data,loading] = useAllProducts();
  const[orderData,setOrderData] = useState([]) ;
  useEffect(()=> {
      setOrderData(getOrder());
  },[]);
  console.log(orderData[0]?.items);
  return (
    <>
      <div className="grid mt-4 gap-4 mb-10 grid-cols-2 md:grid-cols-4">
        {dashboardOverviewCards.map((item, indx) => {
          const Icon = item.icon;
          return (
            <div
              className="bg-blue-100  space-y-2  rounded flex flex-col justify-center  lg:p-8 p-4 border"
              key={indx}
            >
              <div className="md:w-14 md:h-14 h-10 w-10 mx-auto rounded-full flex items-center justify-center text-white bg-[#1867d6]">
                <Icon className="w-6 h-6" />
              </div>
              <h2 className="lg:text-xl font-semibold text-center text-base text-gray-600">
                {item.value}
              </h2>
              <p className="text-center text-xs sm:text-sm text-gray-700 md:text-base">
                {item?.label}
              </p>
            </div>
          );
        })}
      </div>
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
            {orderData?.map((order,indx) => (
              <tr
                key={indx}
                className=" text-xs md:text-sm text-gray-700 hover:bg-gray-50 transition"
              >
                <td className="md:py-4 border-r py-2 px-4 border-b whitespace-nowrap">
                  {order.OrderId}
                </td>
                <td className="md:py-4 border-r py-2 px-4 border-b whitespace-nowrap">
                  {order.createdAt}
                </td>
                <td className="md:py-4 border-r py-2 px-4 border-b whitespace-nowrap">
                  ${order.totalAmount.toFixed(2)}
                </td>
                <td className="md:py-4 py-2 border-r px-4 border-b whitespace-nowrap">
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      order.order_status === "Completed"
                        ? "bg-green-500 text-white"
                        : "bg-yellow-500 text-white"
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="md:py-4 py-2 px-4 border-b whitespace-nowrap">
                  <ProductViewModal data ={orderData[indx]?.items} />
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
