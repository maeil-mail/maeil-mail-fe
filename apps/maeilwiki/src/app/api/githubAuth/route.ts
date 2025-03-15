import { GITHUB_OAUTH_TOKEN_URL } from '@/common/constants/auth';
import { GITHUB_OAUTH_CLIENT_ID } from '@/common/constants/publicEnv';
import { OAUTH_GITHUB_CLIENT_SECRET } from '@/common/constants/privateEnv';

const HEADER = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { code } = body;

    if (!code) {
      return Response.json(null, { status: 400 });
    }

    const { access_token: accessToken } = await getGithubAccessToken(code);

    return Response.json({ accessToken }, { status: 200 });
  } catch (error) {
    console.error(error);
    return Response.json(null, { status: 500 });
  }
}

async function getGithubAccessToken(code: string) {
  const res = await fetch(GITHUB_OAUTH_TOKEN_URL, {
    method: 'POST',
    body: JSON.stringify({
      client_id: GITHUB_OAUTH_CLIENT_ID,
      client_secret: OAUTH_GITHUB_CLIENT_SECRET,
      code: code,
    }),
    headers: HEADER,
  });

  if (!res.ok) {
    throw new Error('인증 과정에서 오류가 발생했습니다.');
  }

  const data = await res.json();

  return data;
}
