import MaeilWikiNav from '@/_components/common/MaeilWikiNav';
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
  return (
    <div>
      <MaeilWikiNav />
      {children}
    </div>
  );
}
