'use server';

import type { QuestionCategoryEN } from '@/common/types/question';
import { BASE_URL } from '@/common/apis/constants/baseUrl';
import { API_ROUTES } from '@/common/apis/constants/routes';
import { MailFrequency } from '@/common/types/mail';

export const postSubscribe = async ({
  email,
  categories,
  frequency,
  code,
}: {
  email: string;
  categories: QuestionCategoryEN[];
  frequency: MailFrequency;
  code: string;
}) => {
  try {
    const response = await fetch(`${BASE_URL}${API_ROUTES.subscribe}`, {
      method: 'POST',
      body: JSON.stringify({
        email,
        category: categories,
        frequency,
        code,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error(`${response.status}, API 호출 실패: ${response.url}`);
    }
  } catch (err) {
    console.error(err);
    throw err;
  }
};
