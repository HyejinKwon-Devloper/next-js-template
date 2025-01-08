import React from 'react';
import '@/components/card/card.css';

interface ICard extends React.HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  appendclassname?: string;
  variant?: 'outline';
}
export default function Card(props: ICard) {
  const { children, appendclassname, variant } = props;

  return (
    <div
      className={`card ${variant ? 'outline' : ''} ${appendclassname}`}
      {...props}
    >
      {children}
    </div>
  );
}
