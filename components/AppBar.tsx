'use client';
import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function AppBar() {
  const { theme, setTheme } = useTheme();

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
      <div className="appbar-ico">
        <button onClick={handleDarkMode}>
          <Image
            src="/ico/light_mode_black.svg"
            alt="light mode"
            className="imgLight hover:opacity-25 hover:animate-spin"
            width={20}
            height={20}
            priority
          />
          <Image
            src="/ico/dark_mode_black.svg"
            alt="dark mode"
            className="dark:dark-invert imgDark hover:opacity-25 hover:animate-spin"
            width={20}
            height={20}
            priority
          />
        </button>
      </div>
      <div className="appbar-ico">
        <Image
          src="/ico/menu_black.svg"
          alt="Menu Nav"
          className="imgLight"
          width={26}
          height={26}
          priority
        />
        <Image
          src="/ico/menu_white.svg"
          alt="Menu Nav"
          className="imgDark"
          width={26}
          height={26}
          priority
        />
      </div>
    </div>
  );
}
