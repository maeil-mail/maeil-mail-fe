import mainClient from '@/common/apis/client/mainClient';

export const deleteWiki = async (wikiId: number) => {
  await mainClient.delete(`/wiki/${wikiId}`);
};
