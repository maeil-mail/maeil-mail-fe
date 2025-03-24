'use client';

import * as React from 'react';
import { MyQuestion } from './QuestionList';
import RightArrow from '@/assets/icons/rightArrow.svg';
import {
  animatedHover,
  categoryTag,
  questionItemContainer,
  questionItemContent,
  questionTitle,
  rightArrow,
} from './questionList.css';
import { abbreviateCategory } from '@/common/utils/abbreviateCategory';

export interface QuestionItemProps {
  question: MyQuestion;
}

export default function QuestionItem({ question }: QuestionItemProps) {
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
