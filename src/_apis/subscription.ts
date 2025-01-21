import { CategoryEN } from '@/_types';
import API_ROUTES, { pathGenerator } from './constants/routes';
import mainClient from './client/mainClient';
import { MailFrequency } from '@/_types';

export const postSubscribe = async ({
  email,
  categories,
  code,
}: {
  email: string;
  categories: CategoryEN[];
  code: string;
}) => {
  await mainClient.post(API_ROUTES.subscribe, {
    email,
    category: categories,
    code,
  });
};

export const deleteSubscribe = async (body: { email: string; token: string }) => {
  await mainClient.delete(API_ROUTES.subscribe, body);
};

export const getMailFrequency = async (email: string) => {
  const data = await mainClient.get(pathGenerator.myMailFrequency(email));

  return data;
};

export const patchMailFrequency = async (payload: {
  email: string;
  token: string;
  frequency: MailFrequency;
}) => {
  await mainClient.patch(API_ROUTES.mailFrequency, payload);
};
