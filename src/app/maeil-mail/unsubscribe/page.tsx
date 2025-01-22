'use client';

import { Suspense } from 'react';
import Nav from '@/_components/common/Nav/Nav';
import PageInnerLayout from '@/_components/common/PageInnerLayout/PageInnerLayout';
import UnsubscribeContent from '@/_components/Unsubscribe/UnsubscribeContent';
import useAuthParams from '@/_components/Unsubscribe/_hooks/useAuthParams';

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
      <Nav />
      <PageInnerLayout>
        <UnsubscribeContent email={email} token={token} />
      </PageInnerLayout>
    </div>
  );
}
