'use client';
import Button from '@/components/Button';
import { useState, useMemo } from 'react';

type TPagination = {
  totalItemsNumber: number;
};
export default function Pagination(props: TPagination) {
  const { totalItemsNumber } = props;
  const initialNum = 1;
  const itemsPerPage = 5;
  const totalPageNumber = Math.ceil(totalItemsNumber / itemsPerPage);
  const [currentNum, setCurrentNum] = useState<number>(initialNum);

  // TODO:: code 최적화 및 테스트 코드 작성 필요
  function onClickPageNumber(num: number) {
    if (num < 1) {
      setCurrentNum(1);
      return;
    } else if (num > totalPageNumber) {
      setCurrentNum(totalPageNumber);
      return;
    }
    setCurrentNum(num);
    return;
  }
  function renderPageNumber() {
    const pageNumbers = [];
    for (let i = currentNum; i < currentNum + itemsPerPage; i++) {
      if (i < totalPageNumber) {
        pageNumbers.push(<li key={i}>{i}</li>);
      } else {
        pageNumbers.push(<li key={totalPageNumber}>{totalPageNumber}</li>);
        break;
      }
    }
    return pageNumbers;
  }

  const pageNumbers = useMemo(() => {
    return renderPageNumber();
  }, [currentNum, itemsPerPage]);

  return (
    <div>
      <ol>
        {/* <Button
          children="<"
          onClick={() => {
            console.log('this1', currentNum);
            onClickPageNumber(
              Math.floor(currentNum / 5) * itemsPerPage - itemsPerPage,
            );
          }}
        /> */}
        {pageNumbers}
        {/* <Button
          children=">"
          onClick={() => {
            console.log('this2', currentNum);
            onClickPageNumber(
              Math.ceil(currentNum / 5) * itemsPerPage + itemsPerPage,
            );
          }}
        /> */}
      </ol>
    </div>
  );
}
