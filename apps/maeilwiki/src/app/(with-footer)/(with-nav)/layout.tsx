import MaeilWikiNav from '@/common/components/MaeilWikiNav';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <MaeilWikiNav />
      {children}
    </>
  );
}
