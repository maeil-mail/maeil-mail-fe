import recordGAEvent from '@/common/utils/recordGAEvent';
import {
  heroButton,
  heroHeading,
  heroSection,
  heroSectionInnerWrapper,
  heroTypo,
} from './heroSection.css';
import { GA_EVENT } from '@/common/constants/gaEvent';

interface HeroSectionProps {
  onCTA: () => void;
}

export default function HeroSection({ onCTA }: HeroSectionProps) {
  const handleHeroButton = () => {
    recordGAEvent(GA_EVENT.homeClickMainSubscribe);
    onCTA();
  };

  return (
    <section className={heroSection}>
      <div className={heroSectionInnerWrapper}>
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
        <button className={heroButton} onClick={handleHeroButton}>
          무료 구독하기
        </button>
      </div>
    </section>
  );
}
