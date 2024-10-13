import { pageLayout } from './page.css';
import { myStyle } from '@/_styles/vars.css';

import DetailTitle from '@/_components/QuestionDetail/DetailTitle';
import Divider from '@/_components/common/Divider/Divider';
import DetailCategory from '@/_components/QuestionDetail/DetailCategory';
import DetailAnswer from '@/_components/QuestionDetail/DetailAnswer';
import { getDetailQuestion } from '@/_apis/api';

type QuestionDetailPageProps = {
  params: { slug: string };
};

export default async function QuestionDetailPage({ params }: QuestionDetailPageProps) {
  const { slug } = params;
  const decodedSlug = decodeURIComponent(slug);
  const detailQuestion = await getDetailQuestion({ id: decodedSlug });

  return (
    <div className={`${pageLayout} ${myStyle}`}>
      <DetailTitle title={detailQuestion.title} />
      <Divider variant="default" />
      <DetailCategory category={detailQuestion.category} />
      <Divider variant="default" />
      <DetailAnswer content={detailQuestion.content} />
    </div>
  );
}
