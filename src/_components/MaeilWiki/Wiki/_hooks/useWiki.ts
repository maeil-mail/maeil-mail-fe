import { useSuspenseQuery } from '@tanstack/react-query';
import { getWikiById } from '../../_apis/wiki';

export const useWiki = (wikiId: number) => {
  return useSuspenseQuery({
    queryKey: ['wiki', wikiId],
    queryFn: () => getWikiById(wikiId),
  });
};
