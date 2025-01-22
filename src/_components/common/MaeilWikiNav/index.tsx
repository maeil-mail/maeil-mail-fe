'use client';

import Link from 'next/link';
import PrimaryLogo from '@/_assets/images/wiki/primaryLogo.svg';
import Nav from '../Nav/Nav';
import { logo } from './maeilWikiNav.css';
import type { PropsWithChildren } from 'react';

interface MaeilWikiNavProps {
  position?: 'default' | 'sticky';
}

export default function MaeilWikiNav({
  position = 'default',
  children,
}: PropsWithChildren<MaeilWikiNavProps>) {
  return (
    <Nav position={position}>
      <Link href="/">
        <PrimaryLogo className={logo} />
      </Link>
      {children}
    </Nav>
  );
}
