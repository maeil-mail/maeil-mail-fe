// 이 파일은 private 환경변수를 포함하고 있어 이 파일에 존재하는 함수는 클라이언트에서 호출 불가능합니다.

import { ADMIN_AUTH_SECRET_KEY } from '@/common/constants/privateEnv';
import { BASE_URL } from '@/common/apis/constants/baseUrl';
import { API_ROUTES } from '@/common/apis/constants/routes';
import type { Question } from '@/common/types/question';

export const getAllQuestions = async () => {
  const res = await fetch(`${BASE_URL}/admin${API_ROUTES.question}?size=10000`, {
    headers: {
      Authorization: `Basic ${ADMIN_AUTH_SECRET_KEY}`,
    },
  });

  const data = await res.json();

  return data as { data: Question[] };
};
