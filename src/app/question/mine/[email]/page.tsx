import { getMyQuestions } from '@/_apis/question';
import PageInnerLayout from '@/_components/common/PageInnerLayout/PageInnerLayout';
import Nav from '@/_components/common/Nav/Nav';
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
      <Nav />
      <PageInnerLayout>
        <MyQuestionListHeader email={email} />
        <MyQuestionList questions={questions} />
      </PageInnerLayout>
    </div>
  );
}
