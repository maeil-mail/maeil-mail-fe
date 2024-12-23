'use client';

import { Suspense } from 'react';
import PageInnerLayout from '@/_components/common/PageInnerLayout/PageInnerLayout';
import { useParams, useSearchParams } from 'next/navigation';
import Nav from '@/_components/common/Nav/Nav';
import MyQuestionListHeader from '@/_components/MyQuestionList/Header';
import MyQuestionList from '@/_components/MyQuestionList/MyQuestionList';
import Paginator from '@/_components/common/Paginator';
import useMyQuestions from './hooks/useMyQuestions';
import MyQuestionListSkeleton from '@/_components/MyQuestionList/Skeleton';

export default function MyQuestionListPage() {
  const { email: rawEmail } = useParams<{ email: string }>();
  const rawPage = useSearchParams().get('page');

  const email = decodeURIComponent(rawEmail);
  const page = Number(rawPage) || 1;

  return (
    <div>
      <Nav />
      <PageInnerLayout>
        <MyQuestionListHeader email={email} />
        <Suspense fallback={<MyQuestionListSkeleton />}>
          <MyQuestionsListBody email={email} page={page} />
        </Suspense>
      </PageInnerLayout>
    </div>
  );
}

function MyQuestionsListBody({ email, page }: { email: string; page: number }) {
  const {
    data: { data, totalPage },
  } = useMyQuestions(email, page);

  return (
    <>
      <MyQuestionList questions={data} />
      <Paginator currentPage={page} lastPage={totalPage} />
    </>
  );
}
