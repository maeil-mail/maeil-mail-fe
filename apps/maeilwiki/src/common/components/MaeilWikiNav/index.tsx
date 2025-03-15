'use client';

import { useEffect, useState, type PropsWithChildren } from 'react';
import MaeilWikiNavContent from './MaeilWikiNavContent';
import { AuthProvider } from '@/common/store/authContext';

interface MaeilWikiNavProps {
  position?: 'default' | 'sticky';
}

export default function MaeilWikiNav({
  position = 'default',
  children,
}: PropsWithChildren<MaeilWikiNavProps>) {
  const [returnPath, setReturnPath] = useState('/');

  useEffect(() => {
    setReturnPath(window.location.pathname);
  }, []);

  return (
    <AuthProvider>
      <MaeilWikiNavContent position={position} returnPath={returnPath}>
        {children}
      </MaeilWikiNavContent>
    </AuthProvider>
  );
}
