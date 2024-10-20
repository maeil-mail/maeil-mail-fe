import type { Metadata } from 'next';
import './globals.css';
import { MSWComponent } from '@/_mocks/MSWComponent';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '매일메일 - 기술 면접 질문 구독 서비스',
  description: '기술 면접 질문을 매일매일 메일로 보내드릴게요!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        {children}
        <div id="portal"></div>
        <MSWComponent />
      </body>
    </html>
  );
}
