'use client';

import MaeilMailNav from '@/common/components/MaeilMailNav';
import NotFoundPage from '@/pages/notFoundError/Page';

export default function NotFound() {
  return <NotFoundPage Nav={<MaeilMailNav />} />;
}
