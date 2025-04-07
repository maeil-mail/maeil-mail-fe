import mainClient from '@/common/apis/client/mainClient';
import { API_ROUTES } from '@/common/apis/constants/routes';

type Category = 'backend' | 'frontend' | 'etc';

interface Option {
  content: string;
  isCorrectAnswer: boolean;
}

interface Question {
  title: string;
  correctAnswerExplanation?: string;
  options: Option[];
}

interface WorkbookBody {
  workbookTitle: string;
  difficultyLevel: number;
  category: Category;
  workbookDetail?: string;
  timeLimit?: number;
  questions: Question[];
}

interface PostWorkbookResponse {
  data: { id: number };
}
export const postWorkbook = async (body: WorkbookBody) => {
  const res = await mainClient.post<PostWorkbookResponse>(API_ROUTES.workbook, body);

  const workbookId = res.data.id;

  return workbookId;
};
