import { useMutation } from '@tanstack/react-query';
import { postSubscribe } from '@/app/actions';
import toast from '@/_utils/toast';
import { PROGRESS_MESSAGE, ERROR_MESSAGE } from '@/_constants/messages';

email,
categories,
code,

const useSubscriptionMutation = () => {
  const subscribeMutation = async () => {
    await postSubscribe({
      emaw-
    });
  };

  const {
    mutate: subscriptionMutation,
    isSuccess,
    isPending,
  } = useMutation({
    mutationFn: postSubscribe,
    onSuccess: () => {
      toast.success(PROGRESS_MESSAGE.success_subscription);
    },
    onError: () => {
      toast.error(ERROR_MESSAGE.fail_subscription);
      console.error(ERROR_MESSAGE.fail_subscription);
    },
  });

  return {
    subscriptionMutation,
    isSuccess,
    isPending,
  };
};

export default useSubscriptionMutation;
