import { heroSection } from './heroSection.css';
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
      <HeroFigure1 style={{ position: 'absolute', width: '20rem', left: 79, top: 95 }} />
      <HeroFigure2 style={{ position: 'absolute', width: '22rem', left: 61, bottom: 230 }} />
      <HeroFigure3 style={{ position: 'absolute', width: '24rem', right: 54, top: 119 }} />
      <HeroFigure4 style={{ position: 'absolute', width: '28rem', right: 293, bottom: 0 }} />
      <HeroFigure5 style={{ position: 'absolute', width: '19rem', right: 0, bottom: 100 }} />
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
          <div
            style={{
              color: '#F7FBFC',
              fontSize: '2.8rem',
              letterSpacing: '-0.2rem',
              lineHeight: '1.5',
            }}
          >
            개발자를 위한 기술 면접 메일링 서비스
          </div>
          <div
            className={poppinsSemiBold.className}
            style={{
              color: '#ffffff',
              fontSize: '17rem',
              whiteSpace: 'nowrap',
              letterSpacing: '-1.2rem',
              lineHeight: 1.4,
            }}
          >
            Maeil Mail
          </div>
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
