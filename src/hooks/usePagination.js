
const usePagination = ({  totalItems,  itemPerPage,  currentPage,}) => {

  const totalPages = Math.ceil(totalItems / itemPerPage);
  const pageNumbers = [];

  if (currentPage > 4 && currentPage < totalPages - 2) {
    for (let i = currentPage - 1; i <= currentPage + 1; i++) {
      pageNumbers.push(i);
    }
    pageNumbers.unshift('...');
    pageNumbers.push('...');
  }

  else if (currentPage > 4) {
    for (
      let i = currentPage - 2;
      i < Math.min(totalPages, currentPage + 2);
      i++
    ) {
      pageNumbers.push(i);
    }
    pageNumbers.unshift('...');
  }

  else if (currentPage < totalPages - 3) {
    if (currentPage <= 3) {
      for (let i = 2; i <= 5; i++) {
        pageNumbers.push(i);
      }
    } else {
      for (let i = 2; i <= currentPage + 1; i++) {
        pageNumbers.push(i);
      }
    }
    pageNumbers.push('...');
  }

  return {
    totalPages,
    pageNumbers,
  };
};

export default usePagination;
