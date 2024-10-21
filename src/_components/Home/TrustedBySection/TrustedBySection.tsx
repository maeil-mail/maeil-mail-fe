import Ticker from "framer-motion-ticker";
import {
  baeminLogo,
  baeminSmallFont,
  coupangBlue,
  coupangBrown,
  coupangGreen,
  coupangLogo,
  coupangRed,
  coupangYellow,
  dangnLogo,
  fingerHeartIcon,
  kakaoLogo,
  lineLogo,
  logoMargin,
  naverLetterA,
  naverLogo,
  primaryColor,
  tickerWrapper,
  tossLogo,
  trustedByHeading,
  trustedBySection,
} from "./trustedBySection.css";
import FingerHeartIcon from "@/_assets/images/fingerHeart.svg";

const DURATION = 35;

export default function TrustedBy() {
  return (
    <section className={trustedBySection}>
      <h2 className={trustedByHeading}>
        앞으로 유수의 기업에 합격할 예정인
        <br />
        개발자들이 <span className={primaryColor}>매일메일</span>을 애용하고 있습니다{" "}
        <FingerHeartIcon className={fingerHeartIcon} />
      </h2>
      <div className={tickerWrapper}>
        <Ticker duration={DURATION}>
          <p className={`${naverLogo} ${logoMargin}`}>
            N<span className={naverLetterA}>A</span>VER
          </p>
          <p className={`${kakaoLogo} ${logoMargin}`}>kakao</p>
          <p className={`${lineLogo} ${logoMargin}`}>LINE</p>
          <p className={`${coupangLogo} ${logoMargin}`}>
            <span className={coupangBrown}>cou</span>
            <span className={coupangRed}>p</span>
            <span className={coupangYellow}>a</span>
            <span className={coupangGreen}>n</span>
            <span className={coupangBlue}>g</span>
          </p>
          <p className={`${baeminLogo} ${logoMargin}`}>
            배달<span className={baeminSmallFont}>의</span>민족
          </p>
          <p className={`${dangnLogo} ${logoMargin}`}>당근</p>
          <p className={`${tossLogo} ${logoMargin}`}>toss</p>
        </Ticker>
      </div>
    </section>
  );
}
