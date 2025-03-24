'use server';

import { BASE_URL } from '@/common/apis/constants/baseUrl';
import { API_ROUTES } from '@/common/apis/constants/routes';

export const postVerifyEmail = async (email: string) => {
  const response = await fetch(`${BASE_URL}${API_ROUTES.verify_email}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      email,
    }),
  });

  if (!response.ok) {
    throw new Error(`${response.status}, API 호출 실패: ${response.url}`);
  }
};
