import { WikiCategory } from './wikiCategory';

export interface Member {
  profileImage: string;
  name: string;
  github: string;
}

export interface WikiComment {
  id: number;
  answer: string;
  owner?: Member;
  createdAt: string;
  likeCount: number;
}

export interface Wiki {
  id: number;
  question: string;
  questionDetail?: string;
  category: WikiCategory;
  owner?: Member;
  createdAt: string;
  comments: WikiComment[];
}

export type WikiListItem = Omit<Wiki, 'questionDetail' | 'comments'> & { commentCount: number };
