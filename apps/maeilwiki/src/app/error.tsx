'use client';

import UnexpectedErrorPage from '@/components/unexpectedError/Page';
import { MAEIL_WIKI_GOOGLE_FORM_URL } from '@/common/constants/externalUrl';
import MaeilWikiNav from '@/common/components/MaeilWikiNav';

export default function Page() {
  return (
    <UnexpectedErrorPage Nav={<MaeilWikiNav />} feedbackUrl={MAEIL_WIKI_GOOGLE_FORM_URL.service} />
  );
}
