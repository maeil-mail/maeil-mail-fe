import Image from 'next/image';
import React from 'react';
import ChatIcon from '@/_assets/icons/chatIcon.svg';

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
  owner: Member | null;
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

const MOCK_WIKI_LIST: {
  isLastPage: boolean;
  totalPage: number;
  data: WikiListItem[];
} = {
  isLastPage: false,
  totalPage: 2,
  data: [
    {
      id: 1,
      question: '클로저에 대해 설명해주세요.',
      category: 'frontend',
      owner: {
        profileImage: 'https://avatars.githubusercontent.com/u/80797824?s=96&v=4',
        name: '박한영(Ryan)',
        github: 'https://github.com/Parkhanyoung',
      },
      createdAt: '2025-01-22T15:30:00Z',
      commentCount: 0,
    },
    {
      id: 2,
      question: '프로세스보다 스레드의 컨텍스트 스위칭이 더 빠른 이유는 무엇인가요?',
      category: 'backend',
      owner: {
        profileImage: 'https://avatars.githubusercontent.com/u/39932141?v=4',
        name: 'Haneul Lee',
        github: 'https://github.com/Parkhanyoung',
      },
      createdAt: '2025-01-22T15:30:00Z',
      commentCount: 3,
    },
  ],
};

export default function WikiList() {
  return (
    <ol style={{ marginTop: '3rem', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
      {MOCK_WIKI_LIST.data.map((wiki, index) => (
        <WikiItem key={wiki.id} wiki={wiki} order={index + 1} />
      ))}
    </ol>
  );
}

function WikiItem({ wiki, order }: { wiki: WikiListItem; order: number }) {
  const { id, question, owner, commentCount } = wiki;

  return (
    <li
      style={{
        border: '2px solid #F4f4f4',
        padding: '1.5rem',
        borderRadius: '0.8rem',
        cursor: 'pointer',
        background: '#f9f9f9',
      }}
    >
      <div style={{ display: 'flex', gap: '1.5rem' }}>
        <div
          style={{
            width: '3rem',
            minWidth: '3rem',
            height: '3rem',
            fontWeight: 600,
            fontSize: '1.5rem',
            color: 'white',
            background: '#00a86b',
            borderRadius: 999,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <span>{order}</span>
        </div>
        <p
          style={{
            color: '#2b2b2b',
            fontSize: '1.7rem',
            lineHeight: '2.5rem',
            fontWeight: 500,
            wordBreak: 'keep-all',
            paddingTop: '0.3rem',
          }}
        >
          {question}
        </p>
      </div>
      <div
        style={{
          marginTop: '1.7rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '1.3rem',
          color: 'rgb(158 158 158)',
        }}
      >
        {owner ? (
          <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
            <p>질문 제공자: {owner?.name}</p>
            <Image
              width={17}
              height={17}
              style={{ borderRadius: 999 }}
              src={owner.profileImage}
              alt={`작성자 ${owner.name}님의 프로필 이미지`}
            />
          </div>
        ) : (
          <div>질문 제공자: 익명</div>
        )}

        <div style={{ height: '2rem', display: 'flex', gap: '0.3rem', marginTop: '0.3rem' }}>
          <ChatIcon style={{ width: '2rem' }} /> {commentCount || '미답변'}
        </div>
      </div>
    </li>
  );
}
