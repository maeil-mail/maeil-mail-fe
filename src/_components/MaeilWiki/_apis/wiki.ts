import { WikiCategory, WikiCategoryTabOption } from '@/_components/MaeilWiki/_types/wikiCategory';
import mainClient from '@/_apis/client/mainClient';
import API_ROUTES from '@/_apis/constants/routes';
import { Wiki, WikiListItem } from '@/_components/MaeilWiki/_types/wiki';

export const getWikiById = async (id: number): Promise<Wiki> => {
  try {
    const data = await mainClient.get<Wiki>(`${API_ROUTES.wiki}/${id}`);

    return data;
  } catch (error) {
    throw error;
  }
};

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
    if (!body.question) {
      return;
    }

    const res = await mainClient.request<GetWikiListResponse>('POST', API_ROUTES.wiki, body);

    res.headers.forEach(console.log);

    return res.headers;
  } catch (error) {
    throw error;
  }
};

export const deleteWiki = async (wikiId: number) => {
  try {
    await mainClient.delete(`/wiki/${wikiId}`);
  } catch (error) {
    throw error;
  }
};

export interface postWikiCommentBody {
  answer: string;
  isAnonymous: boolean;
}

export const postWikiComment = async (wikiId: number, body: postWikiCommentBody) => {
  try {
    const data = await mainClient.post(`/wiki/${wikiId}/comment`, body);

    return data;
  } catch (error) {
    throw error;
  }
};

export const deleteWikiComment = async (wikiId: number, commentId: number) => {
  try {
    await mainClient.delete(`/wiki/${wikiId}/comment/${commentId}`);
  } catch (error) {
    throw error;
  }
};

export const postWikiCommentLike = async (wikiId: number, commentId: number) => {
  try {
    return await mainClient.post(`/wiki/${wikiId}/comment/${commentId}/like`);
  } catch (error) {
    throw error;
  }
};
