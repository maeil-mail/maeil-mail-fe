'use client';

import PageInnerLayout from '@/_components/common/PageInnerLayout/PageInnerLayout';
import HeroSection from '@/_components/MaeilWiki/Home/HeroSection';
import WikiList from '@/_components/MaeilWiki/Home/WikiList';
import mockWikiList from '@/_components/MaeilWiki/Home/mockWikiList.json';
import { WikiListItem } from '@/_components/MaeilWiki/_types/wiki';
import Paginator from '@/_components/common/Paginator';
import WikiListTabBar from '@/_components/MaeilWiki/Home/WikiListTabBar/WikiListTabBar';
import { useWikiListParams } from '@/_components/MaeilWiki/Home/_hooks/useWikiListParams';
import WikiWriteButton from '@/_components/MaeilWiki/Home/WikiWriteButton';
import { useState } from 'react';

const MOCK_WIKI_LIST = mockWikiList as {
  isLastPage: boolean;
  totalPage: number;
  data: WikiListItem[];
};

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
      <WikiList wikis={MOCK_WIKI_LIST.data} page={page} />
      <Paginator currentPage={page} lastPage={11} />
      <WikiWriteButton
        isExpanded={isQuestionInputExpanded}
        onWrite={expandQuestionInput}
        onClose={closeQuestionInput}
      />
    </PageInnerLayout>
  );
}
