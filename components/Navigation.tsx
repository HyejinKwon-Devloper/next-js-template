'use client';
import Link from 'next/link';

import { useMobileMenuStatus } from '@/hook/useMenuHook';

export function Navigation() {
  const { isActiveMenu } = useMobileMenuStatus();

  return (
    <>
      <div className="nav-area">
        <div className="nav-area-items">
          <Link href="/">Home</Link>
        </div>
        <div className="nav-area-items">
          <Link href="/">About</Link>
        </div>
        <div className="nav-area-items">
          <Link href="/">Contact</Link>
        </div>
      </div>
      {isActiveMenu && (
        <div className="nav-area-mobile">
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/">About</Link>
              </li>
              <li>
                <Link href="/">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
