const baseHeader = {
  'Content-Type': 'application/json',
};

export default class APIClient {
  constructor(private baseUrl: string) {}

  async get<T = any>(path: string): Promise<T> {
    const url = this.generateUrl(path);

    const response = await fetch(url, {
      method: 'GET',
      headers: baseHeader,
    });

    if (!response.ok) {
      throw new Error(`api 요청에서 에러가 발생했습니다. (url: ${url})`);
    }

    const data = await response.json();

    return data;
  }

  async post(path: string, body?: any): Promise<void> {
    const url = this.generateUrl(path);

    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('에러');
    }
  }

  async delete(path: string, body?: any) {
    const url = this.generateUrl(path);

    const response = await fetch(url, {
      method: 'DELETE',
      body: JSON.stringify(body),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('에러');
    }
  }

  private generateUrl(path: string) {
    return `${this.baseUrl}${path}`;
  }
}
