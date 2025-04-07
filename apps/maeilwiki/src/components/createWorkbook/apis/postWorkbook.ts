import mainClient from '@/common/apis/client/mainClient';
import { API_ROUTES } from '@/common/apis/constants/routes';
import { Category } from '@/common/types/workbook';
import type { MultipleChoice } from '@/common/types/workbook';

interface WorkbookBody {
  workbookTitle: string;
  difficultyLevel: number;
  category: Category;
  workbookDetail?: string;
  timeLimit?: number;
  questions: MultipleChoice[];
}

interface PostWorkbookResponse {
  data: { id: number };
}

export const postWorkbook = async (body: WorkbookBody) => {
  const res = await mainClient.post<PostWorkbookResponse>(API_ROUTES.workbook, body);

  const workbookId = res.data.id;

  return workbookId;
};
