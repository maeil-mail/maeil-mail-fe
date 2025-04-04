import '@maeil/theme/styles';
import '@maeil/ui/styles';
import './globals.css';

import { Metadata } from 'next';
import localFont from 'next/font/local';
import { GoogleAnalytics } from '@next/third-parties/google';
import type { ReactNode } from 'react';

import { myStyle } from '@maeil/theme';
import { Footer } from '@maeil/ui';

import Providers from './providers';
import MaeilWikiNav from '@/common/components/MaeilWikiNav';
import {
  MAEIL_WIKI_GOOGLE_FORM_URL,
  MAEIL_WIKI_INTRODUCTION_URL,
} from '@/common/constants/externalUrl';
import { content, main, wrapper } from './layout.css';

export const metadata: Metadata = {
  title: '매일위키 - 기술 면접 커뮤니티',
  description: '함께 기술 면접의 어려움을 극복해봐요!',
  openGraph: {
    url: 'https://wiki.maeil-mail.kr',
    siteName: 'maeil-wiki',
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
    icon: '/wikiFavicon.ico',
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

export default function Layout({ children }: { children: ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_MAEIL_WIKI_GA_ID;

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
              <div>
                {/* <MaeilWikiNav /> */}
                <div className={content}>{children}</div>
                <Footer
                  serviceName="매일위키"
                  introduceUrl={MAEIL_WIKI_INTRODUCTION_URL}
                  feedbackUrl={MAEIL_WIKI_GOOGLE_FORM_URL.service}
                />
                {gaId && <GoogleAnalytics gaId={gaId} />}
              </div>
            </main>{' '}
          </Providers>
        </div>
        <div id="modal-root" />
      </body>
    </html>
  );
}
