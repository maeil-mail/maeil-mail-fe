import { postSubscribe } from '@/app/actions';
import toast from '@/_utils/toast';
import { PROGRESS_MESSAGE, ERROR_MESSAGE } from '@/_constants/messages';
import useServerActionMutation from './useServerActionMutation';

const useSubscriptionMutation = () => {
  const {
    isPending,
    mutate: subscriptionMutation,
    isSuccess,
  } = useServerActionMutation({
    mutationFn: postSubscribe,
    onSuccess: () => {
      toast.success(PROGRESS_MESSAGE.success_subscription);
    },
    onError: () => {
      toast.error(ERROR_MESSAGE.fail_subscription);
    },
  });

  return {
    subscriptionMutation,
    isSuccess,
    isPending,
  };
};

export default useSubscriptionMutation;
