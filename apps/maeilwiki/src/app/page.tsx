'use client';

import { Suspense } from 'react';
import { AuthProvider } from '@/common/store/authContext';
import HeroSection from '@/pages/home/HeroSection';
import WikiList from '@/pages/home/WikiList';
import WikiListTabBar from '@/pages/home/WikiListTabBar';
import WikiWriteButton from '@/pages/home/WikiWriteButton';
import WikiSubmitModal from '@/pages/home/WikiSubmitModal';
import WikiListSkeleton from '@/pages/home/WikiList/WikiListSkeleton';
import { useWikiListParams } from '@/pages/home/hooks/useWikiListParams';
import { homeContainer, homeContent } from '@/pages/home/home.css';
import useModal from '@/common/hooks/useModal';

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
