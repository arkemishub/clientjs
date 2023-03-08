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
  TApiInstance,
  TRequestConfig,
  TResponse,
  TStruct,
  TUnit,
} from "../types";
import Topology from "./topology";

export default class Base {
  protected api: TApiInstance;
  protected arke: string;
  topology: Topology;
  /**
   * @param params
   */
  constructor({ api, arke }: { api: TApiInstance; arke: string }) {
    this.api = api;
    this.arke = arke;
    this.topology = new Topology({ api });
  }

  /**
   * Creates
   */
  create(
    data: Record<string, unknown>,
    config?: TRequestConfig
  ): Promise<TResponse<TUnit>> {
    return this.api.post(`/${this.arke}/unit`, data, config);
  }

  /**
   * Gets the base struct
   */
  baseStruct(config?: TRequestConfig): Promise<TResponse<TStruct>> {
    return this.api.get(`/${this.arke}/struct`, config);
  }

  /**
   * Gets the struct
   */
  struct(id: string, config?: TRequestConfig): Promise<TResponse<TStruct>> {
    return this.api.get(`/${id}/struct`, config);
  }

  /**
   * Get detail
   */
  get(id: string, config?: TRequestConfig): Promise<TResponse<TUnit>> {
    return this.api.get(`/${this.arke}/unit/${id}`, config);
  }

  /**
   * Edits an Arke
   */
  edit(
    id: string,
    data: Record<string, unknown>,
    config?: TRequestConfig
  ): Promise<TResponse<TUnit>> {
    return this.api.put(`/${this.arke}/unit/${id}`, data, config);
  }

  /**
   * Deletes an Arke
   */
  delete(id: string, config?: TRequestConfig): Promise<TResponse> {
    return this.api.delete(`/${this.arke}/unit/${id}`, config);
  }

  /**
   * GetAll details
   */
  getAll(config?: TRequestConfig): Promise<TResponse<TUnit, true>> {
    return this.api.get(`/${this.arke}/unit`, config);
  }
}
