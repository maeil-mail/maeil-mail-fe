'use client';

import HeroSection from '@/_components/MaeilWiki/Home/HeroSection';
import WikiList from '@/_components/MaeilWiki/Home/WikiList';
import WikiListTabBar from '@/_components/MaeilWiki/Home/WikiListTabBar/WikiListTabBar';
import { useWikiListParams } from '@/_components/MaeilWiki/Home/_hooks/useWikiListParams';
import { Suspense } from 'react';
import { AuthProvider } from '@/_components/MaeilWiki/_store/authContext';
import { homeContainer, homeContent } from '@/_components/MaeilWiki/Home/home.css';
import WikiWriteButton from '@/_components/MaeilWiki/Home/WikiWriteButton';
import WikiSubmitModal from '@/_components/MaeilWiki/Home/WikiSubmitModal';
import useModal from '@/_hooks/useModal';
import WikiListSkeleton from '@/_components/MaeilWiki/Home/WikiList/WikiListSkeleton';

export default function Page() {
  return (
    <Suspense>
      <MaeilWikiMain />
    </Suspense>
  );
}

function MaeilWikiMain() {
  const { category, page } = useWikiListParams();
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div className={homeContainer}>
      <HeroSection />
      <div className={homeContent}>
        <WikiListTabBar selectedOption={category} />
        <Suspense fallback={<WikiListSkeleton />}>
          <WikiList category={category} page={page} />
        </Suspense>
        <AuthProvider>
          <WikiWriteButton onClick={openModal} />
        </AuthProvider>
      </div>
      <WikiSubmitModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}
