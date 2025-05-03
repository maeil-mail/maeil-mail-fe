'use client';

import CategoryFilterTabs from './CategoryFilterTabs';
import type { WikiCategoryTabOption } from '@/common/types/wiki';
import { wikiListTabBar } from './categoryFilterTabBar.css';

interface CategoryFilterTabBarProps {
  selectedOption: WikiCategoryTabOption;
}

export default function CategoryFilterTabBar({ selectedOption }: CategoryFilterTabBarProps) {
  return (
    <div className={wikiListTabBar}>
      <CategoryFilterTabs selectedOption={selectedOption} />
    </div>
  );
}
