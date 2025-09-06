"use client";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
  PaginationEllipsis,
} from "@/components/ui/pagination";

const CustomPagination = ({
  totalItems = 0,
  perPage = 2,
  currentPage = 1,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / perPage);

  if (totalPages <= 1) return null;
  const pages = [];
  for (let i = 1; i <= totalPages; i++) {
    pages.push(i);
  }

  return (
    <Pagination className="pt-6 flex items-center justify-center space-x-4">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            aria-disabled={currentPage === 1}
            className={currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
          />
        </PaginationItem>

        {pages.map((page, idx) => {
          if (
            page === 1 ||
            page === totalPages ||
            (page >= currentPage - 1 && page <= currentPage + 1)
          ) {
            return (
              <PaginationItem key={idx}>
                <PaginationLink
                  href="#"
                  isActive={page === currentPage}
                   className={`${page === currentPage ? "bg-[#1867d6] text-white":"border border-[#1867d6]" }`}
                  onClick={(e) => {
                    e.preventDefault();
                    onPageChange(page);
                   
                  }}
                >
                  {page}
                </PaginationLink>
              </PaginationItem>
            );
          } else if (page === currentPage - 2 || page === currentPage + 2) {
            return (
              <PaginationItem key={`ellipsis-${idx}`}>
                <PaginationEllipsis />
              </PaginationItem>
            );
          }
          return null;
        })}

        <PaginationItem>
          <PaginationNext
            href="#"
            aria-disabled={currentPage === totalPages}
            className={
              currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""
            }
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>

      {/* <span className="text-sm text-gray-600 ml-4">
        Page {currentPage} of {totalPages}
      </span> */}
    </Pagination>
  );
};

export default CustomPagination;
