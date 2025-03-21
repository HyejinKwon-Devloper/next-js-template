'use client';

import { useMemo } from 'react';

import Button from '@/components/Button';
import { usePagination } from '@/hook/usePagination';

interface IPagination {
  totalItemNum: number;
  handlePageNum: (pageNumber: number) => void;
  itemsPerPage?: number;
}
export default function Pagination(props: IPagination) {
  const { totalItemNum, itemsPerPage = 5, handlePageNum } = props;
  const { currentNum, pageNumbers, setPageNumber, goPrev, goNext } =
    usePagination({
      itemsPerPage,
      totalItemNum,
    });

  const renderPageNumbers = useMemo(async () => {
    return pageNumbers.map((num: number, index) => (
      <li key={num} className={num === currentNum ? 'active' : ''}>
        <Button
          key={`${num}-${index}`}
          onClick={() => {
            handlePageNum(currentNum);
            setPageNumber(num);
          }}
          onKeyDown={() => {
            handlePageNum(currentNum);
            setPageNumber(num);
          }}
        >
          {num}
        </Button>
      </li>
    ));
  }, [pageNumbers, currentNum]);

  return (
    <ol className="pagination">
      <li>
        <Button onClick={goPrev} onKeyDown={goPrev}>
          {'<'}
        </Button>
      </li>
      {renderPageNumbers}
      <li>
        <Button onClick={goNext} onKeyDown={goNext}>
          {'>'}
        </Button>
      </li>
    </ol>
  );
}
