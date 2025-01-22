'use client';

import Link from 'next/link';
import PrimaryLogo from '@/_assets/images/primaryLogo.svg';
import Nav from '../Nav/Nav';
import { logo } from './maeilMailNav.css';
import type { PropsWithChildren } from 'react';

interface MeailMailNavProps {
  position?: 'default' | 'sticky';
}

export default function MaeilMailNav({
  position = 'default',
  children,
}: PropsWithChildren<MeailMailNavProps>) {
  return (
    <Nav position={position}>
      <Link href="/">
        <PrimaryLogo className={logo} />
      </Link>
      {children}
    </Nav>
  );
}
