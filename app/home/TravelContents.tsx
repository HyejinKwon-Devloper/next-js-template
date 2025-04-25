'use client';
import Image from 'next/image';
import Card from '@/components/card/Card';
import Button from '@/components/Button';

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
];
export default function Contents() {
  return (
    <div className="sub-container">
      {dataSet?.map((data) => {
        return (
          <Card>
            <div className="card-title">
              <Image src={data.src} alt={data.alt} width={260} height={232} />
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
                  자세히 보기
                </Button>
              </div>
              <div>
                <Button buttontype="outlined" isfull>
                  뒤로가기
                </Button>
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
}
