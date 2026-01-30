import usePagination from '@/hooks/usePagination';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ totalItems, itemPerPage, currentPage, onPageChange }) => {

    const { totalPages, pageNumbers } = usePagination({ totalItems, itemPerPage, currentPage })

    return (
        <div className='mt-4 md:mt-11.5 max-md:pb-8 md:mb-4.5 flex flex-wrap justify-center items-center text-xs xs:text-sm md:text-base'>
            {/* ============= Prev Btn ============= */}
            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className={`flex items-center md:gap-2 p-2 ${currentPage == 1 ? 'text-[#697077] cursor-default' : 'text-[#0F62FE] cursor-pointer'} `}>
                <ChevronLeft />
                <span className='font-medium max-sm:hidden'>Previous</span>
            </button>

            {/* ============= First Page ============= */}
            <button onClick={() => onPageChange(1)} className={`size-5 xs:size-8 md:size-10 flex justify-center items-center text-[#0F62FE] ${currentPage == 1 ? 'bg-[#A6C8FF]' : 'cursor-pointer hover:bg-primary'}`}>1</button>

            {/* ============= Middle Pages with dots ============= */}
            {pageNumbers.map((pageNumber, index) => (
                <button key={index} disabled={pageNumber == '...'} onClick={() => onPageChange(pageNumber)} className={`size-5 xs:size-8 md:size-10 text-[#0F62FE]  ${currentPage == pageNumber ? 'bg-[#A6C8FF]' : pageNumber != '...' && 'cursor-pointer hover:bg-primary'}`} >{pageNumber}</button>
            ))}

            {/* ============= Last Page ============= */}
            <button onClick={() => onPageChange(totalPages)} className={`size-5 xs:size-8 md:size-10 flex justify-center items-center text-[#0F62FE] ${currentPage == totalPages ? 'bg-[#A6C8FF]' : 'hover:bg-primary'}`}>{totalPages}</button>

            {/* ============= Next Btn ============= */}
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className={`flex items-center md:gap-2 p-2 ${currentPage == totalPages ? 'text-[#697077]' : 'text-[#0F62FE]'} cursor-pointer`}>
                <span className='font-medium max-sm:hidden'>Next</span>
                <ChevronRight />
            </button>
        </div>
    )
}

export default Pagination