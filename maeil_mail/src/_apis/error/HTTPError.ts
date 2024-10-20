export interface HTTPErrorInfo {
  message?: string;
  payload: {
    HEADING: string;
    BODY: string;
    BUTTON: string;
  };
}

class HTTPError extends Error {
  statusCode: number;
  information: HTTPErrorInfo;

  constructor(statusCode: number, errorInfo: HTTPErrorInfo) {
    super(errorInfo.message ?? errorInfo.payload.HEADING);

    this.name = 'HTTPError';
    this.statusCode = statusCode;
    this.information = errorInfo;
  }
}

export default HTTPError;
