'use client';

import { useMutation } from '@tanstack/react-query';
import { postWikiComment, postWikiCommentBody } from '../../_apis/wiki';

export const usePostWikiComment = (wikiId: number) => {
  return useMutation({
    mutationFn: async (body: postWikiCommentBody) => {
      await postWikiComment(wikiId, body);
    },
    onSuccess: () => {
      window.location.reload();
    },
    onError: () => {
      alert(
        '요청에 실패했습니다. 재시도에도 동일한 현상이 반복되면, team.maeilmail@gmail.com로 문의주시면 조속히 처리해 드리겠습니다.',
      );
    },
  });
};
