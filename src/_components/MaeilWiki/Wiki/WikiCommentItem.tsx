'use client';

import * as React from 'react';
import {
  anonymousCommentOwnerProfileImage,
  wikiCommentCreatedAt,
  wikiCommentInfo,
  wikiCommentItem,
  wikiCommentLikeButton,
  wikiCommentOwnerName,
  wikiCommentOwnerProfile,
  wikiCommentOwnerProfileImage,
  wikiCommentOwnerProfileLink,
} from './wiki.css';
import { Member, WikiComment } from '../_types/wiki';
import MDPreview from '../Markdown/MDPreview';
import { usePostWikiCommentLike } from './_hooks/usePostWikiCommentLike';
import { useDeleteWikiComment } from './_hooks/useDeleteWikiComment';

export interface WikiCommentItemProps {
  wikiId: number;
  comment: WikiComment;
}

export default function WikiCommentItem({ wikiId, comment }: WikiCommentItemProps) {
  const { id, owner, createdAt, answer, likeCount } = comment;

  const { mutate: postCommentLike } = usePostWikiCommentLike(wikiId, id);

  const { mutate: deleteComment } = useDeleteWikiComment(wikiId, id);

  const onClickDeleteComment = () => {
    if (confirm('삭제하시겠습니까?')) {
      deleteComment();
    }
  };

  return (
    <div key={id} className={wikiCommentItem}>
      <div className={wikiCommentInfo}>
        <CommentOwnerProfile owner={owner} />
        <span className={wikiCommentCreatedAt}>{createdAt}</span>
      </div>
      <MDPreview source={answer} />
      <button className={wikiCommentLikeButton} onClick={() => postCommentLike()}>
        ❤️ {likeCount > 0 && likeCount}
      </button>
      <button onClick={onClickDeleteComment}>삭제</button>
    </div>
  );
}

function CommentOwnerProfile({ owner }: { owner: Member }) {
  if (!owner.name) {
    return (
      <div className={wikiCommentOwnerProfile}>
        <div className={anonymousCommentOwnerProfileImage} />
        <p className={wikiCommentOwnerName}>익명</p>
      </div>
    );
  }

  return (
    <a
      href={owner.github}
      className={wikiCommentOwnerProfileLink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className={wikiCommentOwnerProfile}>
        <img className={wikiCommentOwnerProfileImage} src={owner.profileImage} />
        <p className={wikiCommentOwnerName}>{owner.name}</p>
      </div>
    </a>
  );
}
