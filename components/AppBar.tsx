import Image from 'next/image';
export default function AppBar() {
  return (
    <div className="appbar">
      <div className="appbar-profile">
        <Image
          src="/ico/account_circle_black.svg"
          alt="account profile"
          className="imgLight mx-2"
          width={28}
          height={28}
          priority
        />
        <Image
          src="/ico/account_circle_white.svg"
          alt="account profile"
          className="imgDark mx-2"
          width={28}
          height={28}
          priority
        />
      </div>
      <div className="appbar-title">
        <h1>appbar title</h1>
      </div>
      <div className="appbar-ico">
        <span className="inline-flex items-center">
          <Image
            src="/ico/dark_mode_black.svg"
            alt="dark/light mode explain icon"
            className="dark:dark-invert mr-1"
            width={20}
            height={20}
            priority
          />
          <Image
            src="/ico/toggle_off_black.svg"
            alt="Dark Mode Off toggle"
            className="imgLight"
            width={28}
            height={28}
            priority
          />
          <Image
            src="/ico/toggle_on_white.svg"
            alt="Dark Mode On toggle"
            className="imgDark"
            width={28}
            height={28}
            priority
          />
        </span>
      </div>
      <div className="appbar-ico">
        <Image
          src="/ico/menu_black.svg"
          alt="Menu Nav"
          className="dark:dark-invert mx-2"
          width={26}
          height={26}
          priority
        />
      </div>
    </div>
  );
}
