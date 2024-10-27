import { pageLayout, detailHeaderWrapper } from "./page.css";
import { myStyle } from "@/_styles/vars.css";

import DetailTitle from "@/_components/QuestionDetail/DetailTitle";
import Divider from "@/_components/common/Divider/Divider";
import DetailCategory from "@/_components/QuestionDetail/DetailCategory";
import DetailAnswer from "@/_components/QuestionDetail/DetailAnswer";
import { getDetailQuestion } from "@/_apis/api";
import { Metadata } from "next";

type QuestionDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: QuestionDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const detailQuestion = await getDetailQuestion({ id: decodedSlug });

  return {
    title: `매일메일의 ${detailQuestion.title} 질문에 관한 상세 페이지`,
    description: `${detailQuestion.content}에 관한 내용을 담고 있어요!`,
  };
}

export default async function QuestionDetailPage({
  params,
}: QuestionDetailPageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);
  const detailQuestion = await getDetailQuestion({ id: decodedSlug });

  return (
    <div className={`${pageLayout} ${myStyle}`}>
      <div className={detailHeaderWrapper}>
        <DetailTitle title={detailQuestion.title} />
        <Divider variant="default" />
        <DetailCategory category={detailQuestion.category} />
        <Divider variant="default" />
      </div>

      <DetailAnswer content={detailQuestion.content} />
    </div>
  );
}
