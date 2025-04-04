'use client';

import * as React from 'react';
import QuestionList, { MultipleChoice } from '@/components/multipleChoiceCreate/QuestionList';
import WorkbookInfoForm from '@/components/multipleChoiceCreate/WorkbookInfoForm';
import PlusIcon from '@/assets/plus.svg';
import PageNav from '@/common/components/PageNav';
import ActionBar from '@/common/components/ActionBar';
import {
  actionBarContent,
  pageContent,
  plusIcon,
  questionAddButton,
} from '@/components/multipleChoiceCreate/multipleChoice.css';
import Button from '@/common/components/Button';
import { useWorkbookInfo } from '@/components/multipleChoiceCreate/hooks/useWorkbookInfo';

export default function Page() {
  const [questions, setQuestions] = React.useState<MultipleChoice[]>([initializeQuestion()]);
  const [workbookInfo, fieldUpdaters] = useWorkbookInfo();
  console.log(workbookInfo);

  const addQuestion = () => {
    setQuestions([...questions, initializeQuestion()]);
  };

  const removeQuestion = (index: number) => {
    if (index === 0 && questions.length === 1) {
      return alert('최소 한 개의 문제가 존재해야 합니다.');
    }

    setQuestions(questions.filter((_, i) => i !== index));
  };

  return (
    <div>
      <PageNav title="문제 출제하기" />
      <form
        onSubmit={(e: React.FormEvent) => {
          e.preventDefault();
        }}
      >
        <div className={pageContent}>
          <WorkbookInfoForm workbookInfo={workbookInfo} fieldUpdaters={fieldUpdaters} />
          <QuestionList questions={questions} removeQuestion={removeQuestion} />
          <button type="button" onClick={addQuestion} className={questionAddButton}>
            <PlusIcon className={plusIcon} />
          </button>
        </div>
        <ActionBar>
          <div className={actionBarContent}>
            <Button theme="primary" size="small">
              출제 완료
            </Button>
          </div>
        </ActionBar>
      </form>
    </div>
  );
}

function initializeQuestion(): MultipleChoice {
  return {
    title: '',
    correctAnswerExplanation: '',
    options: [
      { content: '', isCorrectAnswer: false },
      { content: '', isCorrectAnswer: false },
      { content: '', isCorrectAnswer: false },
      { content: '', isCorrectAnswer: false },
    ],
  };
}
