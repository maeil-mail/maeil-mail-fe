import * as React from 'react';
import type { MultipleChoice } from './QuestionList';
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
  questionItemContainer,
  questionItemContent,
  questionItemHeader,
  questionOption,
  questionOptionList,
  questionOrder,
  textarea,
} from './multipleChoice.css';

export interface QuestionItemProps {
  order: number;
  question: MultipleChoice;
  removeCurrentQuestion: () => void;
}

export default function QuestionItem({
  order,
  question,
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
            onChange={() => {}}
          />
          <ol className={questionOptionList}>
            {question.options.map(({ content, isCorrectAnswer }, optionIndex) => {
              return (
                <li key={`qo-${order}-${optionIndex}`}>
                  <QuestionOption
                    order={optionIndex + 1}
                    value={content}
                    isActive={isCorrectAnswer}
                  />
                </li>
              );
            })}
          </ol>
        </div>
        <div className={questionAnswer}>
          <label className={inputLabel}>
            정답 해설 <span className={optionalText}>(선택)</span>
          </label>
          <textarea placeholder="해설이 필요할 경우 작성해 주세요." className={textarea}></textarea>
        </div>
      </div>
    </div>
  );
}

function QuestionOption({
  order,
  value,
  isActive = false,
}: {
  order: number;
  value: string;
  isActive?: boolean;
}) {
  return (
    <div className={questionOption}>
      <div className={optionOrder}>{order}</div>
      <input
        className={optionInput}
        placeholder="보기를 입력해 주세요."
        value={value}
        onChange={() => {}}
      />
      <button className={answerButton}>정답</button>
    </div>
  );
}
