import React from 'react';
import { wikiList } from './wikiList.css';
import mockWikiList from '../mockWikiList.json';
import Paginator from '@/_components/common/Paginator';
import WikiItem from './WikiItem';

export interface Member {
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

export type WikiListItem = Omit<Wiki, 'questionDetail' | 'comments'> & { commentCount: number };

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
      <Paginator currentPage={1} lastPage={11} />
    </div>
  );
}
