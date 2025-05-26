'use client';

import { useEffect, useState } from 'react';
import Card from '@/components/card/Card';

interface INotice {
  title: string;
  contents: string;
}
export default function NoticeContents() {
  const [data, setData] = useState<INotice[]>([]);

  async function getNoticeList() {
    const response = await fetch('/api/home');
    const result = await response.json();
    setData(result);
  }
  useEffect(() => {
    getNoticeList();
  }, []);

  return (
    <div className="sub-container">
      <div className="content-body">
        <div>
          {data.length > 0 &&
            data.map((res, index) => {
              return (
                <Card key={index}>
                  <div className="card-title">{res.title}</div>
                  <div className="card-subtitle">{res.contents}</div>
                </Card>
              );
            })}
        </div>
      </div>
    </div>
  );
}
