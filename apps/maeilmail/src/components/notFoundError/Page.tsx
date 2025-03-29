'use client';

import { useRouter } from 'next/navigation';
import { ReactNode } from 'react';
import { Button } from '@maeil/ui';
import { PAGE_ROUTES } from '@/common/constants/pageRoutes';
import {
  container,
  contentWrapper,
  mainText,
  description,
  buttonWrapper,
} from './notFoundError.css';

export interface NotFoundPageProps {
  Nav?: ReactNode;
}

export default function NotFoundPage({ Nav }: NotFoundPageProps) {
  const router = useRouter();

  const navigateToHome = () => {
    router.push(PAGE_ROUTES.main);
  };

  return (
    <div>
      {Nav && Nav}
      <div className={container}>
        <div className={contentWrapper}>
          <h1 className={mainText}>404</h1>
          <p className={description}>잘못된 경로거나 삭제된 페이지입니다.</p>
          <div className={buttonWrapper}>
            <Button variant="primary" onClick={navigateToHome}>
              홈으로 돌아가기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
