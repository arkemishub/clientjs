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

import { AxiosInstance, AxiosResponse } from "axios";
import clientFactory from "./lib/clientFactory";
import {
  TRefreshResponseData,
  TSignInResponseData,
  TSignUpOptions,
  TSignUpResponseData,
} from "../../types";

class AuthApi {
  api: AxiosInstance;
  protected apiPath = "/auth";

  constructor(baseUrl: string) {
    this.api = clientFactory(baseUrl, this.apiPath);
  }

  /**
   * Sign in the user
   * @param username
   * @param password
   */
  async signIn(
    username: string,
    password: string
  ): Promise<AxiosResponse<TSignInResponseData>> {
    return this.api.post("/signin", {
      username,
      password,
    });
  }

  /**
   * Sign up a new user
   * @param data : TSignUpOptions
   */
  async signUp(
    data: TSignUpOptions
  ): Promise<AxiosResponse<TSignUpResponseData>> {
    return this.api.post("/signup", data);
  }

  /**
   * Verify if token is still valid
   */
  async verifyToken(access_token: string): Promise<AxiosResponse> {
    return this.api.post(
      "/verify",
      {},
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      }
    );
  }

  /**
   * Refresh the token if is not expired
   */
  async refreshToken(
    refresh_token: string
  ): Promise<AxiosResponse<TRefreshResponseData>> {
    return this.api.post(
      "/refresh",
      {},
      {
        headers: {
          Authorization: `Bearer ${refresh_token}`,
        },
      }
    );
  }
}

export default AuthApi;
