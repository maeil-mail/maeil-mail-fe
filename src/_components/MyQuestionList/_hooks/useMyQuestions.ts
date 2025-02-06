'use client';

import { getMyQuestions } from '@/_apis/question';
import { QuestionCategoryEN } from '@/_types';
import { useSuspenseQuery } from '@tanstack/react-query';

const useMyQuestions = (email: string, page: number, category: QuestionCategoryEN) => {
  return useSuspenseQuery({
    queryKey: ['myQuestions', email, page, category],
    queryFn: () => getMyQuestions(email, page, category),
  });
};

export default useMyQuestions;
