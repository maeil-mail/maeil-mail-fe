import { CategoryEN } from '@/_types';
import API_ROUTES from './constants/routes';
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
