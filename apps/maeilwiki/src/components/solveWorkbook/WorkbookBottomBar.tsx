import { Button } from '@maeil/ui';
import ProgressBar from './ProgressBar';
import {
  buttonContainer,
  mainButton,
  previousButton,
  workbookBottomBarInnerWrapper,
} from './solveWorkbook.css';
import { useTimer } from './hooks/useTimer';
import React from 'react';
import BottomFixedBar from '@/common/components/BottomFixedBar';

interface WorkbookBottomBarProps {
  timeLimit: number;
  userAnswer: Set<number>;
  currentIndex: number;
  lastIndex: number;
  isMultipleAnswer: boolean;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
  onSubmit: () => void;
}

export default function WorkbookBottomBar({
  timeLimit,
  userAnswer,
  currentIndex,
  lastIndex,
  isMultipleAnswer,
  setCurrentIndex,
  onSubmit,
}: WorkbookBottomBarProps) {
  const { start, progressRate, formattedTime } = useTimer(timeLimit * 60 * 1_000, () => {
    alert('제한 시간이 종료되었습니다. 채점 결과 화면으로 이동합니다.');
    onSubmit();
  });

  React.useEffect(() => {
    start();
  }, []);

  const handleClickNext = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const handleClickPrevious = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  const isFirstQuestion = currentIndex === 0;

  const isLastQuestion = currentIndex === lastIndex;

  const isUnanswered = userAnswer.size === 0 || (isMultipleAnswer && userAnswer.size < 2);

  return (
    <BottomFixedBar>
      <div className={workbookBottomBarInnerWrapper}>
        <div className={buttonContainer}>
          {
            <Button
              onClick={handleClickPrevious}
              variant="light"
              className={previousButton({ isFirstQuestion })}
            >
              이전 문제
            </Button>
          }
          {isLastQuestion ? (
            <Button
              className={mainButton}
              variant="primary"
              disabled={isUnanswered}
              onClick={onSubmit}
            >
              채점하기
            </Button>
          ) : (
            <Button
              className={mainButton}
              variant="primary"
              onClick={handleClickNext}
              disabled={isUnanswered}
            >
              다음 문제
            </Button>
          )}
        </div>
        {timeLimit && <ProgressBar progressRate={progressRate} displayTime={formattedTime} />}
      </div>
    </BottomFixedBar>
  );
}
