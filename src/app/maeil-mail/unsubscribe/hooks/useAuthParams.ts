import { useSearchParams } from 'next/navigation';

interface AuthParams {
  email: string;
  token: string;
}

const useAuthParams = (): AuthParams => {
  // useSearchParams를 호출하기 위해서 "use client"를 선언하고, 컴포넌트를 Suspense로 감싸주어야 합니다.
  const searchParams = useSearchParams();

  const email = searchParams.get('email');
  const token = searchParams.get('token');

  if (!email || !token) {
    throw new Error('올바르지 않은 접근입니다.');
  }

  return { email, token };
};

export default useAuthParams;
