import { getMyQuestions } from '@/_apis/question';
import QuestionPageNav from '@/_components/common/QuestionPageNav';

type QuestionDetailPageProps = {
  params: Promise<{ email: string }>;
};

export default async function QuestionDetailPage({ params }: QuestionDetailPageProps) {
  const { email } = await params;

  const questions = await getMyQuestions();

  return (
    <div>
      <QuestionPageNav />
      <h1>{email}으로 지금까지 전송된 질문이에요.</h1>
    </div>
  );
}
