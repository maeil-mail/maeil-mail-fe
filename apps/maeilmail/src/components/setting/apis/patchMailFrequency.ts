import mainClient from '@/common/apis/client/mainClient';
import { API_ROUTES } from '@/common/apis/constants/routes';
import { MailFrequency } from '@/common/types/mail';

export const patchMailFrequency = async (payload: {
  email: string;
  token: string;
  frequency: MailFrequency;
}) => {
  await mainClient.patch(API_ROUTES.mailFrequency, payload);
};
