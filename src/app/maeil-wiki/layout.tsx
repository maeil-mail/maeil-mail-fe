import Footer from '@/_components/common/Footer/Footer';
import MaeilWikiNav from '@/_components/common/MaeilWikiNav';
import { MAEIL_WIKI_GOOGLE_FORM_URL, MAEIL_WIKI_INTRODUCTION_URL } from '@/_constants/externalUrl';
import { GoogleAnalytics } from '@next/third-parties/google';
import { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '매일위키 - 기술 면접 질문 커뮤니티',
  description: '질문 하나로 지식의 공유가 시작돼요!',
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

export default function Layout({ children }: { children: ReactNode }) {
  const gaId = process.env.NEXT_PUBLIC_MAEIL_WIKI_GA_ID;

  return (
    <div>
      <MaeilWikiNav />
      {children}
      <Footer
        serviceName="매일위키"
        introduceUrl={MAEIL_WIKI_INTRODUCTION_URL}
        feedbackUrl={MAEIL_WIKI_GOOGLE_FORM_URL.service}
      />
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </div>
  );
}
