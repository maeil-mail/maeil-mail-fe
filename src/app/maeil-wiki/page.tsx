'use client';

import PageInnerLayout from '@/_components/common/PageInnerLayout/PageInnerLayout';
import HeroSection from '@/_components/MaeilWiki/Home/HeroSection';
import WikiList from '@/_components/MaeilWiki/Home/WikiList';
import WikiListTabBar from '@/_components/MaeilWiki/Home/WikiListTabBar/WikiListTabBar';
import { useWikiListParams } from '@/_components/MaeilWiki/Home/_hooks/useWikiListParams';
import WikiInputToggleButton from '@/_components/MaeilWiki/Home/WikiInputToggleButton';
import { Suspense, useState } from 'react';
import { AuthProvider } from '@/_components/MaeilWiki/_store/authContext';

export default function Page() {
  return (
    <Suspense>
      <MaeilWikiMain />
    </Suspense>
  );
}

function MaeilWikiMain() {
  const { category, page } = useWikiListParams();

  const [isQuestionInputExpanded, setIsQuestionInputExpanded] = useState(false);

  const expandQuestionInput = () => {
    setIsQuestionInputExpanded(true);
  };

  const closeQuestionInput = () => {
    setIsQuestionInputExpanded(false);
  };

  return (
    <div style={{ background: '#FCFCFC' }}>
      <HeroSection />
      <div style={{ maxWidth: '114rem', margin: '0 auto', padding: '0 2rem' }}>
        <WikiListTabBar selectedOption={category} />
        <Suspense fallback={<div>로딩중입니다</div>}>
          <WikiList category={category} page={page} />
        </Suspense>
        <AuthProvider>
          <WikiInputToggleButton
            isExpanded={isQuestionInputExpanded}
            onClick={expandQuestionInput}
            onClose={closeQuestionInput}
          />
        </AuthProvider>
      </div>
    </div>
  );
}
