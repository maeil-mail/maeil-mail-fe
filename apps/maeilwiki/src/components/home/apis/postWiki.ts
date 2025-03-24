import { API_ROUTES } from '../../../common/apis/constants/routes';

import { WikiCategory } from '@/common/types/wiki';
import { GetWikiListResponse } from './getWikiList';
import mainClient from '@/common/apis/client/mainClient';

export interface PostWikiBody {
  question: string;
  category: WikiCategory;
  isAnonymous: boolean;
  questionDetail?: string;
}

export const postWiki = async (body: PostWikiBody): Promise<string | null> => {
  if (!body.question) {
    return null;
  }

  const res = await mainClient.request<GetWikiListResponse>('POST', API_ROUTES.wiki, body);

  const createdWikiId = res.headers.get('location');

  return createdWikiId;
};
