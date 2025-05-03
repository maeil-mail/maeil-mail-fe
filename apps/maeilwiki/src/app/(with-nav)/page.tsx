'use client';

import { Suspense } from 'react';
import { AuthProvider } from '@/common/store/authContext';
import WikiList from '@/components/home/WikiList';
import WikiWriteButton from '@/components/home/WikiWriteButton';
import WikiSubmitModal from '@/components/home/WikiSubmitModal';
import WikiListSkeleton from '@/components/home/WikiList/WikiListSkeleton';
import { useWikiParams } from '@/components/home/hooks/useWikiParams';
import { homeContainer, homeContent } from '@/components/home/home.css';
import useModal from '@/common/hooks/useModal';
import HeroBanner from '@/common/components/HeroBanner';
import CategoryFilterTabBar from '@/common/components/CategoryFilterTabBar';

export default function Page() {
  return (
    <Suspense>
      <MaeilWikiMain />
    </Suspense>
  );
}

function MaeilWikiMain() {
  const { category, page } = useWikiParams();
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div className={homeContainer}>
      <HeroBanner subtitle="출 퇴근길 떠올린 질문 하나로 지식 나눔이 시작돼요!" />
      <div className={homeContent}>
        <CategoryFilterTabBar selectedOption={category} />
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
