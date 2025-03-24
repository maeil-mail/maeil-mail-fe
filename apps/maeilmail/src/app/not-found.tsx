'use client';

import MaeilMailNav from '@/common/components/MaeilMailNav';
import NotFoundPage from '@/components/notFoundError/Page';

export default function NotFound() {
  return <NotFoundPage Nav={<MaeilMailNav />} />;
}
