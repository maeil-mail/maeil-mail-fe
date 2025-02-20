'use client';

import MainBannerImage from '@/_assets/images/maeilWiki/main-banner.jpg';
import SmallMainBannerImage from '@/_assets/images/maeilWiki/main-banner-small.jpg';
import localFont from 'next/font/local';
import {
  heroBackgroundImage,
  heroMainTitle,
  heroSection,
  heroSubTitle,
  heroTypo,
} from './home.css';

const moneygraphyRounded = localFont({
  src: '../../../fonts/MoneygraphyRounded.woff2',
  display: 'swap',
});

export default function HeroSection() {
  return (
    <section className={heroSection}>
      <picture>
        <source
          srcSet={SmallMainBannerImage.src}
          media="(max-width: 500px)"
          className={heroBackgroundImage}
        />
        <img src={MainBannerImage.src} alt="" className={heroBackgroundImage} />
      </picture>
      <div className={heroTypo}>
        <p className={`${moneygraphyRounded.className} ${heroMainTitle}`}>
          우리가 함께 만들어가는 기술 면접 위키
        </p>
        <p className={heroSubTitle}>출 퇴근길 떠올린 질문 하나로 지식 나눔이 시작돼요!</p>
      </div>
    </section>
  );
}
