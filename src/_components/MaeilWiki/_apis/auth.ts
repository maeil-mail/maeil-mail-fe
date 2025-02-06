import API_ROUTES from '@/_apis/constants/routes';
import mainClient from '@/_apis/client/mainClient';

export interface MemberProfile {
  id: number;
  name: string;
  profileImage: string;
}

export const getMemberProfile = async (): Promise<MemberProfile> => {
  try {
    const data = await mainClient.get(API_ROUTES.memberProfile);

    return data;
  } catch (error) {
    throw error;
  }
};

export const postRefresh = async (): Promise<void> => {
  try {
    const data = await mainClient.post(API_ROUTES.refresh);

    return data;
  } catch (error) {
    throw error;
  }
};
