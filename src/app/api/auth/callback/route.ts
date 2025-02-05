import BASE_URL from '@/_apis/baseUrl';
import mainClient from '@/_apis/client/mainClient';
import API_ROUTES from '@/_apis/constants/routes';
import { GITHUB_OAUTH_TOKEN_URL } from '@/_components/MaeilWiki/_constants/auth';
import { GITHUB_OAUTH_CLIENT_SECRET } from '@/_constants/privateEnv';
import {
  GITHUB_OAUTH_CLIENT_ID,
  MAEIL_WIKI_ERROR_PAGE_URL,
  MAEIL_WIKI_HOME_URL,
} from '@/_constants/publicEnv';
import { cookies } from 'next/headers';
import { NextRequest } from 'next/server';
import { extractHostname } from '../../_utils/extractHostname';

const HEADER = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

const cookieConfig = {
  domain: extractHostname(BASE_URL),
  path: '/',
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  maxAge: 60 * 60 * 24 * 7,
} as const;

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const code = searchParams.get('code');

  const returnPath = searchParams.get('returnPath');
  const returnUrl = `${MAEIL_WIKI_HOME_URL}${returnPath}`;

  if (!code) {
    return Response.redirect(MAEIL_WIKI_ERROR_PAGE_URL);
  }

  const { access_token: githubAccessToken } = await getGithubAccessToken(code);

  const { accessToken, refreshToken } = await mainClient.post<{
    accessToken: string;
    refreshToken: string;
  }>(API_ROUTES.member, {
    oauthAccessToken: githubAccessToken,
  });

  const cookieStore = await cookies();
  cookieStore.set('access', accessToken, cookieConfig);
  cookieStore.set('refresh', refreshToken, cookieConfig);

  return Response.redirect(returnUrl);
}

async function getGithubAccessToken(code: string) {
  const res = await fetch(GITHUB_OAUTH_TOKEN_URL, {
    method: 'POST',
    body: JSON.stringify({
      client_id: GITHUB_OAUTH_CLIENT_ID,
      client_secret: GITHUB_OAUTH_CLIENT_SECRET,
      code: code,
    }),
    headers: HEADER,
  });

  if (!res.ok) {
    return Response.redirect(MAEIL_WIKI_ERROR_PAGE_URL);
  }

  const data = await res.json();

  return data;
}
