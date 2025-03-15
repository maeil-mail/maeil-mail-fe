'use client';

import { Suspense } from 'react';
import { PageInnerLayout } from '@maeil/ui';
import UnsubscribeContent from '@/pages/unsubscribe/UnsubscribeContent';
import { useAuthParams } from '@/pages/unsubscribe/hooks/useAuthParams';

export default function Page() {
  return (
    <Suspense>
      <Unsubscribe />
    </Suspense>
  );
}

function Unsubscribe() {
  const { email, token } = useAuthParams();

  return (
    <div>
      <PageInnerLayout>
        <UnsubscribeContent email={email} token={token} />
      </PageInnerLayout>
    </div>
  );
}
