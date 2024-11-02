import { useMutation } from "@tanstack/react-query";
import { postSubscribe } from "@/_apis/api";
import toast from "@/_utils/toast";
import { PROGRESS_MESSAGE, ERROR_MESSAGE } from "@/_constants/messages";

const useSubscriptionMutation = () => {
  const {
    mutate: subscriptionMutation,
    isSuccess,
    isPending,
    isError,
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
    isError,
  };
};

export default useSubscriptionMutation;
