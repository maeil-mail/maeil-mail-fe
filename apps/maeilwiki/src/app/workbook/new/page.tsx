'use client';

import * as React from 'react';
import PageNav from '@/common/components/PageNav';
import ActionBar from '@/common/components/ActionBar';
import Button from '@/common/components/Button';
import QuestionList from '@/components/createWorkbook/QuestionList';
import WorkbookInfoForm from '@/components/createWorkbook/WorkbookInfoForm';

import { useWorkbookInfo } from '@/components/createWorkbook/hooks/useWorkbookInfo';
import { useMultipleChoiceQuestions } from '@/components/createWorkbook/hooks/useMultipleChoiceQuestions';
import { useWorkbookInfoValidation } from '@/components/createWorkbook/hooks/useWorkbookInfoValidation';
import { useMultipleChoiceQuestionsValidation } from '@/components/createWorkbook/hooks/useMultipleChoiceQuestionsValidation';

import {
  actionBarContent,
  pageContent,
  plusIcon,
  questionAddButton,
} from '@/components/createWorkbook/multipleChoice.css';
import PlusIcon from '@/assets/plus.svg';
import { usePostWorkbook } from '@/components/createWorkbook/hooks/usePostWorkbook';

export default function Page() {
  const [workbookInfo, fieldUpdaters] = useWorkbookInfo();
  const workbookInfoValidation = useWorkbookInfoValidation(workbookInfo);

  const { questions, addQuestion, updateQuestion, removeQuestion } = useMultipleChoiceQuestions();
  const questionsValidation = useMultipleChoiceQuestionsValidation(questions);

  const { mutate: postWorkbook } = usePostWorkbook();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const isWorkbookInfoValid = workbookInfoValidation.validate();
    const isQuestionsValid = questionsValidation.validate();

    if (!isWorkbookInfoValid || !isQuestionsValid) {
      alert('필수 항목을 모두 입력해 주세요.');
    } else {
      const { title, difficulty, category, detail } = workbookInfo;

      if (!(title && difficulty && category && detail)) {
        return;
      }

      postWorkbook({
        workbookTitle: title,
        difficultyLevel: difficulty,
        category: category,
        workbookDetail: detail,
        questions,
      });
    }
  };

  return (
    <div>
      <PageNav title="문제 출제하기" />
      <form onSubmit={handleSubmit}>
        <div className={pageContent}>
          <WorkbookInfoForm
            workbookInfo={workbookInfo}
            getErrorMessage={workbookInfoValidation.getErrorMessage}
            fieldUpdaters={fieldUpdaters}
          />
          <QuestionList
            questions={questions}
            getErrorMessage={questionsValidation.getErrorMessage}
            updateQuestion={updateQuestion}
            removeQuestion={removeQuestion}
          />
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
