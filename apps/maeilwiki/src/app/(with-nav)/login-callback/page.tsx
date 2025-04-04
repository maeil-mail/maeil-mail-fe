'use client';

import { Suspense, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { LoadingSpinner } from '@maeil/ui';
import { useLoginMutation } from '@/common/hooks/useLoginMutation';

export default function Page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <LoginCallback />
    </Suspense>
  );
}

function LoginCallback() {
  const code = useSearchParams()?.get('code') || '';
  const returnPath = useSearchParams()?.get('returnPath') || '/';
  const { mutate } = useLoginMutation(code, returnPath);

  useEffect(() => {
    mutate();
  }, []);

  return (
    <div style={{ fontSize: '1.6rem', width: 'fit-content', margin: '0 auto', minHeight: '50vh' }}>
      <div style={{ position: 'relative', height: '1rem', marginTop: '20rem' }}>
        <LoadingSpinner />
      </div>
      <div style={{ marginTop: '5rem' }}>로그인이 진행 중입니다. 잠시만 기다려주세요</div>
    </div>
  );
}
