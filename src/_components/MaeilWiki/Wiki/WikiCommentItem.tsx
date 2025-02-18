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

export interface WikiCommentItemProps {
  wikiId: number;
  comment: WikiComment;
}

export default function WikiCommentItem({ wikiId, comment }: WikiCommentItemProps) {
  const { id, owner, createdAt, answer, likeCount } = comment;

  const { mutate } = usePostWikiCommentLike(wikiId, id);

  return (
    <div key={id} className={wikiCommentItem}>
      <div className={wikiCommentInfo}>
        <CommentOwnerProfile owner={owner} />
        <span className={wikiCommentCreatedAt}>{createdAt}</span>
      </div>
      <MDPreview source={answer} />
      <button className={wikiCommentLikeButton} onClick={() => mutate()}>
        ❤️ {likeCount > 0 && likeCount}
      </button>
    </div>
  );
}

function CommentOwnerProfile({ owner }: { owner?: Member }) {
  if (!owner) {
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
