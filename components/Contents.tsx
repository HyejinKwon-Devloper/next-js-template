'use client';
import Image from 'next/image';
import Card from '@/components/card/Card';
import Button from '@/components/Button';

export default function Contents() {
  return (
    <div className="sub-container">
      <Card>
        <div className="card-title">
          <Image
            src="/img/20230503_141710.jpg"
            alt="titleImg"
            width={'260'}
            height={'232'}
          />
        </div>
        <div>
          <h2>Sapporo</h2>
          <span>2023.04.30</span>
          <em>~</em>
          <span>2023.05.05</span>
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
      <Card>
        <div className="card-title">
          <Image
            src="/img/20230503_141710.jpg"
            alt="titleImg"
            width={'260'}
            height={'232'}
          />
        </div>
        <div>
          <h2>Sapporo</h2>
          <span>2023.04.30</span>
          <em>~</em>
          <span>2023.05.05</span>
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
    </div>
  );
}
