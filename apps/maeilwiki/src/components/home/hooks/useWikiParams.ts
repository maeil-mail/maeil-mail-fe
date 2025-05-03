'use client';

import { WIKI_CATEGORY_TAB_OPTION } from '@/common/constants/wikiCategory';
import { WikiCategoryTabOption } from '@/common/types/wiki';
import { useSearchParams } from 'next/navigation';

interface UseWikiParamsReturn {
  category: WikiCategoryTabOption;
  page: number;
}

export const useWikiParams = (): UseWikiParamsReturn => {
  const searchParams = useSearchParams();

  const rawCategory = searchParams?.get('category');
  const category = (rawCategory || WIKI_CATEGORY_TAB_OPTION.all) as WikiCategoryTabOption;

  const rawPage = searchParams?.get('page');
  const page = Number(rawPage) || 1;

  return { category, page };
};
