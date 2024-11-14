import { getMyQuestions } from '@/_apis/question';
import PageInnerLayout from '@/_components/common/PageInnerLayout/PageInnerLayout';
import QuestionPageNav from '@/_components/common/QuestionPageNav';
import MyQuestionListHeader from '@/_components/MyQuestionList/Header';
import MyQuestionList from '@/_components/MyQuestionList/MyQuestionList';

type MyQuestionListProps = {
  params: Promise<{ email: string }>;
};

export default async function MyQuestionListPage({ params }: MyQuestionListProps) {
  const { email: rawEmail } = await params;

  const email = decodeURIComponent(rawEmail);

  const questions = await getMyQuestions(email);

  return (
    <div>
      <QuestionPageNav />
      <PageInnerLayout>
        <MyQuestionListHeader email={email} />
        <MyQuestionList questions={questions} />
      </PageInnerLayout>
    </div>
  );
}
