import { atom } from 'jotai';

export const menuState = atom<boolean>(false);

export const readMenuState = atom((get) => get(menuState));
export const menuWithToggle = atom(
  (get) => get(menuState),
  (get, set) => {
    const currentValue = get(menuState);
    set(menuState, !currentValue);
  },
);
