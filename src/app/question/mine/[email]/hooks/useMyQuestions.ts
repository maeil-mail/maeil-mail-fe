'use client';

import { getMyQuestions } from '@/_apis/question';
import { useSuspenseQuery } from '@tanstack/react-query';

const useMyQuestions = (email: string, page: number) => {
  return useSuspenseQuery({
    queryKey: ['myQuestions', email, page],
    queryFn: () => getMyQuestions(email, page),
  });
};

export default useMyQuestions;
