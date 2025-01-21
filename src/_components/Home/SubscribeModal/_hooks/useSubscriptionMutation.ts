import { postSubscribe } from '@/app/maeil-mail/actions';
import useServerActionMutation from './useServerActionMutation';

const useSubscriptionMutation = () => {
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

export default useSubscriptionMutation;
