import mainClient from '@/_apis/client/mainClient';
import API_ROUTES from '@/_apis/constants/routes';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { postGithubAccessToken } from '../_apis/auth';

export const useLoginMutation = (code: string, returnPath: string = '/') => {
  const router = useRouter();

  return useMutation({
    mutationFn: async () => {
      const accessToken = await postGithubAccessToken(code);

      await mainClient.post(API_ROUTES.member, {
        oauthAccessToken: accessToken,
      });
    },
    onSuccess: () => {
      router.push(returnPath);
    },
    throwOnError: true,
  });
};
