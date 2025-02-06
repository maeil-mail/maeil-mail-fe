export const GITHUB_OAUTH_CLIENT_SECRET = process.env.OAUTH_GITHUB_CLIENT_SECRET as string;

const envs = [GITHUB_OAUTH_CLIENT_SECRET];

if (envs.some((v) => !v)) {
  throw new Error('일부 private 환경변수가 등록되지 않았습니다.');
}
