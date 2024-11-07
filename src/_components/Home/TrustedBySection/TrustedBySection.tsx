import Ticker from 'framer-motion-ticker';
import {
  fingerHeartIcon,
  companyLogo,
  lineLogo,
  primaryColor,
  tickerWrapper,
  trustedByHeading,
  trustedBySection,
} from './trustedBySection.css';
import FingerHeartIcon from '@/_assets/images/fingerHeart.svg';
import NaverLogo from '@/_assets/images/companyLogo/naver.svg';
import KakaoLogo from '@/_assets/images/companyLogo/kakao.svg';
import LineLogo from '@/_assets/images/companyLogo/line.svg';
import CoupangLogo from '@/_assets/images/companyLogo/coupang.svg';
import BaeminLogo from '@/_assets/images/companyLogo/baemin.svg';
import DangnLogo from '@/_assets/images/companyLogo/dangn.svg';
import TossLogo from '@/_assets/images/companyLogo/toss.svg';

const DURATION = 35;

export default function TrustedBy() {
  return (
    <section className={trustedBySection}>
      <h2 className={trustedByHeading}>
        앞으로 유수의 기업에 합격할 예정인
        <br />
        개발자들이 <span className={primaryColor}>매일메일</span>을 애용하고 있습니다{' '}
        <FingerHeartIcon className={fingerHeartIcon} />
      </h2>
      <div className={tickerWrapper}>
        <Ticker duration={DURATION}>
          <NaverLogo className={companyLogo} />
          <KakaoLogo className={companyLogo} />
          <LineLogo className={`${companyLogo} ${lineLogo}`} />
          <CoupangLogo className={companyLogo} />
          <BaeminLogo className={companyLogo} />
          <DangnLogo className={companyLogo} />
          <TossLogo className={companyLogo} />
        </Ticker>
      </div>
    </section>
  );
}
