'use client';

import Button from '@/_components/common/Button/Button';
import * as React from 'react';
import {
  commentSubmitButtonWrapper,
  editorAuthOverlay,
  isAnonymousCheckbox,
  isAnonymousLabel,
  isAnonymousWrapper,
  wikiAddCommentTitle,
  wikiCommentEditorContainer,
  wikiCommentInputButton,
  wikiCommentInputSection,
} from './wiki.css';
import MDLiveEditor from '../Markdown/MDLiveEditor';
import { usePostWikiComment } from './_hooks/usePostWikiComment';
import { redirectToGithubLogin } from '../_utils/redirectToGithubLogin';
import { useAuthContext } from '../_store/authContext';

export interface WikiCommentInputSectionProps {
  wikiId: number;
}

export default function WikiCommentInputSection({ wikiId }: WikiCommentInputSectionProps) {
  const [comment, setComment] = React.useState('');
  const [isAnonymous, setIsAnonymous] = React.useState(false);

  const { isAuthenticated } = useAuthContext();

  const { mutate, isPending } = usePostWikiComment(wikiId);

  const onChangeText = (text: string) => {
    setComment(text);
  };

  const onClickSubmit = () => {
    if (comment.length === 0) {
      alert('답변을 작성해주세요.');
      return;
    }

    if (confirm('답변을 작성하시겠습니까?')) {
      mutate({ answer: comment, isAnonymous });
    }
  };

  const onClickEditorOverlay = () => {
    if (confirm('로그인이 필요한 기능입니다. 로그인하시겠습니까?')) {
      redirectToGithubLogin(window.location.pathname);
    }
  };

  return (
    <section className={wikiCommentInputSection}>
      <h2 className={wikiAddCommentTitle}>답변 추가</h2>
      <div className={wikiCommentEditorContainer}>
        {!isAuthenticated && <div onClick={onClickEditorOverlay} className={editorAuthOverlay} />}
        <MDLiveEditor text={comment} onChange={onChangeText} />
        <div className={isAnonymousWrapper}>
          <label className={isAnonymousLabel} htmlFor="isAnonymous">
            익명
            <input
              id="isAnonymous"
              type="checkbox"
              checked={isAnonymous}
              className={isAnonymousCheckbox}
              onChange={() => setIsAnonymous((prev) => !prev)}
            />
          </label>

          <div className={commentSubmitButtonWrapper}>
            <Button
              className={wikiCommentInputButton}
              variant="primary"
              onClick={onClickSubmit}
              isPending={isPending}
              style={{ padding: '1rem' }}
            >
              작성
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
