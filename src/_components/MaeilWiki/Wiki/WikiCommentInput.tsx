import Button from '@/_components/common/Button/Button';
import * as React from 'react';
import { wikiCommentInputButton, wikiCommentInputSection } from './wiki.css';

export interface IWikiCommentFormProps {}

export default function WikiCommentInput(props: IWikiCommentFormProps) {
  return (
    <section className={wikiCommentInputSection}>
      <h2>답변 작성</h2>
      <textarea />
      <Button variant="primary" className={wikiCommentInputButton}>
        작성
      </Button>
    </section>
  );
}
