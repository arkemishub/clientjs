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

import Axios, { AxiosInstance } from "axios";
import { TToken } from "../../../types";
import { THttpClientOptions } from "../../../types/httpClient";

class HttpClient {
  instance: AxiosInstance;
  baseURL: string;

  constructor({
    baseUrl,
    prefixPath,
    project,
    getSession,
    timeout,
    headers,
    apiConfig,
  }: THttpClientOptions) {
    const baseURL = `${baseUrl}${prefixPath ?? ""}`;

    this.baseURL = baseURL;
    this.instance = Axios.create({
      baseURL,
      timeout: timeout ? timeout : 60000,
      headers,
      responseType: "json",
    });

    this.instance.interceptors.request.use(
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

    if (apiConfig) apiConfig(this.instance);
  }
}

export default HttpClient;
