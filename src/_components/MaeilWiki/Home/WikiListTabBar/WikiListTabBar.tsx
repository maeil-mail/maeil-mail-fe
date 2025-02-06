'use client';

import { AuthProvider } from '../../_store/authContext';
import { WikiCategoryTabOption } from '../../_types/wikiCategory';
import WikiCategoryTabs from './WikiCategoryTabs';
import { wikiListTabBar } from './wikiListTabBar.css';
import WikiWriteButton from './WikiWriteButton';

interface WikiListTabBar {
  selectedOption: WikiCategoryTabOption;
  onClickWriteButton: () => void;
}

export default function WikiListTabBar({ selectedOption, onClickWriteButton }: WikiListTabBar) {
  return (
    <div className={wikiListTabBar}>
      <WikiCategoryTabs selectedOption={selectedOption} />
      <AuthProvider>
        <WikiWriteButton onClick={onClickWriteButton} />
      </AuthProvider>
    </div>
  );
}
