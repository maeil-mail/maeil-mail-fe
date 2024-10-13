import { ERROR_MESSAGE } from '@/_constants/messages';
import { CategoryEN } from '@/_types';
import toast from '@/_utils/toast';
import useSubscriptionMutation from './mutations/useSubscriptionMutation';
import useVerifyMutation from './mutations/useVerifyMutation';
import useCategory from './useCategory';
import useConsent from './useConsent';
import useEmail from './useEmail';
import useVerificationNumber from './useVerificationNumber';

const useSubscribe = () => {
  const {
    subscriptionMutation,
    isSuccess: isSubscriptionSuccess,
    isPending: isSubscriptionPending,
  } = useSubscriptionMutation();
  const { email, handleEmail, isValidEmail } = useEmail();
  const { category, isValidCategory, handleCategory } = useCategory();
  const { verificationNumber, handleVerificationNumber, isValidVerificationNumber } =
    useVerificationNumber();
  const { isAgreed, handleConsent } = useConsent();
  const { isSentEmail, handleVerifyEmail, isVerifyingPending } = useVerifyMutation({
    email,
    isValidCategory,
  });
  const isAllValid = isValidCategory && isValidEmail && isValidVerificationNumber && isAgreed;

  const handleSubmitSubscription = () => {
    if (!isValidCategory) {
      toast.error(ERROR_MESSAGE.invalid_category);
      return;
    }

    if (!isValidEmail) {
      toast.error(ERROR_MESSAGE.invalid_email);
      return;
    }

    subscriptionMutation({
      email,
      category: category as CategoryEN,
      code: Number(verificationNumber),
    });
  };

  return {
    isSubscriptionSuccess,
    isSubscriptionPending,
    handleCategory,
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
  };
};

export default useSubscribe;
