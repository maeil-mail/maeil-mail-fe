'use client';

import * as React from 'react';
import MyQuestionItem from './QuestionItem';
import { emptyCase, questionListContainer } from './questionList.css';
import Link from 'next/link';

export interface MyQuestion {
  id: number;
  category: 'frontend' | 'backend';
  title: string;
}

export interface QuestionListProps {
  questions: MyQuestion[];
}

export default function QuestionList({ questions }: QuestionListProps) {
  const isEmpty = questions.length === 0;

  if (isEmpty) {
    return <div className={emptyCase}>아직 받은 질문이 없습니다.</div>;
  }

  return (
    <div className={questionListContainer}>
      {questions.map((question) => (
        <Link key={question.id} href={`/question/${question.id}`}>
          <MyQuestionItem question={question} />
        </Link>
      ))}
    </div>
  );
}
