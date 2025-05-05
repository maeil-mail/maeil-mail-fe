'use client';

import { useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { LoadingSpinner } from '@maeil/ui';
import { useLoginMutation } from '@/common/hooks/useLoginMutation';
import {
  loadingNoti,
  loadingSpinnerContainer,
  loginCallbackPageContainer,
} from './loginCallback.css';

export default function LoginCallbackPage() {
  const code = useSearchParams()?.get('code') || '';
  const returnPath = useSearchParams()?.get('returnPath') || '/';
  const { mutate } = useLoginMutation(code, returnPath);

  useEffect(() => {
    mutate();
  }, []);

  return (
    <div className={loginCallbackPageContainer}>
      <div className={loadingSpinnerContainer}>
        <LoadingSpinner />
      </div>
      <p className={loadingNoti}>로그인이 진행 중입니다. 잠시만 기다려주세요</p>
    </div>
  );
}
