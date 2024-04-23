/**
 * Copyright 2023 Arkemis S.r.l.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  THttpClientInstance,
  TRequestConfig,
  TResponse,
  TUnit,
} from "../types";

export class CustomArkeFunction {
  protected declare httpClient: THttpClientInstance;

  constructor({ httpClient }: { httpClient: THttpClientInstance }) {
    this.httpClient = httpClient;
  }

  /**
   * Call a custom function with GET method
   */
  get<T = TUnit>(
    arkeID: string,
    functionName: string,
    config?: TRequestConfig,
  ): Promise<TResponse<T>> {
    return this.httpClient.get(`/${arkeID}/function/${functionName}`, config);
  }

  /**
   * Call a custom function with POST method
   */
  post<T = TUnit>(
    arkeID: string,
    functionName: string,
    data: unknown,
    config?: TRequestConfig,
  ): Promise<TResponse<T>> {
    return this.httpClient.post(
      `/${arkeID}/function/${functionName}`,
      data,
      config,
    );
  }
}

export class CustomGroupFunction {
  protected declare httpClient: THttpClientInstance;

  constructor({ httpClient }: { httpClient: THttpClientInstance }) {
    this.httpClient = httpClient;
  }

  /**
   * Call a custom function with GET method
   */
  get<T = TUnit>(
    groupID: string,
    functionName: string,
    config?: TRequestConfig,
  ): Promise<TResponse<T>> {
    return this.httpClient.get(
      `/group/${groupID}/function/${functionName}`,
      config,
    );
  }

  /**
   * Call a custom function with POST method
   */
  post<T = TUnit>(
    groupID: string,
    functionName: string,
    data: unknown,
    config?: TRequestConfig,
  ): Promise<TResponse<T>> {
    return this.httpClient.post(
      `/group/${groupID}/function/${functionName}`,
      data,
      config,
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
    config?: TRequestConfig,
  ): Promise<TResponse> {
    return this.httpClient.get(
      `/${arkeID}/unit/${id}/function/${functionName}`,
      config,
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
    config?: TRequestConfig,
  ): Promise<TResponse> {
    return this.httpClient.post(
      `/${arkeID}/unit/${id}/function/${functionName}`,
      data,
      config,
    );
  }
}
