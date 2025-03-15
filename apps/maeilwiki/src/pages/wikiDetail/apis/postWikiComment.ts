import mainClient from '@/common/apis/client/mainClient';

export interface postWikiCommentBody {
  answer: string;
  isAnonymous: boolean;
}

export const postWikiComment = async (wikiId: number, body: postWikiCommentBody) => {
  const data = await mainClient.post(`/wiki/${wikiId}/comment`, body);

  return data;
};
