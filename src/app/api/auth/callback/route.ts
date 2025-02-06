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
import { NextRequest, NextResponse } from 'next/server';

const HEADER = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const code = searchParams.get('code');

    const returnPath = searchParams.get('returnPath');
    const returnUrl = `${MAEIL_WIKI_HOME_URL}${returnPath}`;

    if (!code) {
      return Response.redirect(MAEIL_WIKI_ERROR_PAGE_URL);
    }

    const { access_token: githubAccessToken } = await getGithubAccessToken(code);

    const response = await mainClient.request('POST', API_ROUTES.member, {
      oauthAccessToken: githubAccessToken,
    });

    return NextResponse.redirect(returnUrl, { headers: response.headers });
  } catch (error) {
    console.error(error);
    return Response.redirect(MAEIL_WIKI_ERROR_PAGE_URL);
  }
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
