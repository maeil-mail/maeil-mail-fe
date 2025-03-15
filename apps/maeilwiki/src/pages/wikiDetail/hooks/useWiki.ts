import { useSuspenseQuery } from '@tanstack/react-query';
import { getWikiById } from '../apis/getWikiById';

export const useWiki = (wikiId: number) => {
  return useSuspenseQuery({
    queryKey: ['wiki', wikiId],
    queryFn: () => getWikiById(wikiId),
  });
};
