'use client';

import MaeilMailNav from '@/_components/common/MaeilMailNav';
import UnexpectedErrorPage from '@/_components/Error/UnexpectedError';

export default function Error({ error }: { error?: Error }) {
  return <UnexpectedErrorPage Nav={<MaeilMailNav />} error={error} />;
}
