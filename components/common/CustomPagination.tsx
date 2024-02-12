import usePagination from '@/hooks/usePagination';
import React, { useState } from 'react';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '../ui/pagination';

type CustomPaginationProps = {
  pageCount: number;
  totalCount: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
  previousPage: () => void;
  nextPage: () => void;
  getCanPreviousPage: () => boolean;
  getCanNextPage: () => boolean;
};

const CustomPagination = ({
  totalCount,
  pageCount,
  currentPage = 1,
  onPageChange,
  previousPage,
  nextPage,
  getCanPreviousPage,
  getCanNextPage,
}: CustomPaginationProps) => {
  const [page, setPage] = useState(currentPage);
  const paginationRange = usePagination({
    totalCount,
    pageSize: pageCount,
    currentPage: page,
  });

  if (currentPage === 0 || paginationRange?.length === 1) {
    return null;
  }

  const handleChange = (page: number | string) => {
    if (typeof page === 'number') {
      onPageChange(page);
      setPage(page);
    }
  };

  return (
    <div className="mt-4">
      <Pagination>
        <PaginationContent>
          {getCanPreviousPage() && (
            <PaginationItem>
              <PaginationPrevious onClick={previousPage} />
            </PaginationItem>
          )}
          {paginationRange?.map((item, index) =>
            item === '...' ? (
              <PaginationItem key={index}>
                <PaginationEllipsis />
              </PaginationItem>
            ) : (
              <PaginationItem key={index}>
                <PaginationLink
                  onClick={() => handleChange(item)}
                  isActive={item === page}
                >
                  {item}
                </PaginationLink>
              </PaginationItem>
            ),
          )}
          {getCanNextPage() && (
            <PaginationItem>
              <PaginationNext onClick={nextPage} />
            </PaginationItem>
          )}
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default CustomPagination;
