import { PageInnerLayout } from '@maeil/ui';
import MyQuestionListHeader from '@/pages/myWeeklyQuestionList/Header';
import MyQuestionList from '@/pages/myWeeklyQuestionList/MyWeeklyQuestionList';
import { getMyWeeklyQuestions } from '@/pages/myWeeklyQuestionList/apis/getMyWeeklyQuestions';
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
      <PageInnerLayout>
        <MyQuestionListHeader weekLabel={weekLabel} category={category} />
        <MyQuestionList questions={questions} />
      </PageInnerLayout>
    </div>
  );
}
