import { Metadata } from 'next';
import DetailTitle from '@/_components/QuestionDetail/DetailTitle';
import DetailCategory from '@/_components/QuestionDetail/DetailCategory';
import DetailAnswer from '@/_components/QuestionDetail/DetailAnswer';
import { getDetailQuestion } from '@/_apis/question';
import QuestionPageNav from '@/_components/common/QuestionPageNav';
import Footer from '@/_components/common/Footer/Footer';
import { pageLayout } from './page.css';

type QuestionDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: QuestionDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const detailQuestion = await getDetailQuestion({ id: decodedSlug });

  return {
    title: `매일메일 - ${detailQuestion.title}`,
    description: detailQuestion.content,
  };
}

export default async function QuestionDetailPage({ params }: QuestionDetailPageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const detailQuestion = await getDetailQuestion({ id: decodedSlug });

  return (
    <div>
      <QuestionPageNav isSharable />
      <div className={pageLayout}>
        <div>
          <DetailTitle title={detailQuestion.title} />
          <DetailCategory category={detailQuestion.category} />
        </div>

        <DetailAnswer content={detailQuestion.content} />
      </div>
      <Footer />
    </div>
  );
}
