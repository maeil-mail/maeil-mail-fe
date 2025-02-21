'use client';

import Link from 'next/link';
import PrimaryLogo from '@/_assets/images/maeilWiki/primaryLogo.svg';
import Nav from '../Nav/Nav';
import {
  externalLinkIcon,
  homeLink,
  loadingSkeleton,
  logo,
  navTab,
  navTabBar,
} from './maeilWikiNav.css';
import type { PropsWithChildren, ReactNode } from 'react';
import ExternalLinkIcon from '@/_assets/images/maeilWiki/externalLinkIcon.svg';
import FRONTEND_BASE_URL from '@/_constants/frontendBaseUrl';
import { GITHUB_OAUTH_LOGIN_URL } from '@/_components/MaeilWiki/_constants/auth';
import { useAuthContext } from '@/_components/MaeilWiki/_store/authContext';

interface MaeilWikiNavContentProps {
  returnPath: string;
  position?: 'default' | 'sticky';
}

export default function MaeilWikiNavContent({
  returnPath,
  position = 'default',
  children,
}: PropsWithChildren<MaeilWikiNavContentProps>) {
  const { isAuthenticated, isLoading } = useAuthContext();

  return (
    <Nav position={position}>
      <Link href="/" className={homeLink}>
        <PrimaryLogo className={logo} />
      </Link>
      <MaeilWikiNavRightSide
        isAuthenticated={isAuthenticated}
        isLoading={isLoading}
        returnPath={returnPath}
      >
        {children}
      </MaeilWikiNavRightSide>
    </Nav>
  );
}

function MaeilWikiNavRightSide({
  isLoading,
  isAuthenticated,
  returnPath,
  children,
}: {
  isLoading: boolean;
  isAuthenticated: boolean;
  returnPath: string;
  children: ReactNode;
}) {
  if (isLoading) {
    return <div className={loadingSkeleton} />;
  }

  return (
    <div className={navTabBar}>
      <a href={FRONTEND_BASE_URL} target="_blank" rel="noopener noreferrer">
        <div className={navTab}>
          <span>매일메일</span>
          <ExternalLinkIcon className={externalLinkIcon} />
        </div>
      </a>
      {!isAuthenticated && (
        <a href={`${GITHUB_OAUTH_LOGIN_URL}?returnPath=${returnPath}`}>
          <span className={navTab}>로그인</span>
        </a>
      )}
      {children}
    </div>
  );
}
