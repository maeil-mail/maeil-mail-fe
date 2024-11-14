import { CategoryEN } from '@/_types';
import API_ROUTES, { pathGenerator } from './constants/routes';
import mainClient from './client/mainClient';

export const postSubscribe = async ({
  email,
  categories,
  code,
}: {
  email: string;
  categories: CategoryEN[];
  code: string;
}) => {
  await mainClient.post(API_ROUTES.post_subscribe, {
    email,
    category: categories,
    code,
  });
};

export const deleteSubscribe = async (body: { email: string; token: string }) => {
  await mainClient.delete(API_ROUTES.unsubscribe, body);
};
