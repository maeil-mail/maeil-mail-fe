'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';

import PageNav from '@/common/components/PageNav';
import WorkbookQuestion from '@/components/solveWorkbook/WorkbookQuestion';
import WorkbookBottomBar from '@/components/solveWorkbook/WorkbookBottomBar';

import { useSolveWorkbook } from './hooks/useSolveWorkbook';
import { WorkbookDetailItem } from '../workbookDetail/apis/getWorkbookDetail';
import {
  solveWorkbookPageContainer,
  solveWorkbookPageContent,
  workbookTitleText,
} from '@/components/solveWorkbook/solveWorkbook.css';

interface SolveWorkbookPageProps {
  workbookId: number;
  workbook: WorkbookDetailItem;
}

export default function SolveWorkbookPage({ workbookId, workbook }: SolveWorkbookPageProps) {
  const router = useRouter();

  const { questions, workbookTitle, timeLimit } = workbook;

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const { userAnswers, toggleAnswer, submit } = useSolveWorkbook(workbook, workbookId);

  const currentQuestion = questions[currentIndex];

  const isMultipleAnswer =
    currentQuestion.options.filter(({ isCorrectAnswer }) => isCorrectAnswer).length > 1;

  const handleSubmit = () => {
    submit();
    router.push(`/workbook/${workbookId}/solve/result`);
  };

  return (
    <div className={solveWorkbookPageContainer}>
      <PageNav title={`진행률 ${currentIndex + 1}/${questions.length}`} />
      <div className={solveWorkbookPageContent}>
        <h1 className={workbookTitleText}>{workbookTitle}</h1>
        <WorkbookQuestion
          index={currentIndex}
          question={currentQuestion}
          userAnswer={userAnswers.get(currentIndex) ?? new Set()}
          toggleAnswer={(answerId) => toggleAnswer(currentIndex, answerId)}
          isMultipleAnswer={isMultipleAnswer}
        />
      </div>
      <WorkbookBottomBar
        timeLimit={timeLimit}
        userAnswer={userAnswers.get(currentIndex) ?? new Set()}
        currentIndex={currentIndex}
        lastIndex={questions.length - 1}
        isMultipleAnswer={isMultipleAnswer}
        setCurrentIndex={setCurrentIndex}
        onSubmit={handleSubmit}
      />
    </div>
  );
}
