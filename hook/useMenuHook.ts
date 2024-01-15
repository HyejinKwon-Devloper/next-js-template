import { menuWithToggle } from '@/store/globlaState';
import { useAtom } from 'jotai';

export function useMobileMenuStatus() {
  const [isActiveMenu, toggleMenu] = useAtom(menuWithToggle);

  function toggleOpenStatus() {
    toggleMenu();
    return;
  }

  return { isActiveMenu, toggleOpenStatus };
}
