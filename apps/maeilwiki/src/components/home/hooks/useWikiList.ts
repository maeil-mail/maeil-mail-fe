import { useSuspenseQuery } from '@tanstack/react-query';
import type { WikiCategoryTabOption } from '@/common/types/wiki';
import { getWikiList } from '../apis/getWikiList';

interface UseWikiListParams {
  category: WikiCategoryTabOption;
  page: number;
}

export const useWikiList = ({ category, page }: UseWikiListParams) => {
  return useSuspenseQuery({
    queryKey: ['wiki', category, page],
    queryFn: () => getWikiList(category, page),
  });
};
