import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { postWorkbook } from '../apis/postWorkbook';

export const usePostWorkbook = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postWorkbook,
    onSuccess: (createdWorkbookId) => {
      router.push(`/wiki/workbook/${createdWorkbookId}`);
      queryClient.invalidateQueries({ queryKey: ['workbook'] });
    },
  });
};
