"use client";
import TransactionViewModal from "@/components/dashboardComponents/transactionModal";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import { useEffect, useState } from "react";
import EmptyContent from "../emptyContent";
import emptyTransaction from "@/asset/emptyImages/emptyTransaction.png";
import CustomPagination from "../customPagination";

const TransactionTable = () => {
  const [transactionData, setTransactionData] = useState([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 3;

  useEffect(() => {
    setLoading(true);
    fetch("/transaction.json")
      .then((res) => res.json())
      .then((result) => {
        setTransactionData(result);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const startIndex = (currentPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const visibleTransactions = transactionData.slice(startIndex, endIndex);

  return (
    <>
      {!loading && transactionData.length === 0 ? (
        <EmptyContent
          emptyCart={emptyTransaction}
          title="No transaction history"
          href="/shop"
          buttonText="Shop Now"
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
                <tr className="bg-secondary text-left text-xs md:text-sm font-semibold text-gray-700">
                  <th className="md:py-4 py-3 border-r px-4 whitespace-nowrap">
                    Transaction ID
                  </th>
                  <th className="md:py-4 py-3 border-r px-4 whitespace-nowrap">
                    Amount
                  </th>
                  <th className="md:py-4 py-3 border-r px-4 whitespace-nowrap">
                    Transaction Date
                  </th>
                  <th className="md:py-4 py-3 px-4 border-r whitespace-nowrap">
                    Details
                  </th>
                  <th className="md:py-4 py-3 px-4 whitespace-nowrap min-w-[100px]">
                    View
                  </th>
                </tr>
              </thead>
              <tbody>
                {visibleTransactions.map((order, indx) => (
                  <tr
                    key={indx}
                    className="text-xs md:text-sm text-gray-700 hover:bg-gray-50 transition"
                  >
                    <td className="md:py-4 border-r py-2 px-4 border-b whitespace-nowrap">
                      {order.transactionId}
                    </td>
                    <td className="md:py-4 border-r py-2 px-4 border-b whitespace-nowrap">
                      ${order.amount}
                    </td>
                    <td className="md:py-4 border-r py-2 px-4 border-b whitespace-nowrap">
                      {order.transactionDate}
                    </td>
                    <td className="md:py-4 border-r py-2 px-4 border-b whitespace-nowrap">
                      {order.details}
                    </td>
                    <td className="md:py-4 py-2 px-4 border-b whitespace-nowrap">
                      <TransactionViewModal order={order} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <CustomPagination
            totalItems={transactionData.length}
            perPage={perPage}
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </>
      )}
    </>
  );
};

export default TransactionTable;
