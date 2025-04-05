import mainClient from '@/common/apis/client/mainClient';

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

export const postWorkbook = async (body: WorkbookBody) => {
  const res = await mainClient.post('/wiki/multiple-choice', body);
  console.log('res', res);
};
