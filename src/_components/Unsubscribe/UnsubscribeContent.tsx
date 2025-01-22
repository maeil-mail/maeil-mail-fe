'use client';

import { deleteSubscribe } from '@/_apis/subscription';
import Button from '../common/Button/Button';
import {
  unsubscribeButton,
  unsubscribeContent,
  unsubscribeTitle,
  unsubscribeTypo,
} from './unsubscribe.css';
import PAGE_ROUTES from '@/_constants/pageRoutes';
import { useRouter } from 'next/navigation';

interface UnsubscribeContentProps {
  email: string;
  token: string;
}

export default function UnsubscribeContent({ email, token }: UnsubscribeContentProps) {
  const { push } = useRouter();

  const handleUnsubscribe = async () => {
    await deleteSubscribe({ email, token });
    push(PAGE_ROUTES.unsubscribeCompleted);
  };

  return (
    <div>
      <div className={unsubscribeContent}>
        <h1 className={unsubscribeTitle}>매일메일 구독 해지</h1>
        <p className={unsubscribeTypo}>
          해지하면 기술 질문을 더 이상 받아볼 수 없어요.
          <br /> 매일메일 구독을 해지하시겠습니까?
        </p>

        <Button className={unsubscribeButton} onClick={handleUnsubscribe} variant="border">
          구독 해지하기
        </Button>
      </div>
    </div>
  );
}
