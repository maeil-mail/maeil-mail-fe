import mainClient from './client/mainClient';
import API_ROUTES, { pathGenerator } from './constants/routes';

export const getDetailQuestion = async ({ id }: { id: string }) => {
  const data = await mainClient.get(`${API_ROUTES.question}/${id}`);
  return data;
};

// page 변수는 frontend에서 1 base, backend에서 0 base입니다.
export const getMyQuestions = async (email: string, page: number = 1) => {
  const data = await mainClient.get(pathGenerator.myQuestions(email, page - 1));

  return data;
};

export const getMyWeeklyQuestions = async (
  email: string,
  category: string,
  period: { year: number; month: number; week: number },
) => {
  const data = await mainClient.get(pathGenerator.myWeeklyQuestions(email, category, period));

  return data;
};
