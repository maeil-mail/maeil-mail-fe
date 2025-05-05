import * as React from 'react';
import Link from 'next/link';
import WorkbookItem from './WorkbookItem';
import Paginator from '@/common/components/Paginator';
import { workBookItemWrapper, workbookListContainer } from './workbookList.css';
import { WikiCategoryTabOption } from '@/common/types/wiki';

export interface WorkbookListProps {
  category: WikiCategoryTabOption;
  page: number;
}

const WORKBOOK_LIST = [
  {
    id: 123,
    workbookTitle:
      '자바스크립트 문제집 자바스크립트 문제집 자바스크립트 문제집 자바스크립트 문제집 자바스크립트 문제집 자바스크립트 문제집 자바스크립트 문제집 자바스크립트 문제집 자바스크립트 문제집 자바스크립트 문제집 자바스크립트 문제집 자바스크립트 문제집 자바스크립트 문제집',
    difficultyLevel: 3,
    category: 'frontend',
    workbookDetail:
      '자바스크립트 문제집을 풀어보세요. 자바스크립트 문제집을 풀어보세요. 자바스크립트 문제집을 풀어보세요. 자바스크립트 문제집을 풀어보세요. 자바스크립트 문제집을 풀어보세요. 자바스크립트 문제집을 풀어보세요. 자바스크립트 문제집을 풀어보세요.',
    owner: {
      id: 1,
      profileImage: '',
      name: '박한영',
      github: 'www.naver.com',
    },
    createdAt: '2025-05-02',
    questionCount: 5,
    solvedCount: 193,
  },
  {
    id: 124,
    workbookTitle: '자바스크립트 문제집 2',
    difficultyLevel: 3,
    category: 'frontend',
    workbookDetail: '자바스크립트 문제집 2을 풀어보세요.',
    owner: {
      id: 2,
      profileImage: '',
      name: '박한영',
      github: 'www.naver.com',
    },
    createdAt: '2023-01-13',
    questionCount: 3,
    solvedCount: 293,
  },
  {
    id: 125,
    workbookTitle: '자바스크립트 문제집 2',
    difficultyLevel: 3,
    category: 'etc',
    workbookDetail: '자바스크립트 문제집 2을 풀어보세요.',
    owner: {
      id: 2,
      profileImage: '',
      name: '박한영',
      github: 'www.naver.com',
    },
    createdAt: '2023-01-13',
    questionCount: 3,
    solvedCount: 293,
  },
  {
    id: 126,
    workbookTitle: '자바스크립트 문제집 2',
    difficultyLevel: 3,
    category: 'backend',
    workbookDetail: '자바스크립트 문제집 2을 풀어보세요.',
    owner: {
      id: 2,
      profileImage: '',
      name: '박한영',
      github: 'www.naver.com',
    },
    createdAt: '2023-01-13',
    questionCount: 3,
    solvedCount: 293,
  },
] as const;

export default function WorkbookList({ category, page }: WorkbookListProps) {
  // const { data } = useWorkbookList(category, page);

  // const { data: workbookList, totalPage } = data;

  return (
    <div>
      <ol className={workbookListContainer}>
        {WORKBOOK_LIST.map((workbook) => (
          <li className={workBookItemWrapper} key={workbook.id}>
            <Link
              scroll={false}
              href={{
                pathname: `workbook/${workbook.id}`,
                query: { category, page },
              }}
            >
              <WorkbookItem workbook={workbook} />
            </Link>
          </li>
        ))}
      </ol>
      <Paginator currentPage={page} lastPage={8} />
    </div>
  );
}
