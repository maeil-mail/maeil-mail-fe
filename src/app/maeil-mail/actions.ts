'use server';

import { CategoryEN } from '@/_types';
import BASE_URL from '@/_apis/baseUrl';
import API_ROUTES from '@/_apis/constants/routes';
import handleAPIError from '@/_apis/utils/handleAPIError';
import HTTPError from '@/_apis/error/HTTPError';
import { MailFrequency } from '@/_types';

export const postSubscribe = async ({
  email,
  categories,
  frequency,
  code,
}: {
  email: string;
  categories: CategoryEN[];
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
      handleAPIError(response.status, `API 호출 실패: ${response.url}`);
    }
  } catch (err) {
    console.error(err);
    if (err instanceof HTTPError) {
      throw err;
    }
  }
};

export const postVerifyEmail = async (email: string) => {
  try {
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
      handleAPIError(response.status, `API 호출 실패: ${response.url}`);
    }
  } catch (err) {
    console.error(err);
    if (err instanceof HTTPError) {
      throw err;
    }
  }
};
