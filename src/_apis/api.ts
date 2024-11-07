import { CategoryEN } from '@/_types';
import BASE_URL from './baseUrl';
import API_ROUTES from './routes';

export const postSubscribe = async ({
  email,
  categories,
  code,
}: {
  email: string;
  categories: CategoryEN[];
  code: string;
}) => {
  const response = await fetch(`${BASE_URL}${API_ROUTES.post_subscribe}`, {
    method: 'POST',
    body: JSON.stringify({
      email,
      category: categories,
      code,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('에러');
  }
};

export const getDetailQuestion = async ({ id }: { id: string }) => {
  const response = await fetch(`${BASE_URL}${API_ROUTES.question}/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('에러 발생!');
  }

  const data = await response.json();

  return data;
};
