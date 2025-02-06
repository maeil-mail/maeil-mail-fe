'use client';

import { Suspense } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import PageInnerLayout from '@/_components/common/PageInnerLayout/PageInnerLayout';
import MyQuestionListHeader from '@/_components/MyQuestionList/Header';
import MyQuestionList from '@/_components/MyQuestionList/MyQuestionList';
import Paginator from '@/_components/common/Paginator';
import useMyQuestions from '@/_components/MyQuestionList/_hooks/useMyQuestions';
import MyQuestionListSkeleton from '@/_components/MyQuestionList/Skeleton';
import { QuestionCategoryEN } from '@/_types';
import QuestionCategoryTabs from '@/_components/MyQuestionList/QuestionCategoryTabs';

export default function Page() {
  const { email: rawEmail } = useParams<{ email: string }>();
  const rawPage = useSearchParams().get('page');
  const category = (useSearchParams().get('category') || 'all') as QuestionCategoryEN;

  const email = decodeURIComponent(rawEmail);
  const page = Number(rawPage) || 1;

  return (
    <div>
      <PageInnerLayout>
        <MyQuestionListHeader email={email} />
        <QuestionCategoryTabs selectedCategory={category} />
        <Suspense fallback={<MyQuestionListSkeleton />}>
          <MyQuestionsListBody email={email} page={page} category={category} />
        </Suspense>
      </PageInnerLayout>
    </div>
  );
}

function MyQuestionsListBody({
  email,
  page,
  category,
}: {
  email: string;
  page: number;
  category: QuestionCategoryEN;
}) {
  const {
    data: { data, totalPage },
  } = useMyQuestions(email, page, category);

  return (
    <>
      <MyQuestionList questions={data} />
      <Paginator currentPage={page} lastPage={totalPage} />
    </>
  );
}
