import { useSuspenseQuery } from '@tanstack/react-query';
import { WikiCategoryTabOption } from '@/common/types/wiki';
import { getWorkbookList } from '../apis/getWorkbookList';

export const useWorkbookList = (category: WikiCategoryTabOption, page: number) => {
  return useSuspenseQuery({
    queryKey: ['workbook', 'list', category, page],
    queryFn: () => getWorkbookList(category, page),
  });
};
