import { postVerifyEmail } from '@/app/actions';
import toast from '@/_utils/toast';
import { ERROR_MESSAGE } from '@/_constants/messages';
import { useState } from 'react';
import useServerActionMutation from './useServerActionMutation';

interface UseVerifyMutationOptions {
  email: string;
  isValidCategories: boolean;
}

const useVerifyMutation = ({ email, isValidCategories }: UseVerifyMutationOptions) => {
  const [isSentEmail, setIsSentEmail] = useState(false);

  const { mutate: verifyEmailMutation, isPending: isVerifyingPending } = useServerActionMutation({
    mutationFn: postVerifyEmail,
    onError: () => toast.error(ERROR_MESSAGE.fail_verify_email),
    onSuccess: () => setIsSentEmail(true),
  });

  const handleVerifyEmail = () => {
    if (!isValidCategories) {
      toast.error(ERROR_MESSAGE.invalid_category);
      return;
    }

    verifyEmailMutation(email);
  };

  return { isSentEmail, handleVerifyEmail, isVerifyingPending };
};

export default useVerifyMutation;
