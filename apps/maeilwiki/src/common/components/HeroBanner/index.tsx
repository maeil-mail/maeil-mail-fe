'use client';

import MainBannerImage from '@/assets/main-banner.jpg';
import SmallMainBannerImage from '@/assets/main-banner-small.jpg';
import localFont from 'next/font/local';
import {
  heroBackgroundImage,
  heroMainTitle,
  heroBanner,
  heroSubTitle,
  heroTypo,
} from './heroBanner.css';
import { MAEIL_WIKI_INTRODUCTION_URL } from '@/common/constants/externalUrl';
import { recordGAEvent } from '@/common/utils/recordGAEvent';
import { GA_EVENT } from '@/common/constants/gaEvent';

const moneygraphyRounded = localFont({
  src: '../../../fonts/MoneygraphyRounded.woff2',
  display: 'swap',
});

interface HeroBannerProps {
  subtitle?: string;
}

export default function HeroBanner({ subtitle }: HeroBannerProps) {
  const onClickHero = () => {
    recordGAEvent(GA_EVENT.homeClickBanner);
  };

  return (
    <a href={MAEIL_WIKI_INTRODUCTION_URL} rel="noopener noreferrer" onClick={onClickHero}>
      <section className={heroBanner}>
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
            우리가 함께 만들어가는 매일위키
          </p>
          <p className={heroSubTitle}>{subtitle}</p>
        </div>
      </section>
    </a>
  );
}
