import { navContentWrapper, subscribeButton, teamIntroductionLink } from './homeNav.css';
import recordGAEvent from '@/_utils/recordGAEvent';
import { GA_EVENT } from '@/_constants/googleAnalytics';
import { MAEIL_MAIL_INTRODUCTION_URL } from '@/_constants/externalUrl';
import MaeilMailNav from '@/_components/common/MaeilMailNav';

interface NavProps {
  onSubscribe: () => void;
}

export default function HomeNav({ onSubscribe }: NavProps) {
  const handleSubscribeButton = () => {
    recordGAEvent(GA_EVENT.homeClickNavSubscribe);
    onSubscribe();
  };

  return (
    <MaeilMailNav position="sticky">
      <div className={navContentWrapper}>
        <a
          className={teamIntroductionLink}
          href={MAEIL_MAIL_INTRODUCTION_URL}
          rel="noopener noreferrer"
        >
          팀 소개
        </a>
        <button onClick={handleSubscribeButton} className={subscribeButton}>
          무료 구독하기
        </button>
      </div>
    </MaeilMailNav>
  );
}
