'use client';

import { useSearchParams } from 'next/navigation';
import { WikiCategoryTabOption } from '../../_types/wikiCategory';
import { WIKI_CATEGORY_TAB_OPTION } from '../../_constants/wikiCategory';

interface UseWikiListParamsReturn {
  category: WikiCategoryTabOption;
  page: number;
}

export const useWikiListParams = (): UseWikiListParamsReturn => {
  const searchParams = useSearchParams();

  const rawCategory = searchParams.get('category');
  const category = (rawCategory || WIKI_CATEGORY_TAB_OPTION.all) as WikiCategoryTabOption;

  const rawPage = searchParams.get('page');
  const page = Number(rawPage) || 1;

  return { category, page };
};
