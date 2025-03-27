'use client';

import MainBannerImage from '@/assets/main-banner.jpg';
import SmallMainBannerImage from '@/assets/main-banner-small.jpg';
import localFont from 'next/font/local';
import {
  heroBackgroundImage,
  heroMainTitle,
  heroSection,
  heroSubTitle,
  heroTypo,
} from './home.css';
import { MAEIL_WIKI_INTRODUCTION_URL } from '@/common/constants/externalUrl';
import { recordGAEvent } from '@/common/utils/recordGAEvent';
import { GA_EVENT } from '@/common/constants/gaEvent';

const moneygraphyRounded = localFont({
  src: '../../fonts/MoneygraphyRounded.woff2',
  display: 'swap',
});

export default function HeroSection() {
  const onClickHero = () => {
    recordGAEvent(GA_EVENT.homeClickBanner);
  };

  return (
    <a href={MAEIL_WIKI_INTRODUCTION_URL} rel="noopener noreferrer" onClick={onClickHero}>
      <section className={heroSection}>
        <picture>
          <source
            srcSet={SmallMainBannerImage.src}
            media="(max-width: 500px)"
            className={heroBackgroundImage}
          />
          <img src={MainBannerImage.src} alt="배너 이미지" className={heroBackgroundImage} />
        </picture>
        <div className={heroTypo}>
          <p className={`${moneygraphyRounded.className} ${heroMainTitle}`}>
            우리가 함께 만들어가는 기술 면접 위키
          </p>
          <p className={heroSubTitle}>출 퇴근길 떠올린 질문 하나로 지식 나눔이 시작돼요!</p>
        </div>
      </section>
    </a>
  );
}
