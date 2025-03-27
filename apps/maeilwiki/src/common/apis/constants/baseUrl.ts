export const BASE_URL =
  process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'
    ? 'http://localhost:9090'
    : 'https://api.maeil-mail.kr';
