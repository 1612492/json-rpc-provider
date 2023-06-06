import fetch from 'isomorphic-fetch';
import { generateId } from './id';

class HTTPClient {
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  async request(method: string, params: any) {
    const res = await fetch(this.url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        jsonrpc: '2.0',
        method,
        params,
        id: generateId(),
      }),
    });

    return res.json();
  }
}

export class JsonRpcClient {
  private client: HTTPClient;

  constructor(url: string) {
    this.client = new HTTPClient(url);
  }

  async request(method: string, params: any) {
    return await this.client.request(method, params);
  }
}
