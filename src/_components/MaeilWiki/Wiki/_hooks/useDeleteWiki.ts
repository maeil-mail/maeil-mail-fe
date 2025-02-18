import { useMutation } from '@tanstack/react-query';
import { deleteWiki } from '../../_apis/wiki';
import { HTTPError } from '@/_apis/client/APIClient';
import { useRouter } from 'next/navigation';

export const useDeleteWiki = (wikiId: number) => {
  const router = useRouter();

  return useMutation({
    mutationFn: () => deleteWiki(wikiId),
    onSuccess: () => {
      alert('질문이 삭제되었습니다.');
      router.replace('/');
    },
    onError: (error) => {
      if (error instanceof HTTPError && error.status === 401) {
        return;
      }

      alert(
        '요청에 실패했습니다. 재시도에도 동일한 현상이 반복되면, team.maeilmail@gmail.com로 문의주시면 조속히 처리해 드리겠습니다.',
      );
    },
  });
};
