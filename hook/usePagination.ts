import { useMemo, useState } from 'react';

type TPageNumberProps = {
  itemsPerPage: number;
  totalItemNum: number;
};

export function usePagination(props: TPageNumberProps) {
  const { itemsPerPage, totalItemNum } = props;

  const [currentNum, setCurrentPage] = useState<number>(1);
  const [startOfPage, setStartOfPage] = useState<number>(1);
  const [endOfPage, setEndOfPage] = useState<number>(itemsPerPage);

  const totalPages = Math.ceil(totalItemNum / itemsPerPage);

  function calculatePageNumber() {
    const pageNumbers = [];
    const endOfCurrentPage =
      Math.ceil(currentNum / itemsPerPage) * itemsPerPage;
    const startOfCurrentPage = endOfCurrentPage - itemsPerPage + 1;

    for (let i = startOfCurrentPage; i <= endOfCurrentPage; i++) {
      if (i < totalPages) {
        pageNumbers.push(i);
      } else {
        pageNumbers.push(totalPages);
        break;
      }
    }
    setEndOfPage(endOfCurrentPage);
    setStartOfPage(startOfCurrentPage);

    return pageNumbers;
  }

  const pageNumbers = useMemo(() => {
    return calculatePageNumber();
  }, [currentNum, itemsPerPage]);

  function setPageNumber(num: number) {
    setCurrentPage(num > 0 ? Math.min(num, totalPages) : 1);
    return;
  }

  function goPrev() {
    setPageNumber(startOfPage - itemsPerPage);
  }

  function goNext() {
    setPageNumber(endOfPage + 1);
  }

  return { currentNum, pageNumbers, setPageNumber, goPrev, goNext };
}
