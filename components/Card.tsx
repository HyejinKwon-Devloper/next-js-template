import React from 'react';

interface ICard {
  children: React.ReactNode;
  variant?: 'outline';
}
export default function Card(props: ICard) {
  const { children, variant } = props;

  return <div className={`card ${variant ? 'outline' : ''}`}>{children}</div>;
}
