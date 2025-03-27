export const GITHUB_OAUTH_CLIENT_ID = process.env.NEXT_PUBLIC_GITHUB_OAUTH_CLIENT_ID as string;

export const GITHUB_OAUTH_REDIRECT_URI = process.env
  .NEXT_PUBLIC_GITHUB_OAUTH_REDIRECT_URI as string;

export const MAEIL_WIKI_ERROR_PAGE_URL = process.env
  .NEXT_PUBLIC_MAEIL_WIKI_ERROR_PAGE_URL as string;

const envs = [GITHUB_OAUTH_CLIENT_ID, GITHUB_OAUTH_REDIRECT_URI, MAEIL_WIKI_ERROR_PAGE_URL];

if (envs.some((v) => !v)) {
  throw new Error('일부 public 환경변수가 등록되지 않았습니다.');
}
