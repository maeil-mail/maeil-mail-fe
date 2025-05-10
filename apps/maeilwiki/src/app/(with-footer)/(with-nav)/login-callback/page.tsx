'use client';

import { Suspense } from 'react';
import { LoadingSpinner } from '@maeil/ui';
import LoginCallbackPage from '@/components/loginCallback/Page';

export default function Page() {
  return (
    <Suspense fallback={<LoadingSpinner />}>
      <LoginCallbackPage />
    </Suspense>
  );
}
