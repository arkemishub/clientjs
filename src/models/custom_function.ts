import { THttpClientInstance, TRequestConfig, TResponse } from "../types";

export class CustomArkeFunction {
  protected declare httpClient: THttpClientInstance;

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
}

export class CustomUnitFunction {
  protected declare httpClient: THttpClientInstance;

  constructor({ httpClient }: { httpClient: THttpClientInstance }) {
    this.httpClient = httpClient;
  }

  /**
   * Call a custom function with GET method
   */
  get(
    arkeID: string,
    id: string,
    functionName: string,
    config?: TRequestConfig
  ): Promise<TResponse> {
    return this.httpClient.get(
      `/${arkeID}/unit/${id}/function/${functionName}`,
      config
    );
  }

  /**
   * Call a custom function with POST method
   */
  post(
    arkeID: string,
    id: string,
    functionName: string,
    data: unknown,
    config?: TRequestConfig
  ): Promise<TResponse> {
    return this.httpClient.post(
      `/${arkeID}/unit/${id}/function/${functionName}`,
      data,
      config
    );
  }
}
