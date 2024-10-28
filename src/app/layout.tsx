import type { Metadata } from "next";
import "./globals.css";
import { MSWComponent } from "@/_mocks/MSWComponent";
import { Inter } from "next/font/google";
import { GoogleAnalytics } from "@next/third-parties/google";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "매일메일 - 기술 면접 질문 구독 서비스",
  description: "기술 면접 질문을 매일매일 메일로 보내드릴게요!",
  openGraph: {
    url: "https://maeil-mail.kr",
    siteName: "maeil-mail",
    images: [
      {
        url: "https://dp71rnme1p14w.cloudfront.net/maeil-mail-ogImage.png",
        width: 800,
        height: 600,
      },
    ],
    locale: "ko",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID;

  return (
    <html lang="en" className={inter.className}>
      <Head>
        <meta
          name="google-site-verification"
          content="lUmlpDPafqt0it7egKAkKdPY_csrp9UO5iefrbN-4Rk"
        />
      </Head>
      <body>
        {children}
        <div id="portal"></div>
        <MSWComponent />
        {gaId ? <GoogleAnalytics gaId={gaId} /> : null}
      </body>
    </html>
  );
}
