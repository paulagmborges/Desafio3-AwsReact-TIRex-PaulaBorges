import { useMemo } from "react";


interface UsePaginationProps {
  totalCount: number;
  pageSize: number;
  siblingCount?: number;
  currentPage: number;
}

export function usePagination({ totalCount, pageSize, siblingCount = 1, currentPage }: UsePaginationProps) {
  const paginationRange: (number | string)[] = useMemo(() => {
    const totalPages = Math.ceil(totalCount / pageSize);
    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPages) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPages);

    let range: (number | string)[] = Array.from(
      { length: rightSiblingIndex - leftSiblingIndex + 1 },
      (_, i) => leftSiblingIndex + i
    );

    if (leftSiblingIndex > 2) range = ["...", ...range];
    if (rightSiblingIndex < totalPages - 1) range = [...range, "..."];

    return [1, ...range, totalPages];
  }, [totalCount, pageSize, siblingCount, currentPage]);

  return paginationRange;
}

