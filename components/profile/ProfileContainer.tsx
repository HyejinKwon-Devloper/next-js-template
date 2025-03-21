'use client';
import { useState } from 'react';

import '@/components/profile/profile.css';
import ProfileFront from '@/components/profile/ProfileFront';
import ProfileBack from '@/components/profile/ProfileBack';

export default function ProfileContainer() {
  const [isFlipped, setFlipped] = useState<boolean>(false);
  function handleCardRotate(
    event:
      | React.MouseEvent<HTMLDivElement>
      | React.KeyboardEvent<HTMLDivElement>,
  ) {
    setFlipped(!isFlipped);
    event.stopPropagation();
  }

  return (
    /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */
    <div
      className="profile-container"
      onClick={handleCardRotate}
      onKeyDown={handleCardRotate}
    >
      <div className={`profile-card-flip-ani ${isFlipped ? 'flipped' : ''}`}>
        <ProfileFront handleCardRotate={handleCardRotate} />
        <ProfileBack handleCardRotate={handleCardRotate} />
      </div>
    </div>
  );
}
