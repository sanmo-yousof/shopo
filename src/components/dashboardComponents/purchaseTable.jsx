"use client";
import ProductViewModal from "@/components/dashboardComponents/productViewModal";
import { getOrder } from "@/utils/loaclSorage";
import { useEffect, useState } from "react";
import emptyCart from "@/asset/emptyImages/emptyCart.png";
import EmptyContent from "../emptyContent";
import CustomPagination from "../customPagination";

const PurchaseTable = () => {
  const [orderData, setOrderData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 3; //

  useEffect(() => {
    setLoading(true);
    setOrderData(getOrder());
    setLoading(false);
  }, []);

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const visibleOrders = orderData.slice(startIndex, endIndex);

  return (
    <>
      {!loading && orderData.length === 0 ? (
        <EmptyContent
          emptyCart={emptyCart}
          title="You have no more purchase items"
          href="/shop"
          buttonText="Purchase Now"
        />
      ) : loading ? (
        <div className="space-y-4">
          <div className="mt-4 overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow table-auto">
              <thead>
                <tr>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <th
                      key={i}
                      className="md:py-4 py-3 border-r px-4 bg-gray-200 animate-pulse"
                    >
                      &nbsp;
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {Array.from({ length: 3 }).map((_, i) => (
                  <tr key={i} className="animate-pulse">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <td
                        key={j}
                        className="md:py-4 py-2 px-4 border-b border-r bg-gray-100 rounded"
                      >
                        &nbsp;
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <>
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
                {visibleOrders.map((order, indx) => (
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
                          order.status === "Completed"
                            ? "bg-green-500 text-white"
                            : "bg-yellow-500 text-white"
                        }`}
                      >
                        {order.status}
                      </span>
                    </td>
                    <td className="md:py-4 py-2 px-4 border-b whitespace-nowrap">
                      <ProductViewModal data={order.items} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ✅ pass totalItems & perPage to pagination */}
          <CustomPagination
            totalItems={orderData.length}
            perPage={perPage}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      )}
    </>
  );
};

export default PurchaseTable;
