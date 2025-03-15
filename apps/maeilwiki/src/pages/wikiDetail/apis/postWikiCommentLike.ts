import mainClient from '@/common/apis/client/mainClient';

export const postWikiCommentLike = async (wikiId: number, commentId: number) => {
  return await mainClient.post(`/wiki/${wikiId}/comment/${commentId}/like`);
};
