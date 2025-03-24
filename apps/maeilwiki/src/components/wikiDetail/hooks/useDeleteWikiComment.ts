import { useMutation } from '@tanstack/react-query';
import { deleteWikiComment } from '../apis/deleteWikiComment';
import { HTTPError } from '@/common/apis/client/APIClient';

export const useDeleteWikiComment = (wikiId: number, commentId: number) => {
  return useMutation({
    mutationFn: () => deleteWikiComment(wikiId, commentId),
    onSuccess: () => {
      alert('답변이 삭제되었습니다.');
      window.location.reload();
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
