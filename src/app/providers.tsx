'use client';

import { HTTP_STATUS_CODE } from '@/_apis/constants/http';
import { HTTPError } from '@/_apis/client/APIClient';
import {
  isServer,
  Mutation,
  MutationCache,
  Query,
  QueryCache,
  QueryClient,
  QueryClientProvider,
  QueryKey,
} from '@tanstack/react-query';
import { redirectToGithubLogin } from '@/_components/MaeilWiki/_utils/redirectToGithubLogin';
import { postRefresh } from '@/_components/MaeilWiki/_apis/auth';

function makeQueryClient() {
  return new QueryClient({
    queryCache: new QueryCache({ onError: handleQueryError }),
    mutationCache: new MutationCache({ onError: handleMutationError }),
    defaultOptions: { queries: { retry: 1 } },
  });
}

let browserQueryClient: QueryClient | undefined = undefined;

function getQueryClient() {
  if (isServer) {
    return makeQueryClient();
  } else {
    if (!browserQueryClient) browserQueryClient = makeQueryClient();
    return browserQueryClient;
  }
}

export default function Providers({ children }: { children: React.ReactNode }) {
  const queryClient = getQueryClient();

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}

async function handleQueryError(error: Error, query: Query<unknown, unknown, unknown, QueryKey>) {
  try {
    if (isUnauthorizedError(error)) {
      await postRefresh();
      await query.fetch();
    }
  } catch (error) {
    if (isUnauthorizedError(error)) {
      // 리프레시 토큰 검증 시도가 실패하는 건 에러 케이스가 아니므로 무시합니다.
      return;
    }

    throw error;
  }
}

async function handleMutationError(
  error: Error,
  variables: unknown,
  _: unknown,
  mutation: Mutation<unknown, unknown, unknown, unknown>,
) {
  try {
    if (isUnauthorizedError(error)) {
      await postRefresh();
      await mutation.execute(variables);
    }
  } catch (error) {
    if (isUnauthorizedError(error)) {
      alert('로그인 후 사용하실 수 있습니다.');
      redirectToGithubLogin();
      return;
    }

    throw error;
  }
}

function isUnauthorizedError(error: unknown): error is HTTPError {
  return error instanceof HTTPError && error.status === HTTP_STATUS_CODE.UNAUTHORIZED;
}
