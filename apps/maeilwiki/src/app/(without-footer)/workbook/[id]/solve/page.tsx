import * as React from 'react';
import SolveWorkbookPage from '@/components/solveWorkbook/Page';
import {
  getWorkbookDetail,
  WorkbookDetailItem,
} from '@/components/workbookDetail/apis/getWorkbookDetail';

const MOCK: WorkbookDetailItem = {
  workbookTitle: 'React 기초 문법 테스트',
  difficultyLevel: 2,
  category: 'frontend',
  workbookDetail: 'React의 기본 개념과 문법을 점검하는 객관식 문제집입니다.',
  owner: {
    id: 1,
    profileImage: 'https://example.com/profiles/user1.png',
    name: '한영',
    github: 'https://github.com/hanyoung-dev',
  },
  createdAt: '2025-05-06T09:00:00Z',
  timeLimit: 30 * 1_000 * 60,
  questionCount: 2,
  solvedCount: 1342,
  questions: [
    {
      id: 101,
      title: 'JSX에서 다음 중 유효한 문법은?',
      correctAnswerExplanation:
        'JSX에서는 반드시 하나의 부모 태그로 감싸야 하며, class 대신 className을 사용해야 합니다.',
      options: [
        {
          id: 1,
          content: '<div><h1>Hello</h1><p>World</p></div>',
          isCorrectAnswer: true,
        },
        {
          id: 2,
          content: '<h1>Hello</h1><p>World</p>',
          isCorrectAnswer: false,
        },
        {
          id: 3,
          content: "<div class='title'>Hello</div>",
          isCorrectAnswer: false,
        },
        {
          id: 4,
          content: '<><h1>Hello</h1></>',
          isCorrectAnswer: true,
        },
      ],
    },
    {
      id: 102,
      title: 'React에서 상태를 변경하는 함수는?',
      correctAnswerExplanation:
        '`useState` 훅으로 생성한 `setState` 함수를 통해 상태를 변경할 수 있습니다.',
      options: [
        {
          id: 5,
          content: 'setState',
          isCorrectAnswer: true,
        },
        {
          id: 6,
          content: 'changeState',
          isCorrectAnswer: false,
        },
        {
          id: 7,
          content: 'updateState',
          isCorrectAnswer: false,
        },
        {
          id: 8,
          content: 'modifyState',
          isCorrectAnswer: false,
        },
      ],
    },
  ],
};

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
  const { id } = await params;

  const data = await getWorkbookDetail(Number(id));

  return <SolveWorkbookPage workbookId={Number(id)} workbook={data} />;
}
