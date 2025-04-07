import * as React from 'react';
import QuestionItem, { UpdateCurrentQuestion } from './QuestionItem';
import { questionList, questionListTitle } from './multipleChoice.css';
import { UpdateQuestion } from './hooks/useMultipleChoiceQuestions';
import { GetErrorMessage } from '@/common/hooks/useValidation';
import type { MultipleChoice } from '@/common/types/workbook';

export interface QuestionListProps {
  questions: MultipleChoice[];
  getErrorMessage: GetErrorMessage;
  updateQuestion: UpdateQuestion;
  removeQuestion: (index: number) => void;
}

export default function QuestionList({
  questions,
  getErrorMessage,
  updateQuestion,
  removeQuestion,
}: QuestionListProps) {
  return (
    <div>
      <h2 className={questionListTitle}>객관식 문제</h2>
      <ol className={questionList}>
        {questions.map((question, index) => {
          const updateCurrentQuestion: UpdateCurrentQuestion = (key, value) => {
            updateQuestion(index, key, value);
          };

          const removeCurrentQuestion = () => removeQuestion(index);

          return (
            <li key={`q-${index}`}>
              <QuestionItem
                order={index + 1}
                question={question}
                errorMessage={getErrorMessage('questions', index)}
                updateCurrentQuestion={updateCurrentQuestion}
                removeCurrentQuestion={removeCurrentQuestion}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
