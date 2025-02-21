import '@/components/table/table.css';
import NoItem from '@/components/table/NoItem';

interface ITable {
  children?: React.ReactNode;
  isNoItem?: boolean;
}
export default function Table(props: ITable) {
  const { children, isNoItem = false } = props;
  return (
    <div className="table-area">
      {isNoItem ? (
        <div className="table-basic">
          <NoItem />
        </div>
      ) : (
        <div className="table-basic">
          {children && <table>{children}</table>}
        </div>
      )}
    </div>
  );
}
