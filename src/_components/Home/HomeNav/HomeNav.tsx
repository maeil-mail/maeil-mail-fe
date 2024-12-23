import Nav from '@/_components/common/Nav/Nav';
import { navContentWrapper, subscribeButton, teamIntroductionLink } from './homeNav.css';
import recordGAEvent from '@/_utils/recordGAEvent';
import { GA_EVENT } from '@/_constants/googleAnalytics';
import { TEAM_INTRODUCTION_URL } from '@/_constants/externalUrl';

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
        <div className={navContentWrapper}>
          <a className={teamIntroductionLink} href={TEAM_INTRODUCTION_URL} target="_blank">
            팀 소개
          </a>
          <button onClick={handleSubscribeButton} className={subscribeButton}>
            무료 구독하기
          </button>
        </div>
      }
      position="sticky"
    />
  );
}
