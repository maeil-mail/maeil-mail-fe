import mainClient from '@/common/apis/client/mainClient';

export const deleteWikiComment = async (wikiId: number, commentId: number) => {
  await mainClient.delete(`/wiki/${wikiId}/comment/${commentId}`);
};
