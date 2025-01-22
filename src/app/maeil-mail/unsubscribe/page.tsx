'use client';

import { Suspense } from 'react';
import PageInnerLayout from '@/_components/common/PageInnerLayout/PageInnerLayout';
import UnsubscribeContent from '@/_components/Unsubscribe/UnsubscribeContent';
import useAuthParams from '@/_components/Unsubscribe/_hooks/useAuthParams';
import MaeilMailNav from '@/_components/common/MaeilMailNav';

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
      <MaeilMailNav />
      <PageInnerLayout>
        <UnsubscribeContent email={email} token={token} />
      </PageInnerLayout>
    </div>
  );
}
