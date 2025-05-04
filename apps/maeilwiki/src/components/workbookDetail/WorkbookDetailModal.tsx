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
import WorkbookDetailContent from './WorkbookDetailContent';

export interface WorkbookDetailModalProps {}

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

export default function WorkbookDetailModal(props: WorkbookDetailModalProps) {
  const router = useRouter();

  const closeModal = () => {
    router.back();
  };

  return (
    <Modal contentClassName={workbookDetailModalContainer} isOpen={true} onClose={closeModal}>
      <CloseIcon role="button" alt="모달 닫기" onClick={closeModal} className={closeIcon} />
      <WorkbookDetailContent />
    </Modal>
  );
}
