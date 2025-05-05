import mainClient from '@/common/apis/client/mainClient';
import { API_ROUTES } from '@/common/apis/constants/routes';
import { WikiCategory } from '@/common/types/wiki';

export interface WorkbookDetailItem {
  workbookTitle: string;
  difficultyLevel: number;
  category: WikiCategory;
  workbookDetail: string;
  owner: {
    id: number;
    profileImage: string;
    name: string;
    github: string;
  };
  createdAt: string;
  timeLimit: number;
  questionCount: number;
  solvedCount: number;
}

export const getWorkbookDetail = async (workbookId: number) => {
  return mainClient.get<WorkbookDetailItem>(`${API_ROUTES.workbook}/${workbookId}`);
};
