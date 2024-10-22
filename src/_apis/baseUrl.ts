// const BASE_URL = 'https://maeil-mail.site';
const BASE_URL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:9090"
    : "https://maeil-mail.site";

export default BASE_URL;
