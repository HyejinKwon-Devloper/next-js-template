import Button from '@/components/Button';
import Table from '@/components/table/Table';
import Image from 'next/image';
import Link from 'next/link';

export default function NoticeList() {
  return (
    <div className="main-container">
      <div className="content-title">
        <div className="content-title-head">
          <h1>최신 게시글</h1>
        </div>
        <div>
          <Link href={'/notice/add'}>
            <Image
              src="/ico/add_black.svg"
              alt="add new post"
              className="imgLight"
              width={24}
              height={24}
            />
            <Image
              src="/ico/add_white.svg"
              alt="add new post white"
              className="dark:dark-invert imgDark"
              width={24}
              height={24}
            />
          </Link>
        </div>
      </div>
      <div className="content-body">
        <Table totalItemNum={3}>
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
            <tr>
              <td>제목</td>
              <td>2023-05-08</td>
            </tr>
            <tr>
              <td>제목</td>
              <td>2023-05-08</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  );
}
