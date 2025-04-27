import mainClient from '@/common/apis/client/mainClient';
import { API_ROUTES } from '@/common/apis/constants/routes';

export const getQuestionDetail = async ({ id }: { id: string }) => {
  const data = await mainClient.get(`${API_ROUTES.question}/${id}`);
  console.log(data);
  return data;
};
