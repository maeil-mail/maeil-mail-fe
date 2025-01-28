import { WikiCategoryTabOption } from '@/_components/MaeilWiki/_types/wikiCategory';
import mainClient from './client/mainClient';
import API_ROUTES from './constants/routes';
import { WikiListItem } from '@/_components/MaeilWiki/_types/wiki';

interface GetWikiListResponse {
  isLastPage: boolean;
  totalPage: number;
  data: WikiListItem[];
}

export const getWikiList = async (category: WikiCategoryTabOption, page: number) => {
  const data = await mainClient.get<GetWikiListResponse>(
    `${API_ROUTES.wiki}?category=${category}&page=${page}&size=8`,
  );

  console.log(data);

  return data;
};
