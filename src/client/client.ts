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

import { TClientOptions, TToken } from "../types";
import { AxiosInstance } from "axios";
import Auth from "../auth/auth";
import Arke from "../models/arke";
import clientFactory from "../network/api/lib/clientFactory";
import Unit from "../models/unit";
import Group from "../models/group";

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
  constructor({ serverUrl, project, setSession, getSession }: TClientOptions) {
    if (!serverUrl) throw "serverUrl is required.";
    this.serverUrl = serverUrl;
    this.auth = new Auth({
      serverUrl: this.serverUrl,
      setSession,
    });
    this.project = project;
    this.api = clientFactory(serverUrl);
    this.api.interceptors.request.use(
      async (config) => {
        if (getSession && config.headers) {
          let session = await getSession();

          if (typeof session === "string") {
            session = JSON.parse(session) as TToken;
          }

          if (session) {
            config.headers.Authorization = `Bearer ${session?.access_token}`;
          } else {
            console.error("Session not found");
          }
        }
        if (project && config.headers && !config.headers["Arke-Project-Key"])
          config.headers["Arke-Project-Key"] = project;
        return config;
      },
      (error) => Promise.reject(error)
    );

    this.unit = new Unit({
      api: this.api,
    });

    this.arke = new Arke({
      api: this.api,
      arke: "arke",
    });

    this.group = new Group({
      api: this.api,
    });
  }
}
