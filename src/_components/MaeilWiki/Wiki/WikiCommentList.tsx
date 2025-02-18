'use client';

import * as React from 'react';
import { WikiComment } from '../_types/wiki';
import { wikiCommentList, wikiCommentListSection, wikiCommentListTitle } from './wiki.css';

import WikiCommentItem from './WikiCommentItem';

export interface WikiCommentListProps {
  wikiId: number;
  comments: WikiComment[];
}

export default function WikiCommentList({ wikiId, comments }: WikiCommentListProps) {
  return (
    <section className={wikiCommentListSection}>
      <WikiComments wikiId={wikiId} comments={comments} />
    </section>
  );
}

function WikiComments({ wikiId, comments }: { wikiId: number; comments: WikiComment[] }) {
  if (comments.length === 0) {
    return <div>💡 답변이 아직 없습니다. 답변을 달아 지식을 공유해주세요.</div>;
  }

  return (
    <>
      <h2 className={wikiCommentListTitle}>답변 목록</h2>
      <div className={wikiCommentList}>
        {comments.map((comment) => (
          <WikiCommentItem key={comment.id} wikiId={wikiId} comment={comment} />
        ))}
      </div>
    </>
  );
}
