'use client';

import React from 'react';
import Link from 'next/link';
import { Button, LoadingSpinner } from '@maeil/ui';
import { WorkbookDetailItem } from '../workbookDetail/apis/getWorkbookDetail';
import WorkbookResultList from './WorkbookResultList';
import { getWorkbookResultComment } from './utils/getWorkbookResultComment';
import { useWorkbookUserAnswer } from './hooks/useWorkbookUserAnswer';
import { countCorrectAnswer } from './utils/countCorrectAnswer';

import {
  workbookScoreBoard,
  workbookAnswerTitle,
  workbookResultPageInnerWrapper,
  workbookScore,
  workbookMyScore,
  workbookScoreComment,
  mainButton,
  lightButton,
  buttonContainer,
  workbookResultBarInnerWrapper,
  topBanner,
  bannerText,
  cursorIcon,
} from './workbookResult.css';
import BottomFixedBar from '@/common/components/BottomFixedBar';
import { shareCurrentUrl } from '@/common/utils/shareCurrentUrl';
import CursorIcon from '@/assets/cursor.svg';

interface WorkbookResultPageProps {
  id: number;
  workbook: WorkbookDetailItem;
}

export default function WorkbookResultPage({ id, workbook }: WorkbookResultPageProps) {
  const userAnswer = useWorkbookUserAnswer(id);

  if (!userAnswer) {
    return <LoadingSpinner />;
  }

  const correctCount = countCorrectAnswer(workbook.questions, userAnswer);

  const questionCount = workbook.questions.length;

  return (
    <div>
      <a href="https://www.maeil-mail.kr/" rel="noopener noreferrer">
        <div className={topBanner}>
          <div className={bannerText}>매일메일로 기술 면접을 무료로 구독해 보세요! </div>
          <CursorIcon className={cursorIcon} />
        </div>
      </a>
      <div className={workbookResultPageInnerWrapper}>
        <h1 className={workbookAnswerTitle}>채점 결과</h1>
        <div className={workbookScoreBoard}>
          <div className={workbookScore}>
            <span className={workbookMyScore}>{correctCount}</span>/{questionCount}
          </div>
          <div className={workbookScoreComment}>
            {getWorkbookResultComment(correctCount, questionCount)}
          </div>
        </div>
        <WorkbookResultList questions={workbook.questions} userAnswer={userAnswer} />
      </div>
      <BottomFixedBar>
        <div className={workbookResultBarInnerWrapper}>
          <div className={buttonContainer}>
            <Button variant="light" className={lightButton} onClick={shareCurrentUrl}>
              문제 공유
            </Button>
            <Link href="/">
              <Button variant="primary" className={mainButton}>
                다른 문제 풀기
              </Button>
            </Link>
          </div>
        </div>
      </BottomFixedBar>
    </div>
  );
}
