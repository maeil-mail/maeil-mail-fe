import Nav from '@/_components/common/Nav/Nav';
import type { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <Nav />
      {children}
    </div>
  );
}
