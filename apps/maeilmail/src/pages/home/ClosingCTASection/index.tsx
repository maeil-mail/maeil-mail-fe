import recordGAEvent from '@/common/utils/recordGAEvent';
import { closingCTAButton, closingHeading, container, innerWrapper } from './closingCTASection.css';
import { GA_EVENT } from '@/common/constants/gaEvent';

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
      <div className={innerWrapper}>
        <h2 className={closingHeading}>
          이미 {subscriberCount.toLocaleString()}명의 개발자가
          <br />
          매일메일을 구독하고 있습니다.
        </h2>
        <button className={closingCTAButton} onClick={handleClosingCTA}>
          면접 질문 받아보기
        </button>
      </div>
    </section>
  );
}
