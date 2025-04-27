import mainClient from '@/common/apis/client/mainClient';
import { pathGenerator } from '@/common/apis/constants/routes';
import { MailFrequency } from '@/common/types/mail';

interface GetMailFrequencyResponse {
  frequency: MailFrequency;
}

export const getMailFrequency = async (email: string) => {
  const data = await mainClient.get<GetMailFrequencyResponse>(pathGenerator.myMailFrequency(email));

  return data;
};
