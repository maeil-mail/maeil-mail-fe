import type { WikiCategoryTabOption, WikiListItem } from '@/common/types/wiki';

import { API_ROUTES } from '../../../common/apis/constants/routes';
import mainClient from '@/common/apis/client/mainClient';

export interface GetWikiListResponse {
  isLastPage: boolean;
  totalPage: number;
  data: WikiListItem[];
}

export const getWikiList = async (category: WikiCategoryTabOption, page: number) => {
  const data = await mainClient.get<GetWikiListResponse>(
    `${API_ROUTES.wiki}?category=${category}&page=${page}&size=8`,
  );

  return data;
};
