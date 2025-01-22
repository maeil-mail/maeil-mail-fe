'use client';

import { Suspense } from 'react';
import PageInnerLayout from '@/_components/common/PageInnerLayout/PageInnerLayout';
import { useParams, useSearchParams } from 'next/navigation';
import MyQuestionListHeader from '@/_components/MyQuestionList/Header';
import MyQuestionList from '@/_components/MyQuestionList/MyQuestionList';
import Paginator from '@/_components/common/Paginator';
import useMyQuestions from '../../../../../_components/MyQuestionList/_hooks/useMyQuestions';
import MyQuestionListSkeleton from '@/_components/MyQuestionList/Skeleton';
import MaeilMailNav from '@/_components/common/MaeilMailNav';

export default function Page() {
  const { email: rawEmail } = useParams<{ email: string }>();
  const rawPage = useSearchParams().get('page');

  const email = decodeURIComponent(rawEmail);
  const page = Number(rawPage) || 1;

  return (
    <div>
      <MaeilMailNav />
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
