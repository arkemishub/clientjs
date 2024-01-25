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
  TStruct,
  TTopology,
  TUnit,
} from "../types";
import Base from "./base";

export default class Group extends Base {
  protected declare httpClient: THttpClientInstance;
  /**
   * @param params
   */
  constructor({ httpClient }: { httpClient: THttpClientInstance }) {
    super({ httpClient, arke: "group" });
  }

  /**
   * Gets the struct of a specific group
   */
  struct(
    groupId: string,
    config?: TRequestConfig
  ): Promise<TResponse<TStruct>> {
    return super.struct(`group/${groupId}`, config);
  }

  /**
   * Get groups related Arke list
   */
  getAllArke<T = TUnit>(
    groupId: string,
    config?: TRequestConfig
  ): Promise<TResponse<T, true>> {
    return this.httpClient.get(`/group/${groupId}/arke`, config);
  }

  /**
   * Get groups related Units
   */
  getAllUnits<T = TUnit>(
    groupId: string,
    config?: TRequestConfig
  ): Promise<TResponse<T, true>> {
    return this.httpClient.get(`/group/${groupId}/unit`, config);
  }

  /**
   * Get groups related Units
   */
  getUnit<T = TUnit>(
    groupId: string,
    unitId: string,
    config?: TRequestConfig
  ): Promise<TResponse<T>> {
    return this.httpClient.get(`/group/${groupId}/unit/${unitId}`, config);
  }

  /**
   * Associate an Arke
   */
  addArke(groupId: string, arkeId: string): Promise<TResponse<TTopology>> {
    return this.topology.addLink({ arkeId: "group", id: groupId }, "group", {
      arkeId: "arke",
      id: arkeId,
    });
  }

  /**
   * Removes an associated Arke
   */
  removeArke(groupId: string, arkeId: string): Promise<TResponse> {
    return this.topology.deleteLink({ arkeId: "group", id: groupId }, "group", {
      arkeId: "arke",
      id: arkeId,
    });
  }
}
