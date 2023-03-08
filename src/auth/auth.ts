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

import AuthApi from "../network/api/authApi";
import { AxiosResponse } from "axios";
import { TSignInResponseData, TToken } from "../types";
import { TSignUpOptions } from "../types";

export default class Auth {
  authApi;
  setSession?(session: TSignInResponseData): void;

  /**
   * @param params
   */
  constructor({
    serverUrl,
    setSession,
  }: {
    serverUrl: string;
    setSession?(session: TSignInResponseData): void;
  }) {
    this.authApi = new AuthApi(serverUrl);
    this.setSession = setSession;
  }

  /**
   * Sign in the user
   * @param credentials
   * @param method
   */
  async signIn(
    { username, password }: { username: string; password: string },
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    method?: "credentials"
  ): Promise<AxiosResponse> {
    return this.authApi.signIn(username, password).then((res) => {
      try {
        const session = res.data;
        this.setSession?.(session);
        return res;
      } catch (e) {
        return res;
      }
    });
  }

  /**
   * Sign up a new user
   */
  async signUp(
    data: TSignUpOptions,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    method?: "credentials"
  ): Promise<AxiosResponse> {
    return this.authApi.signUp(data);
  }

  /**
   * Verify Token to verify if token is valid
   */
  async verifyToken(
    access_token: TToken["access_token"]
  ): Promise<AxiosResponse | undefined> {
    return this.authApi.verifyToken(access_token).then((verifyResponse) => {
      return verifyResponse;
    });
  }

  /**
   * Refresh Token to refresh if token is expired
   */
  async refreshToken(
    refresh_token: TToken["refresh_token"]
  ): Promise<AxiosResponse> {
    return this.authApi.refreshToken(refresh_token).then((refreshResponse) => {
      return refreshResponse;
    });
  }
}
