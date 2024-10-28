import { ERROR_MESSAGE } from '@/_constants/messages';
import { CategoryEN } from '@/_types';
import toast from '@/_utils/toast';
import useSubscriptionMutation from './mutations/useSubscriptionMutation';
import useVerifyMutation from './mutations/useVerifyMutation';
import useConsent from './useConsent';
import useEmail from './useEmail';
import useVerificationNumber from './useVerificationNumber';
import useCategories from './useCategories';
import { postSubscribe } from '@/app/actions';

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

  const handleSubmitSubscription = async () => {
    if (!isValidCategories) {
      toast.error(ERROR_MESSAGE.invalid_category);
      return;
    }

    if (!isValidEmail) {
      toast.error(ERROR_MESSAGE.invalid_email);
      return;
    }

    postSubscribe({
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
