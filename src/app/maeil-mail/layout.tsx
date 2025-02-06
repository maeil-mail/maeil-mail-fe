import FRONTEND_BASE_URL from '@/_constants/frontendBaseUrl';
import { Metadata } from 'next';
import { PropsWithChildren } from 'react';

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

export default function Layout({ children }: PropsWithChildren) {
  return children;
}
