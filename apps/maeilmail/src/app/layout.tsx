import '@maeil/theme/styles';
import '@maeil/ui/styles';
import './globals.css';

import { GoogleAnalytics } from '@next/third-parties/google';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

import { Footer } from '@maeil/ui';
import { myStyle } from '@maeil/theme';
import localFont from 'next/font/local';

import {
  MAEIL_MAIL_GOOGLE_FORM_URL,
  MAEIL_MAIL_INTRODUCTION_URL,
} from '@/common/constants/externalUrl';
import { FRONTEND_BASE_URL } from '@/common/constants/frontendBaseUrl';
import Providers from './providers';
import { main, wrapper } from './layout.css';

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

const pretendard = localFont({
  src: '../fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
});

export default function Layout({ children }: PropsWithChildren) {
  const gaId = process.env.NEXT_PUBLIC_MAEIL_MAIL_GA_ID;

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
            <main className={main}>
              {' '}
              {children}
              <Footer
                serviceName="매일메일"
                introduceUrl={MAEIL_MAIL_INTRODUCTION_URL}
                feedbackUrl={MAEIL_MAIL_GOOGLE_FORM_URL.service}
              />
              {gaId && <GoogleAnalytics gaId={gaId} />}
            </main>
          </Providers>
        </div>
        <div id="modal-root" />
        {/* <MSWComponent /> */}
      </body>
    </html>
  );
}
