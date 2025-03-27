export const OAUTH_GITHUB_CLIENT_SECRET = process.env.OAUTH_GITHUB_CLIENT_SECRET as string;

export const ADMIN_AUTH_SECRET_KEY = process.env.ADMIN_AUTH_SECRET_KEY as string;

const envs = [OAUTH_GITHUB_CLIENT_SECRET, ADMIN_AUTH_SECRET_KEY];

if (envs.some((v) => !v)) {
  throw new Error('일부 private 환경변수가 등록되지 않았습니다.');
}
