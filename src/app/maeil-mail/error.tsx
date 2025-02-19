'use client';

import MaeilMailNav from '@/_components/common/MaeilMailNav';
import UnexpectedErrorPage from '@/_components/Error/UnexpectedError';
import { MAEIL_MAIL_GOOGLE_FORM_URL } from '@/_constants/externalUrl';

export default function Error({ error }: { error?: Error }) {
  return (
    <UnexpectedErrorPage
      Nav={<MaeilMailNav />}
      error={error}
      feedbackUrl={MAEIL_MAIL_GOOGLE_FORM_URL.service}
    />
  );
}
