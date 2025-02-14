import classNames from "classnames";
import { usePagination } from "../../../hook/usePagination";

interface PaginationProps {
    totalCount: number;
    currentPage: number;
    pageSize: number;
    onPageChange: (page: number) => void;
    siblingCount?: number;
}

export default function Pagination({ totalCount, currentPage, pageSize, onPageChange, siblingCount = 1 }: PaginationProps) {
    const paginationRange = usePagination({ totalCount, pageSize, siblingCount, currentPage });


    return (
        <div className="flex items-center justify-center mt-6 gap-2">


            {paginationRange.map((page, index) =>
                page === "..." ? (
                    <span key={index}
                        className="px-3 py-2 text-gray-500">...</span>
                ) : (
                    <button
                        key={index}
                        className={classNames(
                            "w-10 h-10 flex items-center justify-center border font-light font-poppins text-[20px]",
                            {
                                "bg-[#F9F1E7] text-black": page === currentPage,
                                "text-black hover:bg-[#B88E2F]": page !== currentPage,
                            }
                        )}
                        onClick={() => onPageChange(Number(page))}
                    >
                        {page}
                    </button>

                )
            )}


            <button
                className={classNames("px-3 py-2 border rounded", {
                    "opacity-50 cursor-not-allowed": currentPage === Math.ceil(totalCount / pageSize),
                    "hover:bg-[#B88E2F]": currentPage !== Math.ceil(totalCount / pageSize)
                })}
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === Math.ceil(totalCount / pageSize)}
            >
                {"Next"}
            </button>


        </div>
    );
}
