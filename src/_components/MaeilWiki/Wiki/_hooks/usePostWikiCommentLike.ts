'use client';

import { HTTPError } from '@/_apis/client/APIClient';
import mainClient from '@/_apis/client/mainClient';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postWikiCommentLike } from '../../_apis/wiki';

export const usePostWikiCommentLike = (wikiId: number, commentId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      await postWikiCommentLike(wikiId, commentId);
    },
    onSuccess: () => {
      // TODO: 낙관적 업데이트 - 좋아요 여부에 따라 좋아요 개수를 선반영한다(+1 or -1한다)
      queryClient.invalidateQueries({ queryKey: ['wiki', wikiId] });
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
