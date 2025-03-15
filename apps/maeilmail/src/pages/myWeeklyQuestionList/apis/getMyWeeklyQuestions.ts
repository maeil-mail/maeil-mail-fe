import mainClient from '@/common/apis/client/mainClient';
import { pathGenerator } from '@/common/apis/constants/routes';

export const getMyWeeklyQuestions = async (
  email: string,
  category: string,
  period: { year: number; month: number; week: number },
) => {
  const data = await mainClient.get(pathGenerator.myWeeklyQuestions(email, category, period));

  return data;
};
