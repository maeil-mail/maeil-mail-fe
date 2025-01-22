import MaeilWikiNav from '@/_components/common/MaeilWikiNav';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <MaeilWikiNav />
      {children}
    </div>
  );
}
