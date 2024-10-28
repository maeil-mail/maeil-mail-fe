import recordGAEvent from "@/_utils/recordGAEvent";
import { closingCTAButton, closingHeading, container, innerWrapper } from "./closingCTASection.css";
import { GA_EVENT } from "@/_constants/googleAnalytics";

export default function ClosingCTA({ onCTA }: { onCTA: () => void }) {
  const handleClosingCTA = () => {
    recordGAEvent(GA_EVENT.homeClickBottomSubscribe);
    onCTA();
  };

  return (
    <section className={container}>
      <div className={innerWrapper}>
        <h2 className={closingHeading}>
          오늘부터 기술 면접 걱정은
          <br />
          매일메일에게 던져 버리세요!
        </h2>
        <button className={closingCTAButton} onClick={handleClosingCTA}>
          면접 질문 받아보기
        </button>
      </div>
    </section>
  );
}
