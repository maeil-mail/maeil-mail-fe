import * as React from 'react';
import WorkbookDetailContent from '@/components/workbookDetail/WorkbookDetailContent';
import {
  workbookDetailPageContainer,
  workbookDetailPageWrapper,
} from '@/components/workbookDetail/workbookDetail.css';
import { getWorkbookDetail } from '@/components/workbookDetail/apis/getWorkbookDetail';

const MOCK = {
  workbookTitle:
    '자바스크립트 문제집 어쩌구 자바스크립트 문제집 어쩌구 자바스크립트 문제집 어쩌구 자바스크립트 문제집 어쩌구 자바스크립트 문제집 어쩌구 자바스크립트 문제집 어쩌구 자바스크립트 문제집 어쩌구 자바스크립트 문제집 어쩌구 자바스크립트 문제집 어쩌구',
  difficultyLevel: 3,
  category: 'backend',
  workbookDetail:
    '자바스크립트 문제집입니다. 자바스크립트 문제집입니다. 자바스크립트 문제집입니다. 자바스크립트 문제집입니다. 자바스크립트 문제집입니다. 자바스크립트 문제집입니다. 자바스크립트 문제집입니다. 자바스크립트 문제집입니다. 자바스크립트 문제집입니다. 자바스크립트 문제집입니다.',
  owner: {
    id: 2,
    profileImage: 'string',
    name: '박한영(Ryan)',
    github: 'string',
  },
  createdAt: '2025-05-04',
  timeLimit: 15,
  questionCount: 3,
  solvedCount: 345,
} as const;

export default async function Page({ params }: { params: { id: number } }) {
  const id = params.id;

  const workbook = await getWorkbookDetail(id);

  return (
    <div className={workbookDetailPageContainer}>
      <div className={workbookDetailPageWrapper}>
        <WorkbookDetailContent workbook={workbook} />
      </div>
    </div>
  );
}
