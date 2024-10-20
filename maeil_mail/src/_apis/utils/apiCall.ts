import handleAPIError from './handleAPIError';
import HTTPError from '../error/HTTPError';

const apiCall = async (url: string, options: RequestInit) => {
  try {
    const response = await fetch(url, options);

    if (!response.ok) {
      handleAPIError(response.status, `API 호출 실패: ${url}`);
    }

    const data = await response.json();

    return data;
  } catch (err) {
    if (err instanceof HTTPError) {
      throw err;
    }

    throw err;
  }
};

export default apiCall;
