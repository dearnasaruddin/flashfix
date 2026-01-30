import { ChevronLeft, ChevronRight } from 'lucide-react';

const Pagination = ({ totalItems, itemPerPage, currentPage, onPageChange }) => {

    const totalPages = Math.ceil(totalItems / itemPerPage)
    const pageNumbers = []

    if (currentPage > 4 && currentPage < totalPages - 2) {
        for (let i = currentPage - 1; i <= currentPage + 1; i++) {
            pageNumbers.push(i)
        }

        if (currentPage > 4) {
            pageNumbers.unshift('...')
        }
        if (currentPage < totalPages - 2) {
            pageNumbers.push('...')
        }
    } else if (currentPage > 4) {
        for (let i = currentPage - 2; i < Math.min(totalPages, currentPage + 2); i++) {
            pageNumbers.push(i)
        }
        pageNumbers.unshift('...')
    } else if (currentPage < totalPages - 3) {
        if (currentPage <= 3) {
            for (let i = 1 + 1; i <= 1 + 4; i++) {
                pageNumbers.push(i)
            }
        } else if (currentPage => 4) {
            for (let i = 1 + 1; i <= currentPage + 1; i++) {
                pageNumbers.push(i)
            }
        }
        pageNumbers.push('...')
    }


    return (
        <div className='mt-4 md:mt-11.5 max-md:pb-8 md:mb-4.5 flex flex-wrap justify-center items-center text-xs xs:text-sm md:text-base'>

            <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} className={`flex items-center md:gap-2 p-2 ${currentPage == 1 ? 'text-[#697077] cursor-default' : 'text-[#0F62FE] cursor-pointer'} `}>
                <ChevronLeft />
                <span className='font-medium max-sm:hidden'>Previous</span>
            </button>

            <button onClick={() => onPageChange(1)} className={`size-5 xs:size-8 md:size-10 flex justify-center items-center text-[#0F62FE] ${currentPage == 1 ? 'bg-[#A6C8FF]' : 'cursor-pointer hover:bg-primary'}`}>1</button>

            {pageNumbers.map((pageNumber, index) => (
                <button key={index} disabled={pageNumber == '...'} onClick={() => onPageChange(pageNumber)} className={`size-5 xs:size-8 md:size-10 text-[#0F62FE]  ${currentPage == pageNumber ? 'bg-[#A6C8FF]' : pageNumber != '...' && 'cursor-pointer hover:bg-primary'}`} >{pageNumber}</button>
            ))}

            <button onClick={() => onPageChange(totalPages)} className={`size-5 xs:size-8 md:size-10 flex justify-center items-center text-[#0F62FE] ${currentPage == totalPages ? 'bg-[#A6C8FF]' : 'hover:bg-primary'}`}>{totalPages}</button>
            
            <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} className={`flex items-center md:gap-2 p-2 ${currentPage == totalPages ? 'text-[#697077]' : 'text-[#0F62FE]'} cursor-pointer`}>
                <span className='font-medium max-sm:hidden'>Next</span>
                <ChevronRight />
            </button>
        </div>
    )
}

export default Pagination