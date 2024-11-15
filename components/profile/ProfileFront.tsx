import profileImage from '@/public/img/travel_profile.jpg';
import Image from 'next/image';
import Card from '@/components/card/Card';

export default function ProfileFront() {
  return (
    <Card>
      <div>
        <div className="profile-title">
          <div>
            <Image
              className="profile-image"
              src={profileImage}
              alt="profileImage"
              width={'120'}
              height={'120'}
            />
          </div>
          <div>
            <span>
              안녕하세요😀
              <br />
              월드와이드찐입니다❤
            </span>
          </div>
        </div>
        <hr className="dash" />
        <div className="profile-body">
          <span>
            안녕하세요😀
            <br />
            글로벌하게
            <br />
            여행하는 것을 좋아하는
            <br />
            월드와이드찐입니다❤
          </span>
        </div>
      </div>
    </Card>
  );
}
