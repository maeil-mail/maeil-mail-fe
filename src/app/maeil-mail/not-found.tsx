'use client';

import { container, contentWrapper, mainText, description, buttonWrapper } from './not-found.css';
import Button from '@/_components/common/Button/Button';
import { useRouter } from 'next/navigation';
import PAGE_ROUTES from '../../_constants/pageRoutes';
import Nav from '@/_components/common/Nav/Nav';

export default function NotFoundPage() {
  const router = useRouter();

  const navigateToHome = () => {
    router.push(PAGE_ROUTES.main);
  };

  return (
    <div>
      <Nav />
      <div className={container}>
        <div className={contentWrapper}>
          <h1 className={mainText}>404</h1>
          <p className={description}>잘못된 경로이거나 삭제된 페이지입니다.</p>
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
