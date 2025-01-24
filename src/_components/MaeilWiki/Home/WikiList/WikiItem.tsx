import Image from 'next/image';
import React from 'react';
import ChatIcon from '@/_assets/icons/chatIcon.svg';
import {
  chatIcon,
  commentCountInfo,
  ownerImage,
  ownerInfo,
  wikiItem,
  wikiQuestion,
  wikiQuestionOrder,
  wikiQuestionText,
  wikiSubInfo,
} from './wikiList.css';
import { Member, WikiListItem } from '../../_types/wiki';
export default function WikiItem({ wiki, order }: { wiki: WikiListItem; order: number }) {
  const { question, owner, commentCount } = wiki;

  const displayingCommentCount = commentCount || '미답변';

  return (
    <li className={wikiItem}>
      <div className={wikiQuestion}>
        <div className={wikiQuestionOrder}>
          <span>{order}.</span>
        </div>
        <p className={wikiQuestionText}>{question}</p>
      </div>
      <div className={wikiSubInfo}>
        <OwnerInfo owner={owner} />
        <div className={commentCountInfo}>
          <ChatIcon className={chatIcon} /> {displayingCommentCount}
        </div>
      </div>
    </li>
  );
}

function OwnerInfo({ owner }: { owner?: Member }) {
  if (!owner) {
    return <div>질문 제공자: 익명</div>;
  }

  return (
    <div className={ownerInfo}>
      <p>질문 제공자: {owner?.name}</p>
      <Image
        width={17}
        height={17}
        className={ownerImage}
        src={owner.profileImage}
        alt={`작성자 ${owner.name}님의 프로필 이미지`}
      />
    </div>
  );
}
