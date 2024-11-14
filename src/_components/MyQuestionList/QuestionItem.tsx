import * as React from 'react';
import { MyQuestion } from './MyQuestionList';
import RightArrow from '@/_assets/icons/rightArrow.svg';
import { abbreviateCategory } from './utils';
import {
  animatedHover,
  categoryTag,
  questionItemContainer,
  questionItemContent,
  questionTitle,
  rightArrow,
} from './MyQuestionList.css';

export interface MyQuestionItemProps {
  question: MyQuestion;
}

export default function MyQuestionItem({ question }: MyQuestionItemProps) {
  const { category, title } = question;

  return (
    <div className={`${questionItemContainer} ${animatedHover}`}>
      <div className={questionItemContent}>
        <div className={categoryTag[category]}>{abbreviateCategory(category)}</div>
        <span className={questionTitle}>{title}</span>
      </div>
      <RightArrow className={rightArrow} />
    </div>
  );
}
