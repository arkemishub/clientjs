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

import { TToken } from "./auth";
import { AxiosRequestHeaders } from "axios";

type THttpClientOptions = {
  baseUrl: string;
  prefixPath?: string;
  project?: string;
  getSession?: () => Promise<string | TToken | null>;
  headers?: AxiosRequestHeaders | undefined;
  timeout?: number;
};

export type { THttpClientOptions };
