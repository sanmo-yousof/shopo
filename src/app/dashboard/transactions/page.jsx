import ProductViewModal from "@/components/dashboardComponents/productViewModal";
import TransactionViewModal from "@/components/dashboardComponents/transactionModal";
import { Pagination, PaginationContent, PaginationEllipsis, PaginationItem, PaginationLink, PaginationNext, PaginationPrevious } from "@/components/ui/pagination";

import { Transactions } from "@/utils/utils";

const Transaction = () => {
  return(
    <>
        <h2 className="lg:text-2xl text-base sm:text-xl font-semibold text-gray-700">
          Transactions
        </h2>
        <div className="overflow-x-auto mt-3">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow table-auto">
            <thead>
              <tr className="bg-blue-100 text-left text-xs md:text-sm font-semibold text-gray-700">
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
              {Transactions.map((order,indx) => (
                <tr
                  key={indx}
                  className=" text-xs md:text-sm text-gray-700 hover:bg-gray-50 transition"
                >
                  <td className="md:py-4 border-r py-2 px-4 border-b whitespace-nowrap">
                    {order.transactionId}
                  </td>
                  <td className="md:py-4 border-r py-2 px-4 border-b whitespace-nowrap">
                    {order.amount}
                  </td>
                  <td className="md:py-4 border-r py-2 px-4 border-b whitespace-nowrap">
                    ${order.transactionDate}
                  </td>

                  <td className="md:py-4 border-r py-2 px-4 border-b whitespace-nowrap">
                    {order.details}
                  </td>
                  
                  <td className="md:py-4 py-2 px-4 border-b whitespace-nowrap">
                    <TransactionViewModal/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination className={'pt-12'}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink className={'bg-blue-600 text-white'} href="#" isActive>1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" >
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
      </>
  );
};

export default Transaction;