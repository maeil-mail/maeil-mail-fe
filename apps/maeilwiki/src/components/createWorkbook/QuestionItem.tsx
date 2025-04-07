import * as React from 'react';
import type { MultipleChoice, Option } from '@/common/types/workbook';
import TrashCanIcon from '@/assets/trashCan.svg';
import {
  answerButton,
  inputLabel,
  optionalText,
  optionInput,
  optionOrder,
  questionAnswer,
  questionContent,
  questionContentInput,
  questionErrorMessage,
  questionItemContainer,
  questionItemContent,
  questionItemHeader,
  questionOption,
  questionOptionList,
  questionOrder,
  textarea,
} from './multipleChoice.css';

export type UpdateCurrentQuestion = <K extends keyof MultipleChoice>(
  key: K,
  value: MultipleChoice[K],
) => void;

export type UpdateCurrentOption = <K extends keyof Option>(key: K, value: Option[K]) => void;

export interface QuestionItemProps {
  order: number;
  question: MultipleChoice;
  errorMessage: string | null;
  updateCurrentQuestion: UpdateCurrentQuestion;
  removeCurrentQuestion: () => void;
}

export default function QuestionItem({
  order,
  question,
  errorMessage,
  updateCurrentQuestion,
  removeCurrentQuestion,
}: QuestionItemProps) {
  return (
    <div className={questionItemContainer}>
      <div className={questionItemHeader}>
        <h3 className={questionOrder}>문제 {order}</h3>
        <button type="button" onClick={removeCurrentQuestion}>
          <TrashCanIcon />
        </button>
      </div>

      <div className={questionItemContent}>
        <div className={questionContent}>
          <input
            className={questionContentInput}
            placeholder="문제를 입력해 주세요"
            value={question.title}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              updateCurrentQuestion('title', e.target.value);
            }}
          />
          <ol className={questionOptionList}>
            {question.options.map((option, optionIndex) => {
              const { content, isCorrectAnswer } = option;

              const updateCurrentOption: UpdateCurrentOption = (key, value) => {
                updateCurrentQuestion(
                  'options',
                  question.options.map((option, index) =>
                    index === optionIndex ? { ...option, [key]: value } : option,
                  ),
                );
              };

              return (
                <li key={`qo-${order}-${optionIndex}`}>
                  <QuestionOption
                    order={optionIndex + 1}
                    value={content}
                    updateCurrentOption={updateCurrentOption}
                    isActive={isCorrectAnswer}
                  />
                </li>
              );
            })}
          </ol>
        </div>
        <div className={questionErrorMessage}>{errorMessage}</div>
        <div className={questionAnswer}>
          <label className={inputLabel}>
            정답 해설 <span className={optionalText}>(선택)</span>
          </label>
          <textarea
            placeholder="해설이 필요할 경우 작성해 주세요."
            className={textarea}
            value={question.correctAnswerExplanation}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              updateCurrentQuestion('correctAnswerExplanation', e.target.value)
            }
          />
        </div>
      </div>
    </div>
  );
}

function QuestionOption({
  order,
  value,
  updateCurrentOption,
  isActive = false,
}: {
  order: number;
  value: string;
  updateCurrentOption: UpdateCurrentOption;
  isActive?: boolean;
}) {
  return (
    <div className={questionOption}>
      <div className={optionOrder({ isActive })}>{order}</div>
      <input
        className={optionInput}
        placeholder="보기를 입력해 주세요."
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          updateCurrentOption('content', e.target.value);
        }}
      />
      <button
        type="button"
        tabIndex={1}
        className={answerButton({ isActive })}
        onClick={() => {
          updateCurrentOption('isCorrectAnswer', !isActive);
        }}
      >
        정답
      </button>
    </div>
  );
}
