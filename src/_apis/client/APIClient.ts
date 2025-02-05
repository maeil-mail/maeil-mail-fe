import { HTTP_STATUS_CODE } from '../constants/http';

const baseHeader = {
  'Content-Type': 'application/json',
};

export class HTTPError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

type HTTPMethod = 'GET' | 'POST' | 'PATCH' | 'DELETE';

export default class APIClient {
  constructor(private baseUrl: string) {}

  async get<T = any>(path: string): Promise<T> {
    return this.request<T>('GET', path);
  }

  async post<T = any>(path: string, body?: any): Promise<T> {
    return this.request<T>('POST', path, body);
  }

  async patch<T = any>(path: string, body?: any): Promise<T> {
    return this.request<T>('PATCH', path, body);
  }

  async delete<T = any>(path: string, body?: any): Promise<T> {
    return this.request<T>('DELETE', path, body);
  }

  private async request<T>(method: HTTPMethod, path: string, body?: any): Promise<T> {
    try {
      const url = this.generateUrl(path);

      const response = await fetch(url, {
        method,
        headers: baseHeader,
        body: body ? JSON.stringify(body) : undefined,
        credentials: 'include',
      });

      if (!response.ok) {
        throw new HTTPError(
          `${method} 요청에서 에러 발생 (url: ${url}, status: ${response.status}) - ${await response.text()}`,
          response.status,
        );
      }

      return await response.json();
    } catch (error) {
      if (error instanceof HTTPError) {
        throw error;
      }

      throw new HTTPError(
        `네트워크 오류 또는 요청 실패 (url: ${path})`,
        HTTP_STATUS_CODE.NETWORK_ERROR,
      );
    }
  }

  private generateUrl(path: string) {
    return `${this.baseUrl}${path}`;
  }
}
