'use client';

import PageInnerLayout from '@/_components/common/PageInnerLayout/PageInnerLayout';
import HeroSection from '@/_components/MaeilWiki/Home/HeroSection';
import WikiList from '@/_components/MaeilWiki/Home/WikiList';
import Paginator from '@/_components/common/Paginator';
import WikiListTabBar from '@/_components/MaeilWiki/Home/WikiListTabBar/WikiListTabBar';
import { useWikiListParams } from '@/_components/MaeilWiki/Home/_hooks/useWikiListParams';
import WikiWriteButton from '@/_components/MaeilWiki/Home/WikiWriteButton';
import { Suspense, useState } from 'react';

export default function Page() {
  const { category, page } = useWikiListParams();

  const [isQuestionInputExpanded, setIsQuestionInputExpanded] = useState(false);

  const expandQuestionInput = () => {
    setIsQuestionInputExpanded(true);
  };

  const closeQuestionInput = () => {
    setIsQuestionInputExpanded(false);
  };

  return (
    <PageInnerLayout>
      <HeroSection />
      <WikiListTabBar selectedOption={category} onWrite={expandQuestionInput} />
      <Suspense fallback={<div>로딩중입니다</div>}>
        <WikiList category={category} page={page} />
      </Suspense>
      <Paginator currentPage={page} lastPage={11} />
      <WikiWriteButton
        isExpanded={isQuestionInputExpanded}
        onWrite={expandQuestionInput}
        onClose={closeQuestionInput}
      />
    </PageInnerLayout>
  );
}
