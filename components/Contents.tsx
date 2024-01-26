import Image from 'next/image';
import Card from './Card';

export default function Contents() {
  return (
    <div className="content-area">
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
      </Card>
    </div>
  );
}