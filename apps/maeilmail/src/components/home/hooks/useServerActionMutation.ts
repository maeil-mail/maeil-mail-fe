/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from 'react';

interface UseServerActionMutationOptions<T> {
  mutationFn: (args: T) => Promise<any>;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

interface MutationState {
  isPending: boolean;
  isError: boolean;
  isSuccess: boolean;
}

export const useServerActionMutation = <T>({
  mutationFn,
  onSuccess,
  onError,
}: UseServerActionMutationOptions<T>) => {
  const [mutationState, setMutationState] = useState<MutationState>({
    isPending: false,
    isError: false,
    isSuccess: false,
  });

  const mutate = async (args: T) => {
    setMutationState({ isPending: true, isSuccess: false, isError: false });

    try {
      await mutationFn(args);
      setMutationState({ isPending: false, isSuccess: true, isError: false });

      if (onSuccess) {
        onSuccess();
      }
    } catch (err) {
      setMutationState({ isPending: false, isSuccess: false, isError: true });

      if (onError && err instanceof Error) {
        onError(err);
      }
    }
  };

  return { ...mutationState, mutate };
};
