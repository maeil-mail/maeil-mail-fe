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

export const getMyWeeklyQuestions = async (
  email: string,
  category: string,
  period: { year: number; month: number; week: number },
) => {
  const data = await mainClient.get(pathGenerator.myWeeklyQuestions(email, category, period));

  return data;
};
