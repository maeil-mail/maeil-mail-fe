import { WikiCategory } from './wikiCategory';

export interface Member {
  profileImage: string;
  name: string;
  github: string;
}

export interface Wiki {
  id: number;
  question: string;
  questionDetail?: string;
  category: WikiCategory;
  owner?: Member;
  createdAt: string;
  comments: [
    {
      id: number;
      answer: string;
      owner?: Member;
      createdAt: string;
    },
  ];
}

export type WikiListItem = Omit<Wiki, 'questionDetail' | 'comments'> & { commentCount: number };
