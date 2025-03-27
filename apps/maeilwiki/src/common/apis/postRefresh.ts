import mainClient from './client/mainClient';
import { API_ROUTES } from './constants/routes';

export const postRefresh = async (): Promise<void> => {
  const data = await mainClient.post(API_ROUTES.refresh);

  return data;
};
