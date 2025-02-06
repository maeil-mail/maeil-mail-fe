import { useSuspenseQuery } from '@tanstack/react-query';
import type { WikiCategoryTabOption } from '../../_types/wikiCategory';
import { getWikiList } from '@/_components/MaeilWiki/_apis/wiki';

interface UseWikiListParams {
  category: WikiCategoryTabOption;
  page: number;
}

export const useWikiList = ({ category, page }: UseWikiListParams) => {
  return useSuspenseQuery({
    queryKey: ['wikiList', category, page],
    queryFn: () => getWikiList(category, page),
  });
};
