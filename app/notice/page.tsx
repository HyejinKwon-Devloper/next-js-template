import Button from '@/components/Button';
import Pagination from '@/components/Pagination';
import Image from 'next/image';

export default function NoticeList() {
  return (
    <div className="content-area">
      <div className="content-title">
        <div className="content-title-head">
          <h1>최신 게시글</h1>
        </div>
        <div>
          {/* TODO:: title -> children으로 변경하기 */}
          <Button
            children={
              <Image
                src="/ico/add_black.svg"
                alt="add new post"
                width={24}
                height={24}
              />
            }
          />
        </div>
      </div>
      <div className="content-body">
        <table className="table-basic">
          <colgroup>
            <col width={'70%'} />
            <col width={'30%'} />
          </colgroup>
          <thead>
            <tr>
              <th>제목</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>제목</td>
              <td>2023-05-08</td>
            </tr>
          </tbody>
        </table>
        <Pagination totalItemsNumber={30} />
      </div>
    </div>
  );
}
