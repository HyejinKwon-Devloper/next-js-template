import { useMemo } from 'react';

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType?: 'outlined' | 'text' | 'filled';
  isFull?: boolean;
  disabled?: boolean;
}
export default function Button(props: IButton) {
  const {
    children,
    style = '',
    isFull = false,
    buttonType,
    type = 'button',
  } = props;

  const customClassNames = useMemo(() => {
    let customStyle = style;
    if (buttonType) {
      customStyle = `${customStyle} ${buttonType}`;
    }
    if (isFull) {
      customStyle = `${customStyle} w-full`;
    }
    return customStyle;
  }, [style, buttonType]);

  return (
    <button className={`${customClassNames}`} {...props}>
      {children}
    </button>
  );
}
