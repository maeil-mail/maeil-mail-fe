import * as React from 'react';
import RightArrow from '@/assets/icons/rightArrow.svg';
import {
  animatedHover,
  dayLabel,
  questionItemContainer,
  questionItemContent,
  questionTitle,
  rightArrow,
} from './MyWeeklyQuestionList.css';
import type { MyWeeklyQuestion } from './MyWeeklyQuestionList';

export interface MyQuestionItemProps {
  question: MyWeeklyQuestion;
  // 1 based index
  index: number;
}

export default function MyWeeklyQuestionItem({ question, index }: MyQuestionItemProps) {
  const { title } = question;

  return (
    <div className={`${questionItemContainer} ${animatedHover}`}>
      <div className={questionItemContent}>
        <div className={dayLabel}>{convertIndexIntoDay(index)}</div>
        <span className={questionTitle}>{title}</span>
      </div>
      <RightArrow className={rightArrow} />
    </div>
  );
}

function convertIndexIntoDay(index: number) {
  switch (index) {
    case 1:
      return '월';
    case 2:
      return '화';
    case 3:
      return '수';
    case 4:
      return '목';
    case 5:
      return '금';
    default:
      return undefined;
  }
}
