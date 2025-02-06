import mainClient from './client/mainClient';
import API_ROUTES, { pathGenerator } from './constants/routes';
import type { Question, QuestionCategoryEN } from '@/_types';

export const getAllQuestions = async () => {
  const data = await mainClient.get<{ data: Question[] }>(`${API_ROUTES.question}?size=10000`);
  return data;
};

export const getDetailQuestion = async ({ id }: { id: string }) => {
  const data = await mainClient.get(`${API_ROUTES.question}/${id}`);
  return data;
};

// page 변수는 frontend에서 1 base, backend에서 0 base입니다.
export const getMyQuestions = async (
  email: string,
  page: number = 1,
  category: QuestionCategoryEN,
) => {
  const data = await mainClient.get(pathGenerator.myQuestions(email, page - 1, category));

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
