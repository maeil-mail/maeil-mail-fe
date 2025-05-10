'use client';

import { Button } from '@maeil/ui';
import DifficultyIndicator from '@/common/components/DifficultyIndicator';
import { WorkbookDetailItem } from './apis/getWorkbookDetail';
import { shareCurrentUrl } from '@/common/utils/shareCurrentUrl';
import { calculateElapsedTime } from '@/common/utils/calculateElapsedTime';
import ShareIcon from '@/assets/share.svg';
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
  workbookOwnerGithubLink,
  workbookTitleText,
} from './workbookDetail.css';

export interface WorkbookDetailContentProps {
  workbook: WorkbookDetailItem;
}

export default function WorkbookDetailContent({ workbook }: WorkbookDetailContentProps) {
  const {
    workbookTitle,
    workbookDetail,
    difficultyLevel,
    questionCount,
    timeLimit,
    owner,
    createdAt,
    solvedCount,
  } = workbook;

  const onClickSolve = () => {
    alert('곧 출시될 기능입니다. 출시 후 별도 공지 메일을 드릴 예정입니다.');
  };

  return (
    <div>
      <div className={solvedCountTag}>
        {solvedCount > 0
          ? `총 ${solvedCount}회 시도된 문제집이에요!`
          : '아직 아무도 풀지 못한 문제집이에요!'}
      </div>
      <h1 className={workbookTitleText}>{workbookTitle}</h1>
      <p className={workbookDetailText}>{workbookDetail}</p>
      <section className={workbookInfo}>
        <div className={workbookInfoLine}>
          <div className={workbookInfoField}>난이도</div>
          <DifficultyIndicator difficulty={difficultyLevel} />
        </div>
        <div className={workbookInfoLine}>
          <div className={workbookInfoField}>문항 수</div>
          <div className={workbookInfoValue}>{questionCount}문항</div>
        </div>{' '}
        <div className={workbookInfoLine}>
          <div className={workbookInfoField}>제한시간</div>
          <div className={workbookInfoValue}>{timeLimit > 0 ? `${timeLimit}분` : '무제한'}</div>
        </div>
        <div className={workbookInfoLine}>
          <div className={workbookInfoField}>출제자</div>
          <a
            className={workbookOwnerGithubLink}
            href={owner.github}
            rel="noopener noreferrer"
            tabIndex={-1}
          >
            <div className={workbookInfoValue}>{owner.name}</div>
          </a>
        </div>
        <div className={workbookInfoLine}>
          <div className={workbookInfoField}>출제일</div>
          <div className={workbookInfoValue} suppressHydrationWarning>
            {calculateElapsedTime(createdAt)}
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
        <Button
          variant="primary"
          className={solveButton}
          onClick={onClickSolve}
          autoFocus
          tabIndex={0}
        >
          문제 풀기
        </Button>
      </div>
    </div>
  );
}
