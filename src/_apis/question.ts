import mainClient from './client/mainClient';
import API_ROUTES from './constants/routes';

export const getDetailQuestion = async ({ id }: { id: string }) => {
  const data = await mainClient.get(`${API_ROUTES.question}/${id}`);
  return data;
};
