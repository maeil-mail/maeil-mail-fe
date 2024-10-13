import BASE_URL from './baseUrl';
import API_ROUTES from './routes';

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
    throw new Error('에러 발생!');
  }
};
