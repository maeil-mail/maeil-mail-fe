import * as React from 'react';
import {
  questionHeaderContainer,
  questionHeaderSubTitle,
  questionHeaderTitle,
} from './MyQuestionList.css';

export interface MyQuestionListHeaderProps {
  email: string;
}

export default function MyQuestionListHeader({ email }: MyQuestionListHeaderProps) {
  return (
    <div className={questionHeaderContainer}>
      <h1 className={questionHeaderTitle}>질문 모아보기</h1>
      <h2 className={questionHeaderSubTitle}>{email}으로 지금까지 전송된 질문이에요!</h2>
    </div>
  );
}
