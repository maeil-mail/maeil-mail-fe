import { GITHUB_OAUTH_LOGIN_URL } from '../_constants/auth';

export const redirectToGithubLogin = (returnPath: string = '/'): void => {
  window.location.href = GITHUB_OAUTH_LOGIN_URL + `?returnPath=${returnPath}`;
};
