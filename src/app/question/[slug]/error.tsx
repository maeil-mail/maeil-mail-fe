'use client';

import { useEffect } from 'react';
import { container, subText } from './error.css';
import Txt from '@/_components/common/Txt/Txt';
import Divider from '@/_components/common/Divider/Divider';
import Button from '@/_components/common/Button/Button';
import { useRouter } from 'next/navigation';
import PAGE_ROUTES from '@/_constants/pageRoutes';
import { myStyle } from '@/_styles/vars.css';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();

  const navigateToHome = () => {
    router.push(PAGE_ROUTES.main);
  };
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className={`${container} ${myStyle}`}>
      <Txt variant="xLarge">오류가 발생했어요!</Txt>
      <Divider variant="none" />
      <Txt variant="large">현재 구형 사파리 환경에서는 사용이 어렵습니다 😭</Txt>
      <Divider variant="none" />
      <Txt variant="large">크롬을 통해 바로 사용하실 수 있습니다!</Txt>
      <Divider variant="none" />
      <Txt variant="large" className={subText}>
        빠르게 대응 중이며, 업데이트 후 메일로 안내 해드리겠습니다.
      </Txt>
      <Divider variant="none" />
      <Txt variant="large" className={`subText`}>
        양해해 주셔서 감사합니다.
      </Txt>
      <Divider variant="none" />
      <Button variant="border" onClick={navigateToHome}>
        메인 페이지로 돌아가기
      </Button>
    </div>
  );
}
