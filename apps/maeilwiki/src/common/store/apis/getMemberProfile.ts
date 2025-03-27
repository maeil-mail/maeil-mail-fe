import mainClient from '@/common/apis/client/mainClient';
import { API_ROUTES } from '@/common/apis/constants/routes';

export interface MemberProfile {
  id: number;
  name: string;
  profileImage: string;
}

export const getMemberProfile = async (): Promise<MemberProfile> => {
  const data = await mainClient.get(API_ROUTES.memberProfile);

  return data;
};
