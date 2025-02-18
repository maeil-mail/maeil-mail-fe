import type { Metadata } from 'next';
import { GoogleAnalytics } from '@next/third-parties/google';
import Footer from '@/_components/common/Footer/Footer';
import Providers from './providers';
import FRONTEND_BASE_URL from '@/_constants/frontendBaseUrl';
import { MSWComponent } from '@/_mocks/MSWComponent';

import './globals.css';
import localFont from 'next/font/local';
import { myStyle } from '@/_styles/vars.css';
import { main, wrapper } from './layout.css';

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export const metadata: Metadata = {
  title: '매일메일 - 기술 면접 질문 구독 서비스',
  description: '기술 면접 질문을 매일매일 메일로 보내드릴게요!',
  openGraph: {
    url: FRONTEND_BASE_URL,
    siteName: 'maeil-mail',
    images: [
      {
        url: 'https://dp71rnme1p14w.cloudfront.net/maeil-mail-ogImage.png',
        width: 800,
        height: 600,
      },
    ],
    locale: 'ko',
    type: 'website',
  },
  icons: {
    icon: '/favicon.ico',
  },
  verification: {
    google: 'lUmlpDPafqt0it7egKAkKdPY_csrp9UO5iefrbN-4Rk',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={pretendard.className}>
      <body className={myStyle}>
        <div className={wrapper}>
          <Providers>
            <main className={main}>{children}</main>
          </Providers>
          <Footer />
        </div>

        <div id="modal-root" />
        <MSWComponent />
        {gaId && <GoogleAnalytics gaId={gaId} />}
      </body>
    </html>
  );
}
