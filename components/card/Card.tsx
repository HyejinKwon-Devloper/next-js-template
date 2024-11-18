import React from 'react';
import '@/components/card/card.css';

interface ICard extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  appendclassName?: string;
  variant?: 'outline';
}
export default function Card(props: ICard) {
  const { children, appendclassName, variant } = props;

  return (
    <div
      className={`card ${variant ? 'outline' : ''} ${appendclassName}`}
      {...props}
    >
      {children}
    </div>
  );
}
