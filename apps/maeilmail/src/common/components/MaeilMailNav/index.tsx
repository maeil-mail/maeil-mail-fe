'use client';

import Link from 'next/link';
import type { PropsWithChildren } from 'react';
import PrimaryLogo from '@/assets/images/primaryLogo.svg';
import { Nav } from '@maeil/ui';
import { logo } from './maeilMailNav.css';

interface MeailMailNavProps {
  position?: 'default' | 'sticky';
}

export default function MaeilMailNav({
  position = 'default',
  children,
}: PropsWithChildren<MeailMailNavProps>) {
  return (
    <>
      <Nav position={position}>
        <Link href="/">
          <PrimaryLogo className={logo} />
        </Link>
        {children}
      </Nav>
    </>
  );
}
