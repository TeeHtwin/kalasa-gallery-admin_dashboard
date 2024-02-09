import { useMemo } from 'react';

const usePagination = ({
  totalCount,
  pageSize,
  siblingCount = 1,
  currentPage,
}: {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
}) => {
  const Range = (start: number, end: number) => {
    let length = end - start + 1;
    return Array.from({ length }, (_, index) => index + start);
  };
  const DOTS = '...';

  const paginationRange = useMemo(() => {
    const totalPages = Math.ceil(totalCount / pageSize);
    const totalPageShow = siblingCount + 5;

    if (totalPageShow >= totalPages) {
      return Range(1, totalPages);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalCount);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPages - 2;

    const firstIndex = 1;
    const lastIndex = totalPages;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      const leftRange = Range(1, 3 + 2 * siblingCount);
      return [...leftRange, DOTS, totalPages];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      const rightItemCount = 3 + 2 * siblingCount;
      const rightRange = Range(totalPages - rightItemCount + 1, totalPages);
      return [firstIndex, DOTS, ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      const middleRange = Range(leftSiblingIndex, rightSiblingIndex);
      return [firstIndex, DOTS, ...middleRange, DOTS, lastIndex];
    }
  }, [totalCount, pageSize, currentPage]);

  return paginationRange;
};

export default usePagination;
