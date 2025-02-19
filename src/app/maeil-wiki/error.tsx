'use client';

import UnexpectedErrorPage from '@/_components/Error/UnexpectedError';
import { MAEIL_WIKI_GOOGLE_FORM_URL } from '@/_constants/externalUrl';

export default function Page() {
  return <UnexpectedErrorPage feedbackUrl={MAEIL_WIKI_GOOGLE_FORM_URL.service} />;
}
