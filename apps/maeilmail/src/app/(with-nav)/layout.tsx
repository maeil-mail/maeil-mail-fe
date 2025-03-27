import { ReactNode } from 'react';
import MaeilMailNav from '@/common/components/MaeilMailNav';

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div>
      <MaeilMailNav />
      {children}
    </div>
  );
}
