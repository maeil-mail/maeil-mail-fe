import { ERROR_MESSAGE } from "@/_constants/messages";
import toast from "@/_utils/toast";
import useSubscriptionMutation from "./mutations/useSubscriptionMutation";
import useVerifyMutation from "./mutations/useVerifyMutation";
import useConsent from "./useConsent";
import useEmail from "./useEmail";
import useVerificationNumber from "./useVerificationNumber";
import useCategories from "./useCategories";

const useSubscribe = () => {
  const {
    subscriptionMutation,
    isSuccess: isSubscriptionSuccess,
    isPending: isSubscriptionPending,
    isError: isSubscriptionError,
  } = useSubscriptionMutation();
  const { email, handleEmail, isValidEmail, handleFocus, isTouched } = useEmail();
  const { categories, isValidCategories, handleCategories } = useCategories();
  const { verificationNumber, handleVerificationNumber, isValidVerificationNumber } =
    useVerificationNumber();
  const { isAgreed, handleConsent } = useConsent();
  const { isSentEmail, handleVerifyEmail, isVerifyingPending } = useVerifyMutation({
    email,
    isValidCategories,
  });
  const isAllValid = isValidCategories && isValidEmail && isValidVerificationNumber && isAgreed;

  const handleSubmitSubscription = () => {
    if (!isValidCategories) {
      toast.error(ERROR_MESSAGE.invalid_category);
      return;
    }

    if (!isValidEmail) {
      toast.error(ERROR_MESSAGE.invalid_email);
      return;
    }

    subscriptionMutation({
      email,
      categories: categories,
      code: verificationNumber,
    });
  };

  return {
    isSubscriptionSuccess,
    isSubscriptionPending,
    isSubscriptionError,
    handleCategories,
    handleVerificationNumber,
    verificationNumber,
    handleConsent,
    handleEmail,
    isTouched,
    handleFocus,
    handleVerifyEmail,
    isSentEmail,
    isAllValid,
    handleSubmitSubscription,
    email,
    isValidEmail,
    isAgreed,
    isVerifyingPending,
    categories,
    isValidCategories,
  };
};

export default useSubscribe;
