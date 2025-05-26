'use client';
import Table from '@/components/table/Table';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

interface INotice {
  bnum: number;
  title: string;
  contents: string;
  regDate: string;
}

export default function NoticeList() {
  const [data, setData] = useState<INotice[]>([]);

  async function getNoticeList() {
    const response = await fetch('/api/notice?limit=5&offset=1');
    const result = await response.json();
    setData(result);
  }
  useEffect(() => {
    getNoticeList();
  }, []);
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
            {data?.length > 0 &&
              data.map((res) => {
                return (
                  <tr key={res.bnum}>
                    <td>{res.title}</td>
                    <td>{res.regDate}</td>
                  </tr>
                );
              })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
