import { navContentWrapper, subscribeButton, teamIntroductionLink } from './homeNav.css';
import { recordGAEvent } from '@/common/utils/recordGAEvent';
import { GA_EVENT } from '@/common/constants/gaEvent';
import { MAEIL_MAIL_INTRODUCTION_URL } from '@/common/constants/externalUrl';
import MaeilMailNav from '@/common/components/MaeilMailNav';

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
