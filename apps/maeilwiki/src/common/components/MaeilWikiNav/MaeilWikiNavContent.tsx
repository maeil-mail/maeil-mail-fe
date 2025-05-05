'use client';

import { useState, type PropsWithChildren, type ReactNode } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Nav } from '@maeil/ui';
import { useAuthContext } from '@/common/store/authContext';
import { recordGAEvent } from '@/common/utils/recordGAEvent';
import { GITHUB_OAUTH_LOGIN_URL } from '@/common/constants/auth';
import { FRONTEND_BASE_URL } from '@/common/constants/frontendBaseUrl';
import { GA_EVENT } from '@/common/constants/gaEvent';

import ExternalLinkIcon from '@/assets/externalLinkIcon.svg';
import PrimaryLogo from '@/assets/primaryLogo.svg';
import HamburgerIcon from '@/assets/hamburger.svg';
import {
  externalLinkIcon,
  hamburgerMenu,
  homeLink,
  loadingSkeleton,
  logo,
  navTab,
  navTabBar,
} from './maeilWikiNav.css';
import Sidebar from '../Sidebar';

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
  const pathname = usePathname();
  const isWikiTab = pathname.startsWith('/wiki');
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const onClickMaeilMailLink = () => {
    closeSidebar();
    recordGAEvent(GA_EVENT.navClickMaeilMailLink);
  };

  const onClickLogin = () => {
    closeSidebar();
    recordGAEvent(GA_EVENT.navClickLogin);
  };

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  if (isLoading) {
    return <div className={loadingSkeleton} />;
  }

  const WikiNavMenus = (
    <>
      <a href={FRONTEND_BASE_URL} rel="noopener noreferrer" onClick={onClickMaeilMailLink}>
        <div className={navTab({ isActive: false })}>
          <span>매일메일</span>
          <ExternalLinkIcon className={externalLinkIcon} />
        </div>
      </a>
      <Link href="/" onClick={closeSidebar}>
        <div className={navTab({ isActive: !isWikiTab })}>
          <span>객관식 문제집</span>
        </div>
      </Link>
      <Link href="/wiki" onClick={closeSidebar}>
        <div className={navTab({ isActive: isWikiTab })}>
          <span>기술 면접</span>
        </div>
      </Link>
      {!isAuthenticated && (
        <a href={`${GITHUB_OAUTH_LOGIN_URL}?returnPath=${returnPath}`} onClick={onClickLogin}>
          <span className={navTab({ isActive: false })}>로그인</span>
        </a>
      )}
    </>
  );

  return (
    <div>
      <HamburgerIcon className={hamburgerMenu} onClick={openSidebar} />
      <div className={navTabBar}>
        {WikiNavMenus}
        {children}
      </div>
      <Sidebar MenusElement={WikiNavMenus} isOpen={isSidebarOpen} onClose={closeSidebar} />
    </div>
  );
}
