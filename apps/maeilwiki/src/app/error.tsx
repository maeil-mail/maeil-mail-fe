'use client';

import UnexpectedErrorPage from '@/components/unexpectedError/Page';
import { MAEIL_WIKI_GOOGLE_FORM_URL } from '@/common/constants/externalUrl';

export default function Page() {
  return <UnexpectedErrorPage feedbackUrl={MAEIL_WIKI_GOOGLE_FORM_URL.service} />;
}
