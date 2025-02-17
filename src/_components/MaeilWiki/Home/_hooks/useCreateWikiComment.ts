'use client';

import mainClient from '@/_apis/client/mainClient';
import { useMutation } from '@tanstack/react-query';
import { postWikiCommentBody } from '../../_apis/wiki';

export const useCreateWikiComment = (wikiId: number) => {
  return useMutation({
    mutationFn: async (body: postWikiCommentBody) => {
      await mainClient.post(`/wiki/${wikiId}/comment`, body);
    },
    onSuccess: () => {
      alert('답변이 작성되었습니다.');
      window.location.reload();
    },
    onError: () => {
      alert(
        '요청에 실패했습니다. 재시도에도 동일한 현상이 반복되면, team.maeilmail@gmail.com로 문의주시면 조속히 처리해 드리겠습니다.',
      );
    },
  });
};
