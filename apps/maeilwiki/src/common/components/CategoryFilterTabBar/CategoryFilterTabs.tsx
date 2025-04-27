'use client';

import QueryLink from '@/common/components/QueryLink';
import {
  WIKI_CATEGORY,
  WIKI_CATEGORY_TAB_OPTION,
  WIKI_CATEGORY_TAB_OPTION_KO,
} from '@/common/constants/wikiCategory';
import { WikiCategoryTabOption } from '@/common/types/wiki';
import { wikiCategoryTab, wikiCategoryTabs } from './categoryFilterTabBar.css';
import { recordGAEvent } from '@/common/utils/recordGAEvent';
import { GA_EVENT } from '@/common/constants/gaEvent';

interface CategoryFilterTabsProps {
  selectedOption: WikiCategoryTabOption;
}

const categories = Object.values(WIKI_CATEGORY);

export default function CategoryFilterTabs({ selectedOption }: CategoryFilterTabsProps) {
  const onClickCategoryTabs = () => {
    recordGAEvent(GA_EVENT.homeClickCategoryTabs);
  };

  return (
    <div className={wikiCategoryTabs} onClick={onClickCategoryTabs}>
      <QueryLink appendedQuery={{ category: WIKI_CATEGORY_TAB_OPTION.all, page: 1 }}>
        <div
          className={wikiCategoryTab({
            isSelected: selectedOption === WIKI_CATEGORY_TAB_OPTION.all,
          })}
        >
          {WIKI_CATEGORY_TAB_OPTION_KO[WIKI_CATEGORY_TAB_OPTION.all]}
        </div>
      </QueryLink>
      {categories.map((category) => {
        return (
          <QueryLink key={category} appendedQuery={{ category, page: 1 }}>
            <div className={wikiCategoryTab({ isSelected: selectedOption === category })}>
              {WIKI_CATEGORY_TAB_OPTION_KO[category]}
            </div>
          </QueryLink>
        );
      })}
    </div>
  );
}
