import PageInnerLayout from '@/_components/common/PageInnerLayout/PageInnerLayout';
import WikiPage from '@/_components/MaeilWiki/Wiki';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const rawWikiId = (await params).id;

  const wikiId = Number(rawWikiId);

  if (!wikiId) {
    throw new Error('잘못된 접근입니다.');
  }

  return (
    <PageInnerLayout>
      <WikiPage wikiId={wikiId} />
    </PageInnerLayout>
  );
}
