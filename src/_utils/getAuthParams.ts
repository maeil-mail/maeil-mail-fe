import { SearchParams } from '@/_types';

interface AuthParams {
  email: string;
  token: string;
}

const getAuthParams = (params: SearchParams): AuthParams => {
  const email = params['email'];
  const token = params['token'];

  if (!email || !token) {
    throw new Error('email과 token이 모두 쿼리 파라미터에 포함되어야 합니다.');
  }

  return { email, token };
};

export default getAuthParams;
