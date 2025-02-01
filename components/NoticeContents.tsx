'use client';
import Card from '@/components/card/Card';
import { create } from '@/app/notice/api/action';
import { useEffect, useState } from 'react';

interface INotice {
  bnum: number;
  title: string;
  contents: string;
}

export default function NoticeContents() {
  const [notices, setNotices] = useState<Array<INotice>>();

  async function getNoticeList() {
    const response = await create({ startNum: 0, limit: 3 });
    response && setNotices(response.contents);
  }

  useEffect(() => {
    getNoticeList();
  }, []);

  return (
    <div className="sub-container">
      <div className="content-body">
        {notices?.map((notice) => (
          <Card appendclassname="w-full">
            <div className="card-title">{notice.title}</div>
            <div className="card-subtitle">{notice.contents}</div>
          </Card>
        ))}
      </div>
    </div>
  );
}
