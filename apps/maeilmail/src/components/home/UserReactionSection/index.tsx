import Ticker from 'framer-motion-ticker';
import ChoiImage from '@/assets/images/userReaction/choi.png';
import AtomImage from '@/assets/images/userReaction/atom.png';
import BrgndyImage from '@/assets/images/userReaction/brgndy.png';
import PrinImage from '@/assets/images/userReaction/prin.png';
import FingerHeartIcon from '@/assets/images/fingerHeart.svg';

import UserReactionItem from './UserReactionItem';
import {
  bold,
  commentContainer,
  fingerHeartIcon,
  logoFont,
  primaryColor,
  tickerWrapper,
  userReactionHeading,
  userReactionSectionContainer,
} from './userReactionSection.css';

const DURATION = 35;

export default function UserReactionSection() {
  return (
    <section className={userReactionSectionContainer}>
      <h2 className={userReactionHeading}>
        많은 개발자들이 <span className={primaryColor}>매일메일</span>을 애용하고 있습니다{' '}
        <FingerHeartIcon className={fingerHeartIcon} />
      </h2>
      <div className={tickerWrapper}>
        <Ticker duration={DURATION}>
          {USER_REACTIONS.map((user, index) => (
            <UserReactionItem key={index} {...user} />
          ))}
        </Ticker>
      </div>
    </section>
  );
}

const USER_REACTIONS = [
  {
    thumbnailImg: AtomImage,
    name: '이○늘',
    background: '컴퓨터공학과 전공생',
    commentNode: (
      <div className={commentContainer}>
        &quot;<span className={logoFont}>매일메일</span> 컨텐츠의{' '}
        <span className={bold}>꼬리질문</span> 덕분에 얕게만 알고 있던 개념들을 확실히
        이해했어요.&quot;
      </div>
    ),
  },
  {
    thumbnailImg: PrinImage,
    name: '남○범',
    background: 'Delivery Hero 최종 합격자',
    commentNode: (
      <div className={commentContainer}>
        &quot;<span className={logoFont}>매일메일</span>을
        <span className={bold}> 출퇴근 길에 쇼츠 대신</span> 하나씩 읽다보니, 실제 면접을 앞두고는
        큰 부담이 없었어요!&quot;
      </div>
    ),
  },
  {
    thumbnailImg: BrgndyImage,
    name: '전○헌',
    background: '국내 대형 테크 기업 합격자',
    commentNode: (
      <div className={commentContainer}>
        &quot;<span className={logoFont}>매일메일</span> 컨텐츠는{' '}
        <span className={bold}>면접과 유사한 톤</span>으로 작성되어 있어, 실제 기술 면접에서 큰
        도움이 되었어요!&quot;
      </div>
    ),
  },
  {
    thumbnailImg: ChoiImage,
    name: '최○웅',
    background: '국내 대형 테크 기업 합격자',
    commentNode: (
      <div className={commentContainer}>
        &quot;<span className={logoFont}>매일메일</span>이 메일로 질문을 하나씩 보내주니{' '}
        <span className={bold}>새로운 기술 인풋에 노출</span>될 수 있었어요.&quot;
      </div>
    ),
  },
];
