import WikiPage from '@/pages/wikiDetail/Page';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const rawWikiId = (await params).id;

  const wikiId = Number(rawWikiId);

  if (!wikiId) {
    throw new Error('잘못된 접근입니다.');
  }

  return <WikiPage wikiId={wikiId} />;
}
