'use client';

import { myStyle } from '@maeil/theme';
import UnexpectedErrorPage from '@/components/unexpectedError/Page';
import MaeilMailNav from '@/common/components/MaeilMailNav';
import { MAEIL_MAIL_GOOGLE_FORM_URL } from '@/common/constants/externalUrl';

// root layout에서 발생한 에러는 global-error에 의해 처리됨.
// layout.tsx을 대체하므로 html, body 필요
export default function GlobalError({ error }: { error: Error }) {
  return (
    <html>
      <body className={myStyle}>
        <UnexpectedErrorPage
          Nav={<MaeilMailNav />}
          error={error}
          feedbackUrl={MAEIL_MAIL_GOOGLE_FORM_URL.service}
        />
      </body>
    </html>
  );
}
