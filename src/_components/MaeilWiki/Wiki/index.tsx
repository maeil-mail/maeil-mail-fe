'use client';

import WikiQuestion from './WikiQuestion';
import WikiCommentList from './WikiCommentList';
import WikiCommentInput from './WikiCommentInput';
import { useWiki } from './_hooks/useWiki';
import PageInnerLayout from '@/_components/common/PageInnerLayout/PageInnerLayout';

export interface WikiPageProps {
  wikiId: number;
}

export default function WikiPage({ wikiId }: WikiPageProps) {
  const { data } = useWiki(wikiId);

  return (
    <PageInnerLayout>
      <WikiQuestion wiki={data} />
      <WikiCommentList wikiId={wikiId} comments={data.comments} />
      <WikiCommentInput wikiId={wikiId} />
    </PageInnerLayout>
  );
}
