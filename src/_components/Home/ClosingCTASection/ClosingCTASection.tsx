import recordGAEvent from "@/_utils/recordGAEvent";
import { closingCTAButton, closingHeading, container, innerWrapper } from "./closingCTASection.css";
import { GA_EVENT } from "@/_constants/googleAnalytics";
import { useEffect, useState } from "react";
import { getTotalSentQuestionCount } from "@/_apis/statistics";

export default function ClosingCTA({ onCTA }: { onCTA: () => void }) {
  const [subscriberCount, setSubscriberCount] = useState<number>(100);

  const handleClosingCTA = () => {
    recordGAEvent(GA_EVENT.homeClickBottomSubscribe);
    onCTA();
  };

  useEffect(() => {
    const fetchSubscriberCount = async () => {
      const count = await getTotalSentQuestionCount();
      setSubscriberCount(count);
    };
    fetchSubscriberCount();
  }, []);

  return (
    <section className={container}>
      <div className={innerWrapper}>
        <h2 className={closingHeading}>
          이미 {subscriberCount?.toLocaleString()}명의 개발자가
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
