import mainClient from '@/common/apis/client/mainClient';
import { pathGenerator } from '@/common/apis/constants/routes';

export const getMailFrequency = async (email: string) => {
  const data = await mainClient.get(pathGenerator.myMailFrequency(email));

  return data;
};
