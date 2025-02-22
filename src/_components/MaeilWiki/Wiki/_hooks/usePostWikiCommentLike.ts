'use client';

import { HTTPError } from '@/_apis/client/APIClient';

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { postWikiCommentLike } from '../../_apis/wiki';
import { Wiki } from '../../_types/wiki';

export const usePostWikiCommentLike = (wikiId: number, commentId: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => {
      await postWikiCommentLike(wikiId, commentId);
    },
    onMutate: async () => {
      await queryClient.cancelQueries({ queryKey: ['BoardDetail'] });

      const previousWiki = queryClient.getQueryData<Wiki>(['wiki', wikiId]);

      const updatedWiki = {
        ...previousWiki,
        comments: previousWiki!.comments.map((comment) => {
          const isTargetComment = comment.id === commentId;
          if (!isTargetComment) {
            return comment;
          }

          const updatedComment = comment.isLiked
            ? { ...comment, isLiked: false, likeCount: comment.likeCount - 1 }
            : { ...comment, isLiked: true, likeCount: comment.likeCount + 1 };

          return updatedComment;
        }),
      };

      queryClient.setQueryData(['wiki', wikiId], updatedWiki);

      return { previousWiki };
    },
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ['wiki', wikiId] });
    },
    onError: (error, _, context) => {
      if (error instanceof HTTPError && error.status === 401) {
        return;
      }
      queryClient.setQueryData(['wiki', wikiId], context?.previousWiki);

      alert(
        '요청에 실패했습니다. 재시도에도 동일한 현상이 반복되면, team.maeilmail@gmail.com로 문의주시면 조속히 처리해 드리겠습니다.',
      );
    },
  });
};
