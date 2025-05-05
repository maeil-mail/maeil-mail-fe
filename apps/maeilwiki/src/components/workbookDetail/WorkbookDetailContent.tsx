'use client';

import { Button } from '@maeil/ui';
import DifficultyIndicator from '@/common/components/DifficultyIndicator';
import {
  buttonsContainer,
  shareButton,
  shareButtonInnerWrapper,
  shareIcon,
  shareText,
  solveButton,
  solvedCountTag,
  workbookDetailText,
  workbookInfo,
  workbookInfoField,
  workbookInfoLine,
  workbookInfoValue,
  workbookTitleText,
} from './workbookDetail.css';
import ShareIcon from '@/assets/share.svg';
import { shareCurrentUrl } from '@/common/utils/shareCurrentUrl';
import { calculateElapsedTime } from '@/common/utils/calculateElapsedTime';

const MOCK = {
  workbookTitle:
    '자바스크립트 문제집 어쩌구 자바스크립트 문제집 어쩌구 자바스크립트 문제집 어쩌구 자바스크립트 문제집 어쩌구 자바스크립트 문제집 어쩌구 자바스크립트 문제집 어쩌구 자바스크립트 문제집 어쩌구 자바스크립트 문제집 어쩌구 자바스크립트 문제집 어쩌구',
  difficultyLevel: 3,
  category: 'backend',
  workbookDetail:
    '자바스크립트 문제집입니다. 자바스크립트 문제집입니다. 자바스크립트 문제집입니다. 자바스크립트 문제집입니다. 자바스크립트 문제집입니다. 자바스크립트 문제집입니다. 자바스크립트 문제집입니다. 자바스크립트 문제집입니다. 자바스크립트 문제집입니다. 자바스크립트 문제집입니다.',
  owner: {
    id: 2,
    profileImage: 'string',
    name: '박한영(Ryan)',
    github: 'string',
  },
  createdAt: '2025-05-04',
  timeLimit: 15,
  questionCount: 3,
  solvedCount: 345,
};

export interface WorkbookDetailContentProps {}

export default function WorkbookDetailContent(props: WorkbookDetailContentProps) {
  const onClickSolve = () => {
    alert('곧 출시될 기능입니다. 출시 후 별도 공지 메일을 드릴 예정입니다.');
  };

  return (
    <div>
      <div className={solvedCountTag}>총 {MOCK.solvedCount}회 시도되었어요!</div>
      <h1 className={workbookTitleText}>{MOCK.workbookTitle}</h1>
      <p className={workbookDetailText}>{MOCK.workbookDetail}</p>
      <section className={workbookInfo}>
        <div className={workbookInfoLine}>
          <div className={workbookInfoField}>난이도</div>
          <DifficultyIndicator difficulty={MOCK.difficultyLevel} />
        </div>
        <div className={workbookInfoLine}>
          <div className={workbookInfoField}>문항 수</div>
          <div className={workbookInfoValue}>{MOCK.questionCount}문항</div>
        </div>
        <div className={workbookInfoLine}>
          <div className={workbookInfoField}>제한시간</div>
          <div className={workbookInfoValue}>{MOCK.timeLimit}분</div>
        </div>
        <div className={workbookInfoLine}>
          <div className={workbookInfoField}>출제자</div>
          <div className={workbookInfoValue}>{MOCK.owner.name}</div>
        </div>
        <div className={workbookInfoLine}>
          <div className={workbookInfoField}>출제일</div>
          <div className={workbookInfoValue} suppressHydrationWarning>
            {calculateElapsedTime(MOCK.createdAt)}
          </div>
        </div>
      </section>
      <div className={buttonsContainer}>
        <Button className={shareButton} variant="light" onClick={shareCurrentUrl}>
          <div className={shareButtonInnerWrapper}>
            <ShareIcon className={shareIcon} />
            <div className={shareText}>공유하기</div>
          </div>
        </Button>
        <Button variant="primary" className={solveButton} onClick={onClickSolve}>
          문제 풀기
        </Button>
      </div>
    </div>
  );
}
