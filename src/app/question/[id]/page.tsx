import { Metadata } from 'next';
import DetailTitle from '@/_components/QuestionDetail/DetailTitle';
import DetailCategory from '@/_components/QuestionDetail/DetailCategory';
import DetailAnswer from '@/_components/QuestionDetail/DetailAnswer';
import { getAllQuestions, getDetailQuestion } from '@/_apis/question';
import PageInnerLayout from '@/_components/common/PageInnerLayout/PageInnerLayout';
import Nav from '@/_components/common/Nav/Nav';

// 5시간 (연산자 사용 시 에러가 발생하여 정수 형태로 작성)
export const revalidate = 18_000;

export async function generateStaticParams() {
  const { data: questions } = await getAllQuestions();

  return questions.map(({ id }) => {
    return { id: id };
  });
}

interface QuestionDetailPageProps {
  params: Promise<{ id: number }>;
}

export async function generateMetadata({ params }: QuestionDetailPageProps): Promise<Metadata> {
  const { id } = await params;
  const detailQuestion = await getDetailQuestion({ id });

  return {
    title: `매일메일 - ${detailQuestion.title}`,
    description: detailQuestion.content,
  };
}

export default async function QuestionDetailPage({ params }: QuestionDetailPageProps) {
  const { id } = await params;
  const detailQuestion = await getDetailQuestion({ id });

  return (
    <div>
      <Nav />
      <PageInnerLayout>
        <DetailTitle title={detailQuestion.title} />
        <DetailCategory category={detailQuestion.category} />
        <DetailAnswer content={detailQuestion.content} />
      </PageInnerLayout>
    </div>
  );
}
