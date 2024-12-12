import Pagination from '@/components/table/Pagination';

import '@/components/table/table.css';
import NoItem from '@/components/table/NoItem';

interface ITable {
  totalItemNum: number;
  children?: React.ReactNode;
  isNoItem?: boolean;
}
export default function Table(props: ITable) {
  const { totalItemNum, children, isNoItem = false } = props;
  return (
    <div className="table-area">
      {isNoItem ? (
        <div className="table-basic">
          <NoItem />
        </div>
      ) : (
        <>
          <div className="table-basic">
            {children && <table>{children}</table>}
          </div>
          <Pagination totalItemNum={totalItemNum} />
        </>
      )}
    </div>
  );
}
