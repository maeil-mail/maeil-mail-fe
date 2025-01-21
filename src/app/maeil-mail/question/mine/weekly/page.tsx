import { getMyWeeklyQuestions } from '@/_apis/question';
import Nav from '@/_components/common/Nav/Nav';
import PageInnerLayout from '@/_components/common/PageInnerLayout/PageInnerLayout';
import MyQuestionListHeader from '@/_components/MyWeeklyQuestionList/Header';
import MyQuestionList from '@/_components/MyWeeklyQuestionList/MyWeeklyQuestionList';
import * as React from 'react';

export interface MyWeeklyQuestionsProps {
  searchParams: Promise<{
    email: string;
    category: string;
    year: string;
    month: string;
    week: string;
  }>;
}

export default async function Page({ searchParams }: MyWeeklyQuestionsProps) {
  const { email: rawEmail, category, year, month, week } = await searchParams;

  const email = decodeURIComponent(rawEmail);

  const { weekLabel, questions } = await getMyWeeklyQuestions(email, category, {
    year: Number(year),
    month: Number(month),
    week: Number(week),
  });

  return (
    <div>
      <Nav />
      <PageInnerLayout>
        <MyQuestionListHeader weekLabel={weekLabel} category={category} />
        <MyQuestionList questions={questions} />
      </PageInnerLayout>
    </div>
  );
}
