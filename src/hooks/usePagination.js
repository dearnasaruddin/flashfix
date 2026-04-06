const usePagination = ({ totalItems, itemPerPage, currentPage, gap = 1 }) => {

  const totalPages = Math.ceil(totalItems / itemPerPage);
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    if (i === 1 || i === totalPages || (currentPage - gap <= i && i <= currentPage + gap)) {
      pageNumbers.push(i)
    } else if ((currentPage - gap - 1 === i) || (currentPage + gap + 1 === i)) {
      pageNumbers.push('...');
    }
  }

  return {
    totalPages,
    pageNumbers,
  };
};

export default usePagination;