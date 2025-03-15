'use client';

import { Suspense } from 'react';
import { useParams, useSearchParams } from 'next/navigation';
import { PageInnerLayout } from '@maeil/ui';
import Paginator from '@/common/components/Paginator';
import MyQuestionList from '@/pages/myQuestionList/QuestionList';
import useMyQuestions from '@/pages/myQuestionList/hooks/useMyQuestions';
import MyQuestionListHeader from '@/pages/myQuestionList/Header';
import MyQuestionListSkeleton from '@/pages/myQuestionList/Skeleton';
import QuestionCategoryTabs from '@/pages/myQuestionList/QuestionCategoryTabs';
import { QuestionCategoryEN } from '@/common/types/question';

export default function Page() {
  const rawEmail = useParams<{ email: string }>()?.email || '';
  const rawPage = useSearchParams()?.get('page');
  const category = (useSearchParams()?.get('category') || 'all') as QuestionCategoryEN;

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
