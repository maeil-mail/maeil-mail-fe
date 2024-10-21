import { HTTP_ERROR_MESSAGE, HTTP_STATUS_CODE } from '../constants/http';
import HTTPError from '../error/HTTPError';

const handleAPIError = (responseStatus: number, message?: string) => {
  const errorPayload = HTTP_ERROR_MESSAGE[responseStatus as keyof typeof HTTP_ERROR_MESSAGE];

  if (errorPayload) {
    throw new HTTPError(responseStatus, {
      message: message || `HTTP 오류: ${responseStatus}`,
      payload: errorPayload,
    });
  } else if (responseStatus >= HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR) {
    throw new HTTPError(HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR, {
      message: message || '서버 오류가 발생했습니다.',
      payload: HTTP_ERROR_MESSAGE[HTTP_STATUS_CODE.INTERNAL_SERVER_ERROR],
    });
  } else if (responseStatus >= HTTP_STATUS_CODE.BAD_REQUEST) {
    throw new HTTPError(HTTP_STATUS_CODE.BAD_REQUEST, {
      message: message || '잘못된 요청입니다.',
      payload: HTTP_ERROR_MESSAGE[HTTP_STATUS_CODE.BAD_REQUEST],
    });
  }
};

export default handleAPIError;
