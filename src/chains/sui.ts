import { JsonRpcClient } from '../utils/json-rpc-client';

export class JsonRpcProvider {
  protected client: JsonRpcClient;

  constructor(url: string) {
    this.client = new JsonRpcClient(url);
  }

  getAllBalances(owner: string) {
    return this.client.request('suix_getAllBalances', [owner]);
  }
}
