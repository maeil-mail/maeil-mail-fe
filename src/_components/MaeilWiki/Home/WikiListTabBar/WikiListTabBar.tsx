'use client';

import { WikiCategoryTabOption } from '../../_types/wikiCategory';
import WikiCategoryTabs from './WikiCategoryTabs';
import { wikiListTabBar, wikiWriteButton, writeIcon } from './wikiListTabBar.css';
import WriteIcon from '@/_assets/icons/writeIcon.svg';

interface WikiListTabBar {
  selectedOption: WikiCategoryTabOption;
  onWrite: () => void;
}

export default function WikiListTabBar({ selectedOption, onWrite }: WikiListTabBar) {
  return (
    <div className={wikiListTabBar}>
      <WikiCategoryTabs selectedOption={selectedOption} />
      <button className={wikiWriteButton} onClick={onWrite}>
        <WriteIcon className={writeIcon} />
        <span>작성하기</span>
      </button>
    </div>
  );
}
