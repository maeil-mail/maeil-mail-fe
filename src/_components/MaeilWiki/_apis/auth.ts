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

const GITHUB_AUTH_PATH = '/api/githubAuth';

export const postGithubAccessToken = async (code: string) => {
  const res = await fetch(GITHUB_AUTH_PATH, {
    method: 'POST',
    body: JSON.stringify({ code }),
  });

  if (!res.ok) {
    throw new Error('로그인 과정에서 오류가 발생했습니다.');
  }

  const { accessToken } = await res.json();

  return accessToken;
};
