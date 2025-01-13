'use client';

import Link from 'next/link';
import { container, innerWrapper, logo, positionStyle } from './nav.css';
import PrimaryLogo from '@/_assets/images/primaryLogo.svg';

interface NavProps {
  RightSide?: React.ReactNode;
  position?: 'default' | 'sticky';
}

export default function Nav({ RightSide, position = 'default' }: NavProps) {
  return (
    <nav className={`${container} ${positionStyle[position]}`}>
      <div className={innerWrapper}>
        <Link href="/">
          <PrimaryLogo className={logo} />
        </Link>
        {RightSide && RightSide}
      </div>
    </nav>
  );
}
