'use client';
import { useState } from 'react';

import ProfileFront from '@/app/home/left-side/profile/ProfileFront';
import ProfileBack from '@/app/home/left-side/profile/ProfileBack';
import Statistics from '@/app/home/left-side/statistics/Statistics';

import '@/app/home/left-side/profile/profile.css';
import '@/app/home/left-side/statistics/statistics.css';

export default function LeftSideContainer() {
  const [isFlipped, setFlipped] = useState<Boolean>(false);
  function handleCardRotate(event: React.MouseEvent<HTMLDivElement>) {
    event.stopPropagation();
    setFlipped(!isFlipped);
    return;
  }

  return (
    <div className={`profile-container`}>
      <div
        className={`profile-card-flip-ani ${isFlipped ? 'flipped' : ''}`}
        onClick={handleCardRotate}
      >
        <ProfileFront handleCardRotate={handleCardRotate} />
        <ProfileBack handleCardRotate={handleCardRotate} />
      </div>
      <Statistics />
    </div>
  );
}
