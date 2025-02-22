'use client';

import WikiQuestion from './WikiQuestion';
import WikiCommentList from './WikiCommentList';
import { useWiki } from './_hooks/useWiki';
import { wikiMainContent, wikiPage, wikiPageContent } from './wiki.css';
import { AuthProvider } from '../_store/authContext';
import React from 'react';
import dynamic from 'next/dynamic';

const WikiCommentInputSection = dynamic(() => import('./WikiCommentInputSection'), {
  ssr: false,
});

export interface WikiPageProps {
  wikiId: number;
}

export default function WikiPage({ wikiId }: WikiPageProps) {
  const { data } = useWiki(wikiId);

  return (
    <div className={wikiPage}>
      <AuthProvider>
        <div className={wikiPageContent}>
          <div className={wikiMainContent}>
            <WikiQuestion wiki={data} />
            <WikiCommentList wikiId={wikiId} comments={data.comments} />
          </div>
          <WikiCommentInputSection wikiId={wikiId} />
        </div>
      </AuthProvider>
    </div>
  );
}
