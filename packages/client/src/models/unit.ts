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
  TUnitOptions,
} from "../types";
import Topology from "./topology";
import { CustomUnitFunction } from "./custom_function";

export default class Unit {
  protected httpClient: THttpClientInstance;
  topology: Topology;
  fn: CustomUnitFunction;

  /**
   * @param params
   */
  constructor({ httpClient }: TUnitOptions) {
    this.httpClient = httpClient;
    this.topology = new Topology({ httpClient });
    this.fn = new CustomUnitFunction({ httpClient });
  }

  /**
   * Creates a Unit
   */
  create(
    arkeId: string,
    data: TRequestData,
    config?: TRequestConfig
  ): Promise<TResponse<TUnit>> {
    return this.httpClient.post(`/${arkeId}/unit`, data, config);
  }

  /**
   * Get Unit's detail
   */
  get(
    arkeId: string,
    id: string,
    config?: TRequestConfig
  ): Promise<TResponse<TUnit>> {
    return this.httpClient.get(`/${arkeId}/unit/${id}`, config);
  }

  /**
   * Edits a Unit
   */

  edit(
    arkeId: string,
    id: string,
    data: TRequestData,
    config?: TRequestConfig
  ): Promise<TResponse<TUnit>> {
    return this.httpClient.put(`/${arkeId}/unit/${id}`, data, config);
  }

  /**
   * Deletes a Unit
   */
  delete(
    arkeId: string,
    id: string,
    config?: TRequestConfig
  ): Promise<TResponse> {
    return this.httpClient.delete(`/${arkeId}/unit/${id}`, config);
  }

  /**
   * Gets the Struct
   */
  struct(
    arkeId: string,
    id: string,
    config?: TRequestConfig
  ): Promise<TResponse<TStruct>> {
    return this.httpClient.get(`/${arkeId}/unit/${id}/struct`, config);
  }

  /**
   * GetAll details
   */
  getAll(
    arkeId: string,
    config?: TRequestConfig
  ): Promise<TResponse<TUnit, true>> {
    return this.httpClient.get(`/${arkeId}/unit`, config);
  }

  /**
   * GetAll details
   */
  search(config?: TRequestConfig): Promise<TResponse<TUnit, true>> {
    return this.httpClient.get(`/unit`, config);
  }
}
