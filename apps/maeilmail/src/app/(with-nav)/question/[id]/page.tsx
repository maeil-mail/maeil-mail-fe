import { Metadata } from 'next';
import { PageInnerLayout } from '@maeil/ui';

import DetailTitle from '@/pages/questionDetail/DetailTitle';
import DetailCategory from '@/pages/questionDetail/DetailCategory';
import DetailAnswer from '@/pages/questionDetail/DetailAnswer';
import { getQuestionDetail } from '@/pages/questionDetail/apis/getQuestionDetail';
import { getAllQuestions } from '@/pages/questionDetail/apis/getAllQuestions';

// 5시간 (연산자 사용 시 에러가 발생하여 정수 형태로 작성)
export const revalidate = 18_000;

export async function generateStaticParams() {
  const { data: questions } = await getAllQuestions();

  return questions.map(({ id }) => {
    return { id: String(id) };
  });
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const detailQuestion = await getQuestionDetail({ id });

  return {
    title: `매일메일 - ${detailQuestion.title}`,
    description: detailQuestion.content,
  };
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const detailQuestion = await getQuestionDetail({ id });

  return (
    <div>
      <PageInnerLayout>
        <DetailTitle title={detailQuestion.title} />
        <DetailCategory category={detailQuestion.category} />
        <DetailAnswer content={detailQuestion.content} />
      </PageInnerLayout>
    </div>
  );
}
