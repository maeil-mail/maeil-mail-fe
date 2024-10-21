import { useSuspenseQuery } from '@tanstack/react-query';
import type { CategoryEN } from '@/_types';
import { getQuestionByCategory } from '@/_apis/api';
import { questionKeys } from './keys/queryKeys';

interface UseQuestionOptions {
  category: CategoryEN;
}

const useQuestion = ({ category }: UseQuestionOptions) => {
  return useSuspenseQuery({
    queryKey: questionKeys.category(category),
    queryFn: () => getQuestionByCategory({ category }),
  });
};

export default useQuestion;
