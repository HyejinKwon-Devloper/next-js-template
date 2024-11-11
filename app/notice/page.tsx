import Button from '@/components/Button';
import Pagination from '@/components/Pagination';
import Image from 'next/image';

export default function NoticeList() {
  // async function fetching() {
  //   await new Promise((resolve) => setTimeout(resolve, 10000));
  //   return <h1>fetching</h1>;
  // }
  return (
    <div className="content-area">
      {/* {fetching()} */}
      <div className="content-title">
        <div className="content-title-head">
          <h1>최신 게시글</h1>
        </div>
        <div>
          <Button>
            <Image
              src="/ico/add_black.svg"
              alt="add new post"
              width={24}
              height={24}
            />
          </Button>
        </div>
      </div>
      <div className="content-body">
        <div className="table-area">
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
          <Pagination totalItemNum={300} />
        </div>
      </div>
    </div>
  );
}
