import * as React from 'react';
import RightArrow from '@/_assets/icons/rightArrow.svg';
import {
  animatedHover,
  dayLabel,
  questionItemContainer,
  questionItemContent,
  questionTitle,
  rightArrow,
} from './MyWeeklyQuestionList.css';
import type { MyWeeklyQuestion } from './MyWeeklyQuestionList';
import { convertIndexIntoDay } from '@/_utils/letterFormatters';

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
