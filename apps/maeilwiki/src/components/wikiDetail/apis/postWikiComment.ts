import mainClient from '@/common/apis/client/mainClient';

export interface PostWikiCommentBody {
  answer: string;
  isAnonymous: boolean;
}

export const postWikiComment = async (wikiId: number, body: PostWikiCommentBody) => {
  const data = await mainClient.post(`/wiki/${wikiId}/comment`, body);

  return data;
};
