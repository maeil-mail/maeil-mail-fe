import { useSuspenseQuery } from '@tanstack/react-query';
import { getDetailQuestion } from '@/_apis/api';
import { questionKeys } from './keys/queryKeys';

const useDetailQuestion = (id: string) => {
  return useSuspenseQuery({
    queryKey: questionKeys.detail(id),
    queryFn: () => getDetailQuestion({ id }),
  });
};

export default useDetailQuestion;
