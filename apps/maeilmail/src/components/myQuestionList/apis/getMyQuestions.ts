import mainClient from '@/common/apis/client/mainClient';
import { pathGenerator } from '@/common/apis/constants/routes';
import { QuestionCategoryEN } from '@/common/types/question';

// page 변수는 frontend에서 1 base, backend에서 0 base입니다.
export const getMyQuestions = async (
  email: string,
  page: number = 1,
  category: QuestionCategoryEN,
) => {
  const data = await mainClient.get(pathGenerator.myQuestions(email, page - 1, category));

  return data;
};
