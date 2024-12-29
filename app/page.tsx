'use client';
import Contents from '@/components/Contents';
import NoticeContents from '@/components/NoticeContents';
import ProfileContainer from '@/components/profile/ProfileContainer';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <div className="main-contents">
        <ProfileContainer />
        <div className="main-container">
          <Link className="content-title" href={'/'}>
            <Image
              src="/ico/flight_black.svg"
              alt="list black icon"
              className="imgLight"
              width={26}
              height={26}
              priority
            />
            <Image
              src="/ico/flight_white.svg"
              alt="list white icon"
              className="imgDark"
              width={26}
              height={26}
              priority
            />
            최근 여행
          </Link>
          <Contents />
          <Link className="content-title" href={'/notice'}>
            <Image
              src="/ico/list_black.svg"
              alt="list black icon"
              className="imgLight"
              width={26}
              height={26}
              priority
            />
            <Image
              src="/ico/list_white.svg"
              alt="list white icon"
              className="imgDark"
              width={26}
              height={26}
              priority
            />
            최근 게시글
          </Link>
          <NoticeContents />
        </div>
      </div>
    </main>
  );
}
