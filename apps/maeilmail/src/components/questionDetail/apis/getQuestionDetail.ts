import mainClient from '@/common/apis/client/mainClient';
import { API_ROUTES } from '@/common/apis/constants/routes';
import { QuestionDetail } from '@/common/types/question';

export const getQuestionDetail = async ({ id }: { id: string }) => {
  const data = await mainClient.get<QuestionDetail>(`${API_ROUTES.question}/${id}`);

  return data;
};
