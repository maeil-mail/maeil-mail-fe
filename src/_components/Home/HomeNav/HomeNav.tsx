import Nav from "@/_components/common/Nav/Nav";
import { subscribeButton } from "./homeNav.css";
import recordGAEvent from "@/_utils/recordGAEvent";
import { GA_EVENT } from "@/_constants/googleAnalytics";

interface NavProps {
  onSubscribe: () => void;
}

export default function HomeNav({ onSubscribe }: NavProps) {
  const handleSubscribeButton = () => {
    recordGAEvent(GA_EVENT.homeClickNavSubscribe);
    onSubscribe();
  };

  return (
    <Nav
      RightSide={
        <button onClick={handleSubscribeButton} className={subscribeButton}>
          무료 구독하기
        </button>
      }
      position="sticky"
    />
  );
}
