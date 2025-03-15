import mainClient from '@/common/apis/client/mainClient';
import { API_ROUTES } from '@/common/apis/constants/routes';

export const deleteSubscribe = async (body: { email: string; token: string }) => {
  await mainClient.delete(API_ROUTES.subscribe, body);
};
