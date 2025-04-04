'use client';

import { Suspense } from 'react';
import { AuthProvider } from '@/common/store/authContext';
import HeroSection from '@/components/home/HeroSection';
import WikiList from '@/components/home/WikiList';
import WikiListTabBar from '@/components/home/WikiListTabBar';
import WikiWriteButton from '@/components/home/WikiWriteButton';
import WikiSubmitModal from '@/components/home/WikiSubmitModal';
import WikiListSkeleton from '@/components/home/WikiList/WikiListSkeleton';
import { useWikiListParams } from '@/components/home/hooks/useWikiListParams';
import { homeContainer, homeContent } from '@/components/home/home.css';
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
