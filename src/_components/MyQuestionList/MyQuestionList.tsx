import * as React from 'react';
import MyQuestionItem from './QuestionItem';
import { questionListContainer } from './MyQuestionList.css';
import Link from 'next/link';

export interface MyQuestion {
  id: number;
  category: 'frontend' | 'backend';
  title: string;
}

export interface MyQuestionListProps {
  questions: MyQuestion[];
}

export default function MyQuestionList({ questions }: MyQuestionListProps) {
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
