'use client';
import { useMobileMenuStatus } from '@/hook/useMenuHook';
import { useTheme } from 'next-themes';
import Image from 'next/image';

type AppBarProps = {
  children?: React.ReactNode;
};
export default function AppBar(props: AppBarProps) {
  const { children } = props;
  const { theme, setTheme } = useTheme();
  const { isActiveMenu, toggleOpenStatus } = useMobileMenuStatus();

  function handleDarkMode() {
    return setTheme(theme === 'light' ? 'dark' : 'light');
  }

  return (
    <div className="appbar">
      <div className="appbar-profile appbar-ico">
        <Image
          src="/ico/account_circle_black.svg"
          alt="account profile"
          className="imgLight"
          width={28}
          height={28}
          priority
        />
        <Image
          src="/ico/account_circle_white.svg"
          alt="account profile"
          className="imgDark"
          width={28}
          height={28}
          priority
        />
      </div>
      <div className="appbar-title">
        <h1>Hello Jin's World ❤</h1>
      </div>
      {children && children}
      <div className="appbar-ico">
        <button onClick={handleDarkMode}>
          <Image
            src="/ico/light_mode_black.svg"
            alt="light mode"
            className="imgLight hover:opacity-25 hover:animate-spin py-2"
            width={20}
            height={20}
            priority
          />
          <Image
            src="/ico/dark_mode_black.svg"
            alt="dark mode"
            className="dark:dark-invert imgDark hover:opacity-25 hover:animate-spin py-2"
            width={20}
            height={20}
            priority
          />
        </button>
      </div>
      <div className="appbar-ico appbar-nav">
        {isActiveMenu ? (
          <button onClick={toggleOpenStatus}>
            <Image
              src="/ico/close_black.svg"
              alt="Menu Close Button"
              className="imgLight"
              width={26}
              height={26}
              priority
            />
            <Image
              src="/ico/close_white.svg"
              alt="Menu Close Button"
              className="imgDark"
              width={26}
              height={26}
              priority
            />
          </button>
        ) : (
          <button onClick={toggleOpenStatus}>
            <Image
              src="/ico/menu_black.svg"
              alt="Menu Nav"
              className="imgLight"
              width={28}
              height={28}
              priority
            />
            <Image
              src="/ico/menu_white.svg"
              alt="Menu Nav"
              className="imgDark"
              width={28}
              height={28}
              priority
            />
          </button>
        )}
      </div>
    </div>
  );
}
