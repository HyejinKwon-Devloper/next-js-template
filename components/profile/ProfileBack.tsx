import Card from '@/components/card/Card';
import NameCard from '@/public/CardProfile.svg';
import profileImage from '@/public/img/travel_profile.jpg';
import Image from 'next/image';

type TProfileFront = {
  handleCardRotate: (event: React.MouseEvent<HTMLDivElement>) => void;
};

export default function ProfileBack(props: TProfileFront) {
  return (
    <Card
      appendclassName="profile-area back-style"
      onClick={props.handleCardRotate}
    >
      <div className="back-profile-image">
        <Image
          className="back-top-image"
          src={profileImage}
          alt="profileImage"
          width={'244'}
          height={'200'}
          objectFit="cover"
        />
        <Image
          className="back-bottom-image"
          src={NameCard}
          alt="namecard"
          width={'244'}
          height={'167'}
          objectFit="cover"
        />
        <h1 className="back-trip-name">
          <p>Jin</p>
          <span className="sub">Hello, I{`'`}m Jin</span>
        </h1>
        <div className="back-trip-detail">
          <span className="sub">Last Trip</span>
          <div className="back-trip-info">
            <span className="back-trip-info-column">Incheon</span>
            <span className="back-trip-info-seperator">✈</span>
            <span className="back-trip-info-column">Chiang Mai</span>
          </div>
          <span className="sub">Period</span>
          <div className="back-trip-info">
            <span className="back-trip-info-column">2024.09.30</span>
            <span className="back-trip-info-seperator">~</span>
            <span className="back-trip-info-column">2024.10.06</span>
          </div>
        </div>
      </div>
    </Card>
  );
}
