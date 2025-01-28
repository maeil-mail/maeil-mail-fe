'use client';

import { container, innerWrapper, positionStyle } from './nav.css';
import type { PropsWithChildren } from 'react';

interface NavProps {
  position?: 'default' | 'sticky';
}

export default function Nav({ position = 'default', children }: PropsWithChildren<NavProps>) {
  return (
    <nav className={`${container} ${positionStyle[position]}`}>
      <div className={innerWrapper}>{children}</div>
    </nav>
  );
}
