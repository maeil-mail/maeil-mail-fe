const BASE_URL =
  process.env.NEXT_PUBLIC_API_MOCKING === 'enabled'
    ? 'http://localhost:9090'
    : 'https://maeil-mail.site';

export default BASE_URL;
