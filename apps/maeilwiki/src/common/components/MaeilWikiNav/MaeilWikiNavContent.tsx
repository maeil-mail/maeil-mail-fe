'use client';

import type { PropsWithChildren, ReactNode } from 'react';
import Link from 'next/link';
import PrimaryLogo from '@/assets/primaryLogo.svg';
import { Nav } from '@maeil/ui';
import {
  externalLinkIcon,
  homeLink,
  loadingSkeleton,
  logo,
  navTab,
  navTabBar,
} from './maeilWikiNav.css';
import ExternalLinkIcon from '@/assets/externalLinkIcon.svg';
import { FRONTEND_BASE_URL } from '@/common/constants/frontendBaseUrl';
import { GITHUB_OAUTH_LOGIN_URL } from '@/common/constants/auth';
import { useAuthContext } from '@/common/store/authContext';
import { recordGAEvent } from '@/common/utils/recordGAEvent';
import { GA_EVENT } from '@/common/constants/gaEvent';

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

  const onClickMaeilMailLink = () => {
    recordGAEvent(GA_EVENT.navClickMaeilMailLink);
  };

  const onClickLogin = () => {
    recordGAEvent(GA_EVENT.navClickLogin);
  };

  return (
    <div className={navTabBar}>
      <a href={FRONTEND_BASE_URL} rel="noopener noreferrer" onClick={onClickMaeilMailLink}>
        <div className={navTab}>
          <span>매일메일</span>
          <ExternalLinkIcon className={externalLinkIcon} />
        </div>
      </a>
      {!isAuthenticated && (
        <a href={`${GITHUB_OAUTH_LOGIN_URL}?returnPath=${returnPath}`} onClick={onClickLogin}>
          <span className={navTab}>로그인</span>
        </a>
      )}
      {children}
    </div>
  );
}
