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

interface PostNewQuestionOptions {
  title: string;
  category: CategoryEN;
  content: string;
}

export const postNewQuestion = async ({ title, category, content }: PostNewQuestionOptions) => {
  const response = await fetch(`${BASE_URL}${API_ROUTES.post_new_question}`, {
    method: 'POST',
    body: JSON.stringify({
      title,
      category,
      content,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    throw new Error('에러가 발생했습니다.');
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

interface GetQuestionByCategoryOptions {
  category: CategoryEN;
}

export const getQuestionByCategory = async ({ category }: GetQuestionByCategoryOptions) => {
  const response = await fetch(`${BASE_URL}${API_ROUTES.question}?category=${category}`, {
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
