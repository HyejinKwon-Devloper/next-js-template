import React from 'react';
import '@/components/card/card.css';

interface ICard extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  appendClassName?: string;
  variant?: 'outline';
}
export default function Card(props: ICard) {
  const { children, appendClassName, variant } = props;

  return (
    <div
      className={`card ${variant ? 'outline' : ''} ${appendClassName}`}
      {...props}
    >
      {children}
    </div>
  );
}
