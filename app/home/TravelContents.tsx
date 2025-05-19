'use client';
import Image from 'next/image';
import Card from '@/components/card/Card';
import Button from '@/components/Button';
import { useState, useEffect, useRef } from 'react';

const dataSet = [
  {
    src: '/img/20230503_141710.jpg',
    alt: 'titleImg',
    title: 'Sapppro1',
    startDate: '2023.04.30',
    endDate: '2023.05.05',
  },
  {
    src: '/img/20230503_141710.jpg',
    alt: 'titleImg',
    title: 'Sapppro2',
    startDate: '2023.04.30',
    endDate: '2023.05.05',
  },
  {
    src: '/img/20230503_141710.jpg',
    alt: 'titleImg',
    title: 'Sapppro3',
    startDate: '2023.04.30',
    endDate: '2023.05.05',
  },
  {
    src: '/img/20230503_141710.jpg',
    alt: 'titleImg',
    title: 'Sapppro4',
    startDate: '2023.04.30',
    endDate: '2023.05.05',
  },
  {
    src: '/img/20230503_141710.jpg',
    alt: 'titleImg',
    title: 'Sapppro5',
    startDate: '2023.04.30',
    endDate: '2023.05.05',
  },
  {
    src: '/img/20230503_141710.jpg',
    alt: 'titleImg',
    title: 'Sapppro6',
    startDate: '2023.04.30',
    endDate: '2023.05.05',
  },
  {
    src: '/img/20230503_141710.jpg',
    alt: 'titleImg',
    title: 'Sapppro7',
    startDate: '2023.04.30',
    endDate: '2023.05.05',
  },
  {
    src: '/img/20230503_141710.jpg',
    alt: 'titleImg',
    title: 'Sapppro8',
    startDate: '2023.04.30',
    endDate: '2023.05.05',
  },
  {
    src: '/img/20230503_141710.jpg',
    alt: 'titleImg',
    title: 'Sapppro9',
    startDate: '2023.04.30',
    endDate: '2023.05.05',
  },
  {
    src: '/img/20230503_141710.jpg',
    alt: 'titleImg',
    title: 'Sapppro10',
    startDate: '2023.04.30',
    endDate: '2023.05.05',
  },
  {
    src: '/img/20230503_141710.jpg',
    alt: 'titleImg',
    title: 'Sapppro11',
    startDate: '2023.04.30',
    endDate: '2023.05.05',
  },
  {
    src: '/img/20230503_141710.jpg',
    alt: 'titleImg',
    title: 'Sapppro12',
    startDate: '2023.04.30',
    endDate: '2023.05.05',
  },
  {
    src: '/img/20230503_141710.jpg',
    alt: 'titleImg',
    title: 'Sapppro13',
    startDate: '2023.04.30',
    endDate: '2023.05.05',
  },
  {
    src: '/img/20230503_141710.jpg',
    alt: 'titleImg',
    title: 'Sapppro14',
    startDate: '2023.04.30',
    endDate: '2023.05.05',
  },
  {
    src: '/img/20230503_141710.jpg',
    alt: 'titleImg',
    title: 'Sapppro15',
    startDate: '2023.04.30',
    endDate: '2023.05.05',
  },
];
export default function Contents() {
  const cardSize = 210;
  const [currentIndex, setIndex] = useState<number>(0);
  const [containerWidth, setWidth] = useState<number>(0);
  const [moveX, setX] = useState<number>(0);
  const divRef = useRef<HTMLDivElement>(null);

  const limit = Math.floor((window.screen.width - 309 - 16 - 76) / cardSize);

  function handlePrevButton() {
    setIndex((prev) => (prev - 1 < 0 ? 0 : prev - 1));
  }
  function handleNextButton() {
    setIndex((prev) => (prev + 1) % (dataSet.length - limit));
  }

  useEffect(() => {
    if (currentIndex === 0) {
      setX(0);
      return;
    }
    if (currentIndex === dataSet.length - limit) {
      setX(dataSet.length * cardSize - containerWidth + 30 + 30);
    } else {
      setX((prev) => prev + cardSize);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (divRef.current) {
      const width = divRef.current.offsetWidth;
      setWidth(width);
    }
  }, [divRef]);

  return (
    <div className="sub-container" ref={divRef}>
      {dataSet.length > limit && (
        <Button className="btn-prev" onClick={handlePrevButton}>
          <Image
            src="/ico/chevron_left_black.svg"
            alt="prev"
            className="imgLight"
            width={30}
            height={30}
          />
          <Image
            src="/ico/chevron_left_white.svg"
            alt="prev"
            className="imgDark"
            width={30}
            height={30}
          />
        </Button>
      )}
      <div className="carousel-container">
        {dataSet?.map((data) => {
          return (
            <div
              style={{
                transform: `translateX(-${moveX}px)`,
                transition: 'transform 0.5s ease-in-out',
              }}
              key={data.title}
            >
              <Card>
                <div className="card-title">
                  <Image
                    src={data.src}
                    alt={data.alt}
                    width={260}
                    height={232}
                  />
                </div>
                <div>
                  <h2>{data.title}</h2>
                  <span>{data.startDate}</span>
                  <em>~</em>
                  <span>{data.endDate}</span>
                </div>
                <div className="action">
                  <div>
                    <Button buttontype="filled" isfull>
                      내 여행 보러 가기
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
      </div>
      {dataSet.length > limit && (
        <Button className="btn-next" onClick={handleNextButton}>
          <Image
            src="/ico/chevron_right_black.svg"
            alt="next"
            className="imgLight"
            width={30}
            height={30}
          />
          <Image
            src="/ico/chevron_right_white.svg"
            alt="next"
            className="imgDark"
            width={30}
            height={30}
          />
        </Button>
      )}
    </div>
  );
}
