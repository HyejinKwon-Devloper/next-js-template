'use client';
import { usePagination } from '@/hook/usePagination';
import { useMemo } from 'react';

type TPagination = {
  totalItemNum: number;
};
export default function Pagination(props: TPagination) {
  const { totalItemNum } = props;
  const itemsPerPage = 5;
  const { currentNum, pageNumbers, setPageNumber, goPrev, goNext } =
    usePagination({
      itemsPerPage,
      totalItemNum: totalItemNum,
    });

  const renderPageNumbers = useMemo(() => {
    return pageNumbers.map((num) => (
      <li
        key={num}
        className={num === currentNum ? 'active' : ''}
        onClick={() => setPageNumber(num)}
      >
        {num}
      </li>
    ));
  }, [pageNumbers, currentNum]);

  return (
    <div className="pagination">
      <ol>
        <li children="<" onClick={goPrev} />
        {renderPageNumbers}
        <li children=">" onClick={goNext} />
      </ol>
    </div>
  );
}
