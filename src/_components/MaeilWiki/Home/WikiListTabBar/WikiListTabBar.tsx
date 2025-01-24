'use client';

import { WikiCategoryTabOption } from '../../_types/wikiCategory';
import WikiCategoryTabs from './WikiCategoryTabs';
import { wikiListTabBar, wikiWriteButton } from './wikiListTabBar.css';

interface WikiListTabBar {
  selectedOption: WikiCategoryTabOption;
}

export default function WikiListTabBar({ selectedOption }: WikiListTabBar) {
  return (
    <div className={wikiListTabBar}>
      <WikiCategoryTabs selectedOption={selectedOption} />
      <div className={wikiWriteButton}>글 작성하기</div>
    </div>
  );
}
