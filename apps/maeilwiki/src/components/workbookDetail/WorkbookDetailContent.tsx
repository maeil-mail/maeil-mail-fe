'use client';

import { Button, Modal } from '@maeil/ui';
import { useRouter, useSearchParams } from 'next/navigation';
import {
  closeIcon,
  solvedCountTag,
  workbookDetailModalContainer,
  workbookDetailText,
  workbookInfo,
  workbookInfoField,
  workbookInfoLine,
  workbookInfoValue,
  workbookTitleText,
} from './workbookDetail.css';
import CloseIcon from '@/assets/closeIcon.svg';
import DifficultyIndicator from '../workbookList/DifficultyIndicator';
import { useEffect } from 'react';

export interface WorkbookDetailContentProps {}

const MOCK = {
  workbookTitle:
    '자바스크립트 문제집 어쩌구 자바스크립트 문제집 어쩌구 자바스크립트 문제집 어쩌구 자바스크립트 문제집 어쩌구 자바스크립트 문제집 어쩌구 자바스크립트 문제집 어쩌구 자바스크립트 문제집 어쩌구 자바스크립트 문제집 어쩌구 자바스크립트 문제집 어쩌구',
  difficultyLevel: 3,
  category: 'backend',
  workbookDetail: '자바스크립트 문제집입니다.',
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
};

export default function WorkbookDetailContent(props: WorkbookDetailContentProps) {
  const router = useRouter();

  return (
    <div>
      <div className={solvedCountTag}>총 {MOCK.solvedCount}명이 풀어봤어요!</div>
      <h1 className={workbookTitleText}>{MOCK.workbookTitle}</h1>
      <p className={workbookDetailText}>{MOCK.workbookDetail}</p>
      <section className={workbookInfo}>
        <div className={workbookInfoLine}>
          <div className={workbookInfoField}>난이도</div>
          <DifficultyIndicator difficulty={MOCK.difficultyLevel} />
        </div>
        <div className={workbookInfoLine}>
          <div className={workbookInfoField}>문항 수</div>
          <div className={workbookInfoValue}>{MOCK.questionCount}문항</div>
        </div>
        <div className={workbookInfoLine}>
          <div className={workbookInfoField}>제한시간</div>
          <div className={workbookInfoValue}>{MOCK.timeLimit}분</div>
        </div>
        <div className={workbookInfoLine}>
          <div className={workbookInfoField}>출제자</div>
          <div className={workbookInfoValue}>{MOCK.owner.name}</div>
        </div>
        <div className={workbookInfoLine}>
          <div className={workbookInfoField}>출제일</div>
          <div className={workbookInfoValue}>{MOCK.createdAt}</div>
        </div>
      </section>
      <Button variant="primary">문제 풀기</Button>
    </div>
  );
}
