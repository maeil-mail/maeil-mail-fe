import Image from 'next/image';
import React from 'react';
import ChatIcon from '@/_assets/icons/chatIcon.svg';
import {
  chatIcon,
  commentCountInfo,
  ownerImage,
  ownerInfo,
  wikiItem,
  wikiList,
  wikiQuestion,
  wikiQuestionOrder,
  wikiQuestionText,
  wikiSubInfo,
} from './wikiList.css';
import mockWikiList from '../mockWikiList.json';

interface Member {
  profileImage: string;
  name: string;
  github: string;
}

interface Wiki {
  id: number;
  question: string;
  questionDetail: string | null;
  category: 'backend' | 'frontend' | 'etc';
  owner?: Member;
  createdAt: string;
  comments: [
    {
      id: number;
      answer: string;
      owner: Member | null;
      createdAt: string;
    },
  ];
}

type WikiListItem = Omit<Wiki, 'questionDetail' | 'comments'> & { commentCount: number };

const MOCK_WIKI_LIST = mockWikiList as {
  isLastPage: boolean;
  totalPage: number;
  data: WikiListItem[];
};

export default function WikiList() {
  return (
    <div>
      <ol className={wikiList}>
        {MOCK_WIKI_LIST.data.map((wiki, index) => (
          <WikiItem key={wiki.id} wiki={wiki} order={index + 1} />
        ))}
      </ol>
    </div>
  );
}

function WikiItem({ wiki, order }: { wiki: WikiListItem; order: number }) {
  const { question, owner, commentCount } = wiki;

  const displayingCommentCount = commentCount || '미답변';

  return (
    <li className={wikiItem}>
      <div className={wikiQuestion}>
        <div className={wikiQuestionOrder}>
          <span>{order}</span>
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
