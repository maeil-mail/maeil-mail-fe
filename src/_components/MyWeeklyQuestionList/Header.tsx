import * as React from 'react';
import {
  questionHeaderContainer,
  questionHeaderSubTitle,
  questionHeaderTitle,
} from './MyWeeklyQuestionList.css';
import { abbreviateCategory } from '@/_utils/letterFormatters';

export interface MyWeeklyQuestionListHeaderProps {
  weekLabel: string;
  category: string;
}

export default function MyWeeklyQuestionListHeader({
  weekLabel,
  category,
}: MyWeeklyQuestionListHeaderProps) {
  return (
    <div className={questionHeaderContainer}>
      <h1 className={questionHeaderTitle}>매주메일</h1>
      <h2 className={questionHeaderSubTitle}>
        {abbreviateCategory(category)} {weekLabel} 질문
      </h2>
    </div>
  );
}
