'use client';

import { getMyQuestions } from '../apis/getMyQuestions';
import { QuestionCategoryEN } from '@/common/types/question';
import { useSuspenseQuery } from '@tanstack/react-query';

const useMyQuestions = (email: string, page: number, category: QuestionCategoryEN) => {
  return useSuspenseQuery({
    queryKey: ['myQuestions', email, page, category],
    queryFn: () => getMyQuestions(email, page, category),
  });
};

export default useMyQuestions;
