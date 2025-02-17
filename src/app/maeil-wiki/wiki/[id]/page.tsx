import PageInnerLayout from '@/_components/common/PageInnerLayout/PageInnerLayout';
import { getWikiById } from '@/_components/MaeilWiki/_apis/wiki';
import WikiCommentInput from '@/_components/MaeilWiki/Wiki/WikiCommentInput';
import WikiCommentList from '@/_components/MaeilWiki/Wiki/WikiCommentList';
import WikiQuestion from '@/_components/MaeilWiki/Wiki/WikiQuestion';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const rawWikiId = (await params).id;

  const wikiId = Number(rawWikiId);

  if (!wikiId) {
    throw new Error('잘못된 접근입니다.');
  }

  const wiki = await getWikiById(wikiId);

  return (
    <PageInnerLayout>
      <WikiQuestion wiki={wiki} />
      <WikiCommentList comments={wiki.comments} />
      <WikiCommentInput wikiId={wikiId} />
    </PageInnerLayout>
  );
}
