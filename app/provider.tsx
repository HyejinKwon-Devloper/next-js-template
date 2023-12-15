'use client';

import { Provider } from 'jotai';
import { DevTools } from 'jotai-devtools';
import { ThemeProvider } from 'next-themes';
import { ThemeProviderProps } from 'next-themes/dist/types';

export default function Providers({
  children,
  ...pageProps
}: ThemeProviderProps) {
  return (
    <ThemeProvider {...pageProps} attribute="class">
      <Provider>
        <DevTools />
        {children}
      </Provider>
    </ThemeProvider>
  );
}
