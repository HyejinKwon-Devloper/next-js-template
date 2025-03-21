'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

import Table from '@/components/table/Table';
import Pagination from '@/components/table/Pagination';
import { create } from '@/app/notice/api/action';

interface INotice {
  bnum: number;
  title: string;
  contents: string;
  regDate: string;
  uptDate: string;
}

export default function NoticeList() {
  const [notices, setNotices] = useState<Array<INotice>>();
  const [totalItemsNum, setTotalItemsNum] = useState<number>(0);
  const [currentNum, setCurrentNum] = useState<number>(1);
  const router = useRouter();

  const handleClick = (
    e: React.MouseEvent<HTMLTableRowElement>,
    bnum: number,
  ) => {
    e.preventDefault();
    router.push(`/notice/${bnum}`);
  };

  const handleCurrentNum = (pageNumber: number) => {
    setCurrentNum(pageNumber);
  };

  useEffect(() => {
    async function getNoticeList() {
      const response = await create({ startNum: currentNum - 1, limit: 5 });
      response && (await setNotices(response.contents));
      response && (await setTotalItemsNum(response.totalItemsNum));
    }
    getNoticeList();
  }, [currentNum]);

  return (
    <div className="main-container">
      <div className="content-title">
        <div className="content-title-head">
          <h1>최신 게시글</h1>
        </div>
        <div>
          <Link href="/notice/add">
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
        <Table isNoItem={!(totalItemsNum || 0)}>
          <colgroup>
            <col width="70%" />
            <col width="30%" />
          </colgroup>
          <thead>
            <tr>
              <td>제목</td>
              <td>작성일</td>
            </tr>
          </thead>
          <tbody>
            {notices?.map((noticeContents) => (
              <tr
                key={noticeContents.bnum}
                onClick={(e) => handleClick(e, noticeContents.bnum)}
              >
                <td>{noticeContents.title}</td>
                <td>{noticeContents.regDate}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        {!!totalItemsNum && (
          <Pagination
            totalItemNum={totalItemsNum}
            itemsPerPage={5}
            handlePageNum={handleCurrentNum}
          />
        )}
      </div>
    </div>
  );
}
