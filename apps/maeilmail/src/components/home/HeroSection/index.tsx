import {
  heroFigure1,
  heroFigure2,
  heroFigure3,
  heroFigure4,
  heroFigure5,
  heroSection,
  heroSubtitle,
  heroTitle,
} from './heroSection.css';
import MailFigure from '@/assets/images/heroSection/hero-mail.svg';
import HeroFigure1 from '@/assets/images/heroSection/hero-figure-1.svg';
import HeroFigure2 from '@/assets/images/heroSection/hero-figure-2.svg';
import HeroFigure3 from '@/assets/images/heroSection/hero-figure-3.svg';
import HeroFigure4 from '@/assets/images/heroSection/hero-figure-4.svg';
import HeroFigure5 from '@/assets/images/heroSection/hero-figure-5.svg';

import localFont from 'next/font/local';

const poppinsSemiBold = localFont({
  src: '../../../fonts/PoppinsSemibold.woff2',
  display: 'swap',
});

export default function HeroSection() {
  return (
    <section className={heroSection}>
      <HeroFigure1 className={heroFigure1} />
      <HeroFigure2 className={heroFigure2} />
      <HeroFigure3 className={heroFigure3} />
      <HeroFigure4 className={heroFigure4} />
      <HeroFigure5 className={heroFigure5} />
      <div style={{ width: '100%', maxWidth: '109.1rem', margin: '0 auto', position: 'relative' }}>
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
          }}
        >
          <div className={heroSubtitle}>개발자를 위한 기술 면접 메일링 서비스</div>
          <div className={`${heroTitle} ${poppinsSemiBold.className}`}>Maeil Mail</div>
        </div>
        <MailFigure />
      </div>
      {/* <div className={heroSectionInnerWrapper}>
        <h1 className={heroHeading}>
          기술 면접 질문을 매일매일
          <br />
          메일로 보내드릴게요!
        </h1>
        <p className={heroTypo}>
          따로 시간 내지 않아도,
          <br />
          지하철에서 하나씩 읽다보면 면접 걱정이 사라질 거예요.
        </p>

      </div> */}
    </section>
  );
}
