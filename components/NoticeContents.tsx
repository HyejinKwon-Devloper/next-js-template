'use client';
import Image from 'next/image';
import Card from '@/components/card/Card';
import Button from '@/components/Button';

export default function NoticeContents() {
  return (
    <div className="sub-container">
      <div className="content-body">
        <Card>
          <div className="card-title">Title입니다.</div>
          <div className="card-subtitle">
            내용블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라
          </div>
        </Card>
        <Card>
          <div className="card-title">Title입니다.</div>
          <div className="card-subtitle">
            내용블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라블라
          </div>
        </Card>
      </div>
    </div>
  );
}
