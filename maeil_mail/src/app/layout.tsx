import type { Metadata } from 'next';
import './globals.css';
import { MSWComponent } from '@/_mocks/MSWComponent';
import MainWrapper from '@/_components/common/Wrapper/MainWrapper';
import ContentWrapper from '@/_components/common/Wrapper/ContentWrapper';
import ToastContainer from '@/_components/common/Toast/ToastContainer';
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: '매일메일',
  description: '매일 무작위의 면접 질문을 보내드리는 매일메일이에요',
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
