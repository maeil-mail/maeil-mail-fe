import { myStyle } from '@/_styles/vars.css';

type QuestionDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export default async function QuestionDetailPage({ params }: QuestionDetailPageProps) {
  const { slug } = await params;

  return <div className={myStyle}></div>;
}
