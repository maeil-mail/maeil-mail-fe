'use client';

import { WikiCategoryTabOption } from '../../_types/wikiCategory';
import WikiCategoryTabs from './WikiCategoryTabs';
import { wikiListTabBar } from './wikiListTabBar.css';

interface WikiListTabBar {
  selectedOption: WikiCategoryTabOption;
}

export default function WikiListTabBar({ selectedOption }: WikiListTabBar) {
  return (
    <div className={wikiListTabBar}>
      <WikiCategoryTabs selectedOption={selectedOption} />
    </div>
  );
}
