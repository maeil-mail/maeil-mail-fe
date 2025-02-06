import { WikiCategory, WikiCategoryTabOption } from '@/_components/MaeilWiki/_types/wikiCategory';
import mainClient from '@/_apis/client/mainClient';
import API_ROUTES from '@/_apis/constants/routes';
import { WikiListItem } from '@/_components/MaeilWiki/_types/wiki';

interface GetWikiListResponse {
  isLastPage: boolean;
  totalPage: number;
  data: WikiListItem[];
}

export const getWikiList = async (category: WikiCategoryTabOption, page: number) => {
  try {
    const data = await mainClient.get<GetWikiListResponse>(
      `${API_ROUTES.wiki}?category=${category}&page=${page}&size=8`,
    );

    return data;
  } catch (error) {
    throw error;
  }
};

export interface PostWikiBody {
  question: string;
  category: WikiCategory;
  isAnonymous: boolean;
  questionDetail?: string;
}

export const postWiki = async (body: PostWikiBody) => {
  try {
    const data = await mainClient.post<GetWikiListResponse>(API_ROUTES.wiki, body);

    return data;
  } catch (error) {
    throw error;
  }
};
