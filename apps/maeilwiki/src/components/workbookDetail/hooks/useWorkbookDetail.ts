import { useSuspenseQuery } from '@tanstack/react-query';
import { getWorkbookDetail } from '../apis/getWorkbookDetail';

export const useWorkbookDetail = (workbookId: number) => {
  return useSuspenseQuery({
    queryKey: ['workbook', workbookId],
    queryFn: () => getWorkbookDetail(workbookId),
  });
};
