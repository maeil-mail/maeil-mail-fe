import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { postWiki } from '../../_apis/wiki';

export const usePostWiki = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: postWiki,
    onSuccess: (createdWikiId) => {
      router.push(`/wiki/${createdWikiId}`);
      queryClient.invalidateQueries({ queryKey: ['wiki'] });
    },
  });
};
