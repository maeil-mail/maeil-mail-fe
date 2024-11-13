import { getMyQuestions } from '@/_apis/question';
import PageInnerLayout from '@/_components/common/PageInnerLayout/PageInnerLayout';
import QuestionPageNav from '@/_components/common/QuestionPageNav';
import MyQuestionListHeader from '@/_components/MyQuestionList/Header';
import MyQuestionList, { MyQuestion } from '@/_components/MyQuestionList/MyQuestionList';

const MOCK_QUESTIONS: MyQuestion[] = [
  {
    id: 1,
    category: 'backend',
    title: 'Filter와 Interceptor의 차이점을 말해주세요.',
  },
  {
    id: 2,
    category: 'frontend',
    title: 'Filter와 Interceptor의 차이점을 말해주세요.',
  },
  {
    id: 3,
    category: 'backend',
    title: 'Filter와 Interceptor의 차이점을 말해주세요.',
  },
  {
    id: 4,
    category: 'frontend',
    title: 'Filter와 Interceptor의 차이점을 말해주세요.',
  },
];

type QuestionDetailPageProps = {
  params: Promise<{ email: string }>;
};

export default async function QuestionDetailPage({ params }: QuestionDetailPageProps) {
  const { email: rawEmail } = await params;

  const email = decodeURIComponent(rawEmail);

  const questions = await getMyQuestions();

  return (
    <div>
      <QuestionPageNav />
      <PageInnerLayout>
        <MyQuestionListHeader email={email} />
        <MyQuestionList questions={MOCK_QUESTIONS} />
      </PageInnerLayout>
    </div>
  );
}
