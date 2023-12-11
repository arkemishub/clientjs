import { THttpClientInstance, TRequestConfig, TResponse } from "../types";

export default class CustomFunction {
  protected declare httpClient: THttpClientInstance;
  /**
   * @param params
   */
  constructor({ httpClient }: { httpClient: THttpClientInstance }) {
    this.httpClient = httpClient;
  }

  /**
   * Call a custom function with GET method
   */
  get(
    arkeID: string,
    functionName: string,
    config?: TRequestConfig
  ): Promise<TResponse> {
    return this.httpClient.get(`/${arkeID}/function/${functionName}`, config);
  }

  /**
   * Call a custom function with POST method
   */
  post(
    arkeID: string,
    functionName: string,
    data: unknown,
    config?: TRequestConfig
  ): Promise<TResponse> {
    return this.httpClient.post(
      `/${arkeID}/function/${functionName}`,
      data,
      config
    );
  }

  /**
   * Call a custom function with PUT method
   */
  put(
    arkeID: string,
    functionName: string,
    data: unknown,
    config?: TRequestConfig
  ): Promise<TResponse> {
    return this.httpClient.put(
      `/${arkeID}/function/${functionName}`,
      data,
      config
    );
  }
}
