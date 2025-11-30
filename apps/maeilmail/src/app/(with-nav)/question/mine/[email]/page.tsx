import { Suspense } from 'react';
import { PageInnerLayout } from '@maeil/ui';
import Paginator from '@/common/components/Paginator';
import MyQuestionList from '@/components/myQuestionList/QuestionList';
import MyQuestionListHeader from '@/components/myQuestionList/Header';
import MyQuestionListSkeleton from '@/components/myQuestionList/Skeleton';
import QuestionCategoryTabs from '@/components/myQuestionList/QuestionCategoryTabs';
import { QuestionCategoryEN } from '@/common/types/question';
import { getMyQuestions } from '@/components/myQuestionList/apis/getMyQuestions';

interface PageProps {
  params: Promise<{ email: string }>;
  searchParams: Promise<{ page?: string; category?: string }>;
}

export default async function Page({ params, searchParams }: PageProps) {
  const { email: rawEmail } = await params;
  const { page: rawPage, category: rawCategory } = await searchParams;

  const email = decodeURIComponent(rawEmail || '');
  const page = Number(rawPage) || 1;
  const category = (rawCategory || 'all') as QuestionCategoryEN;

  const suspenseKey = `${email}-${page}-${category}`;

  return (
    <div>
      <PageInnerLayout>
        <MyQuestionListHeader email={email} />
        <QuestionCategoryTabs selectedCategory={category} />
        <Suspense key={suspenseKey} fallback={<MyQuestionListSkeleton />}>
          <MyQuestionsListBody email={email} page={page} category={category} />
        </Suspense>
      </PageInnerLayout>
    </div>
  );
}

async function MyQuestionsListBody({
  email,
  page,
  category,
}: {
  email: string;
  page: number;
  category: QuestionCategoryEN;
}) {
  const { totalPage, data } = await getMyQuestions(email, page, category);

  return (
    <>
      <MyQuestionList questions={data} />
      <Paginator currentPage={page} lastPage={totalPage} />
    </>
  );
}
