/*
 * Copyright 2023-2024 Arkemis S.r.l.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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

import { TClientOptions } from "../types";
import { AxiosInstance } from "axios";
import Auth from "../models/auth";
import Arke from "../models/arke";
import Unit from "../models/unit";
import Group from "../models/group";
import HttpClient from "../network/api/lib/HttpClient";

/**
 Client for interacting with backend
 */

export default class Client {
  serverUrl: string;
  api: AxiosInstance;
  auth: Auth;
  arke: Arke;
  unit: Unit;
  group: Group;
  project?: string;

  /**
   * @param params
   */
  constructor({
    serverUrl,
    project,
    setSession,
    getSession,
    prefixPath = "/lib",
    httpClientConfig,
  }: TClientOptions) {
    if (!serverUrl) throw "serverUrl is required.";
    const arkeHttpClient = new HttpClient({
      baseUrl: serverUrl,
      prefixPath,
      project,
      getSession,
      httpClientConfig,
    }).instance;

    this.serverUrl = serverUrl;
    this.project = project;

    /*
     * Arke Default Methods
     */

    this.auth = new Auth({
      httpClient: arkeHttpClient,
      setSession,
    });

    this.unit = new Unit({
      httpClient: arkeHttpClient,
    });

    this.arke = new Arke({
      httpClient: arkeHttpClient,
      arke: "arke",
    });

    this.group = new Group({
      httpClient: arkeHttpClient,
    });

    /*
     * Custom Methods
     */
    this.api = new HttpClient({
      baseUrl: serverUrl,
      project,
      getSession,
      httpClientConfig,
    }).instance;
  }
}
