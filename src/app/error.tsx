'use client';

import * as Sentry from '@sentry/nextjs';
import { useEffect } from 'react';
import ErrorPage from '@/_pages/ErrorPage';

export default function GlobalError({ error }: { error: Error & { digest?: string } }) {
  useEffect(() => {
    Sentry.captureException(error);
  }, [error]);

  return <ErrorPage />;
}
