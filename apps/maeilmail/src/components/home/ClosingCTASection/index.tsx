import { recordGAEvent } from '@/common/utils/recordGAEvent';
import { closingCTAButton, closingHeading, container, innerWrapper } from './closingCTASection.css';
import { GA_EVENT } from '@/common/constants/gaEvent';
import ClosingCTABackground from '@/assets/images/closing-cta-background.png';
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
      <div style={{ position: 'relative', width: '100%', maxWidth: '110rem', marginLeft: '5rem' }}>
        <Image src={ClosingCTABackground} style={{ width: '100%', height: 'auto' }} alt="" />
        <div className={innerWrapper}>
          <h2 className={closingHeading}>
            지금까지 {subscriberCount.toLocaleString()}명의 개발자가
            <br />
            매일메일을 구독했어요!
          </h2>
          <div style={{ fontSize: '1.8rem', marginBottom: '2.5rem' }}>
            매일 쌓이는 메일이 분명 당신의 성장 발판이 될 거예요
          </div>
          <button className={closingCTAButton} onClick={handleClosingCTA}>
            면접 질문 받아보기
          </button>
        </div>
      </div>
    </section>
  );
}
