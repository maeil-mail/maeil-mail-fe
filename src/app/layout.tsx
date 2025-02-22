import Footer from '@/_components/common/Footer/Footer';
import Providers from './providers';
import { MSWComponent } from '@/_mocks/MSWComponent';

import './globals.css';
import localFont from 'next/font/local';
import { myStyle } from '@/_styles/vars.css';
import { main, wrapper } from './layout.css';
import Head from 'next/head';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={pretendard.className}>
      <head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
        />
      </head>
      <body className={myStyle}>
        <div className={wrapper}>
          <Providers>
            <main className={main}>{children}</main>
          </Providers>
        </div>
        <div id="modal-root" />
        <MSWComponent />
      </body>
    </html>
  );
}
