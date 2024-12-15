import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Providers from './provider';
import AppBar from '@/components/AppBar';
import { Navigation } from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Hello Jin's World",
  description: 'Next.js와 친해지기 프로젝트입니다!',
  viewport:
    'width=device-width, initial-scale=1.0, maximum-scale=1, user-scalable=no',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Providers>
          <AppBar>
            <Navigation />
          </AppBar>
          {children}
        </Providers>
      </body>
    </html>
  );
}
