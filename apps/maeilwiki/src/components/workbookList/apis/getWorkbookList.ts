import mainClient from '@/common/apis/client/mainClient';
import { API_ROUTES } from '@/common/apis/constants/routes';
import { WikiCategory, WikiCategoryTabOption } from '@/common/types/wiki';

export interface WorkbookListItem {
  id: number;
  workbookTitle: string;
  difficultyLevel: number;
  category: WikiCategory;
  workbookDetail: string | null;
  owner: {
    id: number;
    profileImage: string | null;
    name: string;
    github: string;
  };
  createdAt: string;
  questionCount: number;
  solvedCount: number;
}

interface GetWorkbookListResponse {
  data: WorkbookListItem[];
  totalPage: number;
  isLastPage: boolean;
}

export const getWorkbookList = async (category: WikiCategoryTabOption, page: number) => {
  return mainClient.get<GetWorkbookListResponse>(
    `${API_ROUTES.workbook}?category=${category}&page=${page}&size=${12}`,
  );
};
