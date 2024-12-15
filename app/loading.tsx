import Image from 'next/image';

export default function Loading() {
  return (
    <div className="sub-container">
      <Image
        className="loading imgLight"
        src="/ico/loading_black.svg"
        alt="loading"
        width={24}
        height={24}
      />
      <Image
        className="loading imgDark"
        src="/ico/loading_white.svg"
        alt="loading"
        width={24}
        height={24}
      />
    </div>
  );
}
