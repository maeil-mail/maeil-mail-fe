'use client';

import WikiQuestion from './WikiQuestion';
import WikiCommentList from './WikiCommentList';
import WikiCommentInput from './WikiCommentInput';
import { useWiki } from './_hooks/useWiki';

export interface WikiPageProps {
  wikiId: number;
}

export default function WikiPage({ wikiId }: WikiPageProps) {
  const { data } = useWiki(wikiId);

  return (
    <>
      <WikiQuestion wiki={data} />
      <WikiCommentList wikiId={wikiId} comments={data.comments} />
      <WikiCommentInput wikiId={wikiId} />
    </>
  );
}
