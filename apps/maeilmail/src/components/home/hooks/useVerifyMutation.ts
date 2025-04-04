import { useState } from 'react';
import { postVerifyEmail } from '../apis/postVerifyEmail';
import { useServerActionMutation } from './useServerActionMutation';

interface UseVerifyMutationOptions {
  email: string;
  isValidCategories: boolean;
}

const useVerifyMutation = ({ email, isValidCategories }: UseVerifyMutationOptions) => {
  const [isSentEmail, setIsSentEmail] = useState(false);

  const { mutate: verifyEmailMutation, isPending: isVerifyingPending } = useServerActionMutation({
    mutationFn: postVerifyEmail,
    onSuccess: () => setIsSentEmail(true),
  });

  const handleVerifyEmail = () => {
    if (!isValidCategories) {
      return;
    }

    verifyEmailMutation(email);
  };

  return { isSentEmail, handleVerifyEmail, isVerifyingPending };
};

export default useVerifyMutation;
