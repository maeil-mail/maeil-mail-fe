'use client';

import MaeilMailNav from '@/common/components/MaeilMailNav';
import UnexpectedErrorPage from '@/components/unexpectedError/Page';
import { MAEIL_MAIL_GOOGLE_FORM_URL } from '@/common/constants/externalUrl';

export default function Error({ error }: { error?: Error }) {
  return (
    <UnexpectedErrorPage
      Nav={<MaeilMailNav />}
      error={error}
      feedbackUrl={MAEIL_MAIL_GOOGLE_FORM_URL.service}
    />
  );
}
