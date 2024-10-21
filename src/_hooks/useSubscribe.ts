import { ERROR_MESSAGE } from "@/_constants/messages";
import { CategoryEN } from "@/_types";
import toast from "@/_utils/toast";
import useSubscriptionMutation from "./mutations/useSubscriptionMutation";
import useVerifyMutation from "./mutations/useVerifyMutation";
import useCategory from "./useCategory";
import useConsent from "./useConsent";
import useEmail from "./useEmail";
import useVerificationNumber from "./useVerificationNumber";
import useCategories from "./useCategories";

const useSubscribe = () => {
  const {
    subscriptionMutation,
    isSuccess: isSubscriptionSuccess,
    isPending: isSubscriptionPending,
  } = useSubscriptionMutation();
  const { email, handleEmail, isValidEmail } = useEmail();
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
      categories: categories as CategoryEN[],
      code: verificationNumber,
    });
  };

  return {
    isSubscriptionSuccess,
    isSubscriptionPending,
    handleCategories,
    handleVerificationNumber,
    verificationNumber,
    handleConsent,
    handleEmail,
    handleVerifyEmail,
    isSentEmail,
    isAllValid,
    handleSubmitSubscription,
    email,
    isValidEmail,
    isAgreed,
    isVerifyingPending,
    categories,
  };
};

export default useSubscribe;
