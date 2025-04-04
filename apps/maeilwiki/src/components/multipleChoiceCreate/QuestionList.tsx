import * as React from 'react';
import QuestionItem from './QuestionItem';
import { questionList, questionListTitle } from './multipleChoice.css';

interface Option {
  content: string;
  isCorrectAnswer: boolean;
}

export interface MultipleChoice {
  title: string;
  correctAnswerExplanation?: string;
  options: Option[];
}

export interface QuestionListProps {
  questions: MultipleChoice[];
  removeQuestion: (index: number) => void;
}

export default function QuestionList({ questions, removeQuestion }: QuestionListProps) {
  return (
    <div>
      <h2 className={questionListTitle}>객관식 문제</h2>
      <ol className={questionList}>
        {questions.map((question, index) => {
          return (
            <li key={`q-${index}`}>
              <QuestionItem
                order={index + 1}
                question={question}
                removeCurrentQuestion={() => removeQuestion(index)}
              />
            </li>
          );
        })}
      </ol>
    </div>
  );
}
