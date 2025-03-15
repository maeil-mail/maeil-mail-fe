import { useServerActionMutation } from './useServerActionMutation';
import { postSubscribe } from '../apis/postSubscribe';

export const useSubscriptionMutation = () => {
  const {
    isPending,
    mutate: subscriptionMutation,
    isSuccess,
    isError,
  } = useServerActionMutation({
    mutationFn: postSubscribe,
  });

  return {
    subscriptionMutation,
    isSuccess,
    isPending,
    isError,
  };
};
