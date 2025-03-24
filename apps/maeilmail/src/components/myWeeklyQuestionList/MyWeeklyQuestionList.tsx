import * as React from 'react';
import Link from 'next/link';
import MyQuestionItem from './QuestionItem';
import { emptyCase, questionListContainer } from './MyWeeklyQuestionList.css';

export interface MyWeeklyQuestion {
  id: number;
  index: number;
  title: string;
}

export interface MyWeeklyQuestionListProps {
  questions: MyWeeklyQuestion[];
}

export default function MyWeeklyQuestionList({ questions }: MyWeeklyQuestionListProps) {
  const isEmpty = questions.length === 0;

  if (isEmpty) {
    return <div className={emptyCase}>아직 받은 질문이 없습니다.</div>;
  }

  return (
    <div className={questionListContainer}>
      {questions.map((question) => (
        <Link key={question.id} href={`/question/${question.id}`}>
          <MyQuestionItem question={question} index={question.index} />
        </Link>
      ))}
    </div>
  );
}
