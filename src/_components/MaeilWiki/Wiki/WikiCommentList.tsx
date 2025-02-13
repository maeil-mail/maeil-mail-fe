import * as React from 'react';
import { Member, WikiComment } from '../_types/wiki';
import {
  anonymousCommentOwnerProfileImage,
  wikiCommentCreatedAt,
  wikiCommentInfo,
  wikiCommentItem,
  wikiCommentLikeButton,
  wikiCommentList,
  wikiCommentListSection,
  wikiCommentListTitle,
  wikiCommentOwnerName,
  wikiCommentOwnerProfile,
  wikiCommentOwnerProfileImage,
  wikiCommentOwnerProfileLink,
} from './wiki.css';

export interface WikiCommentListProps {
  comments: WikiComment[];
}

export default function WikiCommentList({ comments }: WikiCommentListProps) {
  return (
    <section className={wikiCommentListSection}>
      <WikiComments comments={comments} />
    </section>
  );
}

function WikiComments({ comments }: { comments: WikiComment[] }) {
  if (comments.length === 0) {
    return <div>💡 답변이 아직 없습니다. 답변을 달아 지식을 공유해주세요.</div>;
  }

  return (
    <>
      <h2 className={wikiCommentListTitle}>답변 목록</h2>
      <div className={wikiCommentList}>
        {comments.map(({ id, answer, likeCount, owner, createdAt }) => (
          <div key={id} className={wikiCommentItem}>
            <div className={wikiCommentInfo}>
              <CommentOwnerProfile owner={owner} />
              <span className={wikiCommentCreatedAt}>{createdAt}</span>
            </div>
            <p>{answer}</p>
            <button className={wikiCommentLikeButton}>❤️ {likeCount > 0 && likeCount}</button>
          </div>
        ))}
      </div>
    </>
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
