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
  TRequestData,
  TResponse,
  TStruct,
  TUnit,
} from "../types";
import Topology from "./topology";

export default class Base {
  protected httpClient: THttpClientInstance;
  protected arke: string;
  topology: Topology;
  /**
   * @param params
   */
  constructor({
    httpClient,
    arke,
  }: {
    httpClient: THttpClientInstance;
    arke: string;
  }) {
    this.httpClient = httpClient;
    this.arke = arke;
    this.topology = new Topology({ httpClient });
  }

  /**
   * Creates
   */
  create<T = TUnit>(
    data: TRequestData,
    config?: TRequestConfig
  ): Promise<TResponse<T>> {
    return this.httpClient.post(`/${this.arke}/unit`, data, config);
  }

  /**
   * Gets the base struct
   */
  baseStruct<T = TStruct>(config?: TRequestConfig): Promise<TResponse<T>> {
    return this.httpClient.get(`/${this.arke}/struct`, config);
  }

  /**
   * Gets the struct
   */
  struct<T = TStruct>(id: string, config?: TRequestConfig): Promise<TResponse<TStruct>> {
    return this.httpClient.get(`/${id}/struct`, config);
  }

  /**
   * Get detail
   */
  get<T = TUnit>(id: string, config?: TRequestConfig): Promise<TResponse<T>> {
    return this.httpClient.get(`/${this.arke}/unit/${id}`, config);
  }

  /**
   * Edits an Arke
   */
  edit<T = TUnit>(
    id: string,
    data: TRequestData,
    config?: TRequestConfig
  ): Promise<TResponse<T>> {
    return this.httpClient.put(`/${this.arke}/unit/${id}`, data, config);
  }

  /**
   * Deletes an Arke
   */
  delete<T = TUnit>(id: string, config?: TRequestConfig): Promise<T> {
    return this.httpClient.delete(`/${this.arke}/unit/${id}`, config);
  }

  /**
   * GetAll details
   */
  getAll<T = TUnit>(config?: TRequestConfig): Promise<TResponse<T, true>> {
    return this.httpClient.get(`/${this.arke}/unit`, config);
  }
}
