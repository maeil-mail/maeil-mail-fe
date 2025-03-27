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
