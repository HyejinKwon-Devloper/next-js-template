'use client';
import { menuState } from '@/store/globlaState';
import { useAtomValue } from 'jotai';

export function Navigation() {
  const isActiveMenu = useAtomValue(menuState);

  return (
    <>
      <div className="nav-area">
        <div className="nav-area-items">
          <a href="#">Home</a>
        </div>
        <div className="nav-area-items">
          <a href="#">About</a>
        </div>
        <div className="nav-area-items">
          <a href="#">Contact</a>
        </div>
      </div>
      {isActiveMenu && (
        <div className="nav-area-mobile">
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
