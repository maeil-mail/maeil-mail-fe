'use client';

import Button from '@/_components/common/Button/Button';
import * as React from 'react';
import { wikiCommentInputButton, wikiCommentInputSection } from './wiki.css';
import MDLiveEditor from '../Markdown/MDLiveEditor';
import { useCreateWikiComment } from '../Home/_hooks/useCreateWikiComment';

export interface WikiCommentInputProps {
  wikiId: number;
}

export default function WikiCommentInput({ wikiId }: WikiCommentInputProps) {
  const [comment, setComment] = React.useState('');
  const [isAnonymous, setIsAnonymous] = React.useState(false);

  const { mutate } = useCreateWikiComment(wikiId);

  const onChangeText = (text: string) => {
    setComment(text);
  };

  const onClickSubmit = () => {
    if (comment.length === 0) {
      alert('답변을 작성해주세요.');
      return;
    }

    if (confirm('게시글을 작성하시겠습니까?')) {
      mutate({ answer: comment, isAnonymous });
    }
  };

  return (
    <section className={wikiCommentInputSection}>
      <h2>답변 작성</h2>
      <MDLiveEditor text={comment} onChange={onChangeText} />
      <Button variant="primary" className={wikiCommentInputButton} onClick={onClickSubmit}>
        작성
      </Button>
      <div>
        <label htmlFor="isAnonymous">익명</label>
        <input
          id="isAnonymous"
          type="checkbox"
          checked={isAnonymous}
          onChange={() => setIsAnonymous((prev) => !prev)}
        />
      </div>
    </section>
  );
}
