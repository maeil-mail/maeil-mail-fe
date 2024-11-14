import mainClient from './client/mainClient';
import API_ROUTES, { pathGenerator } from './constants/routes';

export const getDetailQuestion = async ({ id }: { id: string }) => {
  const data = await mainClient.get(`${API_ROUTES.question}/${id}`);
  return data;
};

export const getMyQuestions = async (email: string) => {
  const data = await mainClient.get(pathGenerator.myQuestions(email));

  return data.data;
};
