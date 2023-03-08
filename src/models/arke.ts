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

import Base from "./base";
import { TApiInstance, TResponse, TTopology } from "../types";

export default class Arke extends Base {
  protected declare api: TApiInstance;
  /**
   * @param params
   */
  constructor({ api }: { api: TApiInstance; arke: string }) {
    super({ api, arke: "arke" });
  }

  /**
   * Associate a Parameter
   */
  addParameter(
    arkeId: string,
    parameterType: string,
    parameterId: string
  ): Promise<TResponse<TTopology>> {
    return this.topology.addLink({ arkeId: "arke", id: arkeId }, "parameter", {
      arkeId: parameterType,
      id: parameterId,
    });
  }

  /**
   * Removes an associated Parameter
   */
  removeParameter(
    arkeId: string,
    parameterType: string,
    parameterId: string
  ): Promise<TResponse> {
    return this.topology.deleteLink(
      { arkeId: "arke", id: arkeId },
      "parameter",
      {
        arkeId: parameterType,
        id: parameterId,
      }
    );
  }
}
