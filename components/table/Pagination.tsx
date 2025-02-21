'use client';

import { useMemo } from 'react';

import { usePagination } from '@/hook/usePagination';

type TPagination = {
  totalItemNum: number;
  handlePageNum: (pageNumber: number) => void;
  itemsPerPage?: number;
};
export default function Pagination(props: TPagination) {
  const { totalItemNum, itemsPerPage = 5, handlePageNum } = props;
  const { currentNum, pageNumbers, setPageNumber, goPrev, goNext } =
    usePagination({
      itemsPerPage,
      totalItemNum,
    });

  const renderPageNumbers = useMemo(async () => {
    return pageNumbers.map((num) => (
      <li
        key={num}
        className={num === currentNum ? 'active' : ''}
        onClick={() => {
          handlePageNum(currentNum);
          setPageNumber(num);
        }}
      >
        {num}
      </li>
    ));
  }, [pageNumbers, currentNum]);

  return (
    <div className="pagination">
      <ol>
        <li onClick={goPrev}>{'<'}</li>
        {renderPageNumbers}
        <li onClick={goNext}>{'>'}</li>
      </ol>
    </div>
  );
}
