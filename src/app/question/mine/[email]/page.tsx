import { getMyQuestions } from '@/_apis/question';
import PageInnerLayout from '@/_components/common/PageInnerLayout/PageInnerLayout';
import Nav from '@/_components/common/Nav/Nav';
import MyQuestionListHeader from '@/_components/MyQuestionList/Header';
import MyQuestionList from '@/_components/MyQuestionList/MyQuestionList';
import Paginator from '@/_components/common/Paginator';

type MyQuestionListProps = {
  params: Promise<{ email: string }>;
  searchParams: Promise<{ page: string }>;
};

export default async function MyQuestionListPage({ params, searchParams }: MyQuestionListProps) {
  const { email: rawEmail } = await params;
  const { page: rawPage } = await searchParams;

  const email = decodeURIComponent(rawEmail);
  const page = Number(rawPage) || 1;

  const { totalPage, data } = await getMyQuestions(email, page);

  return (
    <div>
      <Nav />
      <PageInnerLayout>
        <MyQuestionListHeader email={email} />
        <MyQuestionList questions={data} />
        <Paginator currentPage={page} lastPage={totalPage} />
      </PageInnerLayout>
    </div>
  );
}
