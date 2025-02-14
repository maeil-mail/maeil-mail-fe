'use client';

import Button from '@/_components/common/Button/Button';
import * as React from 'react';
import { wikiCommentInputButton, wikiCommentInputSection } from './wiki.css';
import MDLiveEditor from '../Markdown/MDLiveEditor';

export interface IWikiCommentFormProps {}

export default function WikiCommentInput(props: IWikiCommentFormProps) {
  const [comment, setComment] = React.useState('');

  const onChangeText = (text: string) => {
    setComment(text);
  };

  return (
    <section className={wikiCommentInputSection}>
      <h2>답변 작성</h2>
      <MDLiveEditor text={comment} onChange={onChangeText} />
      <Button variant="primary" className={wikiCommentInputButton}>
        작성
      </Button>
    </section>
  );
}
