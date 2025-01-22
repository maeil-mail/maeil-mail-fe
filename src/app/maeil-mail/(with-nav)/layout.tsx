import MaeilMailNav from '@/_components/common/MaeilMailNav';
import { ReactNode } from 'react';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <MaeilMailNav />
      {children}
    </div>
  );
}
