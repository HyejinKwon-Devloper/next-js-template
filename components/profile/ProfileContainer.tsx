'use client';
import { useState } from 'react';
import '@/components/profile/profile.css';
import ProfileFront from '@/components/profile/ProfileFront';
import ProfileBack from '@/components/profile/ProfileBack';

export default function ProfileContainer() {
  const [isFlipped, setFlipped] = useState<Boolean>(false);
  function handleCardRotate(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    setFlipped(!isFlipped);
    return;
  }

  return (
    <div className={`profile-container`} onClick={handleCardRotate}>
      <div className={`profile-card-flip-ani ${isFlipped ? 'flipped' : ''}`}>
        <ProfileFront handleCardRotate={handleCardRotate} />
        <ProfileBack handleCardRotate={handleCardRotate} />
      </div>
    </div>
  );
}
