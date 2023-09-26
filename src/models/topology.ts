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
  LinkDirection,
  THttpClientInstance,
  TRequestConfig,
  TResponse,
  TTopology,
  TUnit,
  TUnitOptions,
} from "../types";

type Parent = { groupId?: string; arkeId?: string; id: string };
export default class Topology {
  protected httpClient: THttpClientInstance;

  /**
   * @param params
   */
  constructor({ httpClient }: TUnitOptions) {
    this.httpClient = httpClient;
  }

  private getParent(parent: Parent) {
    return parent.groupId ?? parent.arkeId;
  }
  private getChild(child: Parent) {
    return child.groupId ?? child.arkeId;
  }

  /**
   * Get all links related to a Unit by direction
   */
  getLinks(
    parent: Parent,
    direction?: LinkDirection,
    config?: TRequestConfig
  ): Promise<TResponse<TUnit, true>> {
    return this.httpClient.get(
      `/${this.getParent(parent)}/unit/${parent.id}/link/${direction}`,
      config
    );
  }

  /**
   * Creates a new link between 2 entities
   */
  addLink(
    parent: { groupId?: string; arkeId?: string; id: string },
    linkId: string,
    child: { groupId?: string; arkeId?: string; id: string },
    config?: TRequestConfig
  ): Promise<TResponse<TTopology>> {
    return this.httpClient.post(
      `/${this.getParent(parent)}/unit/${
        parent.id
      }/link/${linkId}/${this.getChild(child)}/unit/${child.id}`,
      config
    );
  }

  /**
   * Creates a new link between 2 entities
   */
  deleteLink(
    parent: { groupId?: string; arkeId?: string; id: string },
    linkId: string,
    child: { groupId?: string; arkeId?: string; id: string },
    config?: TRequestConfig
  ): Promise<TResponse> {
    return this.httpClient.delete(
      `/${this.getParent(parent)}/unit/${
        parent.id
      }/link/${linkId}/${this.getChild(child)}/unit/${child.id}`,
      config
    );
  }
}
