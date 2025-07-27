import { recordGAEvent } from '@/common/utils/recordGAEvent';
import {
  closingCTAButton,
  closingHeading,
  container,
  innerWrapper,
  imageContainer,
  backgroundImage,
  backgroundImageMobile,
  descriptionText,
} from './closingCTASection.css';
import { GA_EVENT } from '@/common/constants/gaEvent';
import ClosingCTABackground from '@/assets/images/closing-cta-background.png';
import ClosingCTABackgroundMobile from '@/assets/images/closing-cta-background-mobile.png';
import Image from 'next/image';

interface ClosingCTAProps {
  subscriberCount: number;
  onCTA: () => void;
}

export default function ClosingCTA({ subscriberCount, onCTA }: ClosingCTAProps) {
  const handleClosingCTA = () => {
    recordGAEvent(GA_EVENT.homeClickBottomSubscribe);
    onCTA();
  };

  return (
    <section className={container}>
      <div className={imageContainer}>
        <Image src={ClosingCTABackground} className={backgroundImage} alt="" />
        <Image src={ClosingCTABackgroundMobile} className={backgroundImageMobile} alt="" />
        <div className={innerWrapper}>
          <h2 className={closingHeading}>
            지금까지 {subscriberCount.toLocaleString()}명의 개발자가
            <br />
            매일메일을 구독했어요!
          </h2>
          <div className={descriptionText}>매일 쌓이는 메일이 분명 성장 발판이 될 거예요</div>
          <button className={closingCTAButton} onClick={handleClosingCTA}>
            무료 구독하기
          </button>
        </div>
      </div>
    </section>
  );
}
