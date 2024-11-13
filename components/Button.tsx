'use client';

import { ButtonHTMLAttributes, DetailedHTMLProps, useMemo } from 'react';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttontype?: 'outlined' | 'text' | 'filled';
  isfull?: boolean;
  disabled?: boolean;
}
export default function Button(props: IButton) {
  const { children, isfull = false, buttontype, type = 'button' } = props;

  const customClassNames = useMemo(() => {
    let customStyle = props.className ?? '';
    if (buttontype) {
      customStyle = `${customStyle} ${buttontype}`;
    }
    if (isfull) {
      customStyle = `${customStyle} w-full`;
    }
    return customStyle;
  }, [props, buttontype]);

  const finalProps = useMemo(() => {
    const tempProps = { ...props };
    delete tempProps.isfull;
    delete tempProps.buttontype;
    delete tempProps.children;
    return tempProps;
  }, [customClassNames]);

  return (
    <button className={`${customClassNames}`} {...(finalProps && finalProps)}>
      {children}
    </button>
  );
}
