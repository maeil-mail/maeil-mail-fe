'use client';

import * as React from 'react';
import {
  anonymousCommentOwnerProfileImage,
  wikiCommentCreatedAt,
  wikiCommentDeleteButton,
  wikiCommentInfo,
  wikiCommentItem,
  wikiCommentLikeButton,
  wikiCommentMainInto,
  wikiCommentOwnerName,
  wikiCommentOwnerProfile,
  wikiCommentOwnerProfileImage,
  wikiCommentOwnerProfileLink,
  wikiCommentSubInfo,
} from './wiki.css';
import { Member, WikiComment } from '../_types/wiki';
import MDPreview from '../Markdown/MDPreview';
import { usePostWikiCommentLike } from './_hooks/usePostWikiCommentLike';
import { useDeleteWikiComment } from './_hooks/useDeleteWikiComment';
import { calculateElapsedTime } from '../_utils/calculateElapsedTime';
import { useAuthContext } from '../_store/authContext';
import dynamic from 'next/dynamic';
import BlankLike from '@/_assets/images/maeilWiki/blankLike.svg';
import GenericAvatar from '@/_assets/images/maeilWiki/genericAvatar.svg';
import recordGAEvent from '@/_utils/recordGAEvent';
import { GA_EVENT } from '../_constants/GA_EVENT';

const LikeIcon = dynamic(() => import('../../../_assets/images/maeilWiki/like.svg'), {
  ssr: false,
  loading: () => <BlankLike />,
});
const BlankLikeIcon = dynamic(() => import('../../../_assets/images/maeilWiki/blankLike.svg'), {
  ssr: false,
  loading: () => <BlankLike />,
});

export interface WikiCommentItemProps {
  wikiId: number;
  comment: WikiComment;
}

export default function WikiCommentItem({ wikiId, comment }: WikiCommentItemProps) {
  const { id, owner, createdAt, answer, likeCount, isLiked } = comment;

  const { user } = useAuthContext();
  const isOwner = user?.id === owner.id;

  const { mutate: postCommentLike } = usePostWikiCommentLike(wikiId, id);

  const { mutate: deleteComment } = useDeleteWikiComment(wikiId, id);

  const onClickDeleteComment = () => {
    if (!isOwner) {
      return;
    }

    if (confirm('삭제하시겠습니까?')) {
      deleteComment();
    }
  };

  return (
    <div key={id} className={wikiCommentItem}>
      <div className={wikiCommentInfo}>
        <div className={wikiCommentMainInto}>
          <CommentOwnerProfile owner={owner} />
          <div className={wikiCommentSubInfo}>
            <span className={wikiCommentCreatedAt} suppressHydrationWarning>
              {calculateElapsedTime(createdAt)}
            </span>
            {isOwner && (
              <>
                <span className={wikiCommentCreatedAt}>•</span>
                <div
                  className={wikiCommentDeleteButton}
                  role="button"
                  onClick={onClickDeleteComment}
                >
                  삭제
                </div>
              </>
            )}
          </div>
        </div>

        <button
          className={wikiCommentLikeButton}
          onClick={() => {
            recordGAEvent(GA_EVENT.detailClickLike);
            postCommentLike();
          }}
        >
          {isLiked ? <LikeIcon /> : <BlankLikeIcon />} {likeCount}
        </button>
      </div>
      <MDPreview source={answer} />
    </div>
  );
}

function CommentOwnerProfile({ owner }: { owner: Member }) {
  if (!owner.name) {
    return (
      <div className={wikiCommentOwnerProfile}>
        <GenericAvatar className={anonymousCommentOwnerProfileImage} />
        <p className={wikiCommentOwnerName}>익명</p>
      </div>
    );
  }

  return (
    <a href={owner.github} className={wikiCommentOwnerProfileLink} rel="noopener noreferrer">
      <div className={wikiCommentOwnerProfile}>
        <img className={wikiCommentOwnerProfileImage} src={owner.profileImage} />
        <p className={wikiCommentOwnerName}>{owner.name}</p>
      </div>
    </a>
  );
}
