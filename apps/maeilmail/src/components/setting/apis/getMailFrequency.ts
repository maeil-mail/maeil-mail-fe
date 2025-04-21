import mainClient from '@/common/apis/client/mainClient';
import { pathGenerator } from '@/common/apis/constants/routes';

interface MailFrequency {
  frequency: 'daily' | 'weekly';
}

export const getMailFrequency = async (email: string) => {
  const data = await mainClient.get<MailFrequency>(pathGenerator.myMailFrequency(email));

  return data;
};
