import { GITHUB_OAUTH_CLIENT_ID, GITHUB_OAUTH_REDIRECT_URI } from '@/_constants/publicEnv';

export const GITHUB_OAUTH_LOGIN_URL = `https://github.com/login/oauth/authorize?client_id=${GITHUB_OAUTH_CLIENT_ID}&redirect_uri=${GITHUB_OAUTH_REDIRECT_URI}`;
export const GITHUB_OAUTH_TOKEN_URL = 'https://github.com/login/oauth/access_token';
