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

import { AxiosResponse } from "axios";
import {
  THttpClientInstance,
  TRequestConfig,
  TSignInResponseData,
  TToken,
} from "../types";
import { TSignUpOptions } from "../types";

export default class Auth {
  httpClient: THttpClientInstance;
  setSession?(session: TSignInResponseData): void;

  /**
   * @param params
   */
  constructor({
    httpClient,
    setSession,
  }: {
    httpClient: THttpClientInstance;
    setSession?(session: TSignInResponseData): void;
  }) {
    this.httpClient = httpClient;
    this.setSession = setSession;
  }

  /**
   * Sign in the user
   * @param credentials
   * @param method
   * @param config
   */
  async signIn(
    { username, password }: { username: string; password: string },
    method?: "credentials",
    config?: TRequestConfig,
  ): Promise<AxiosResponse> {
    return this.httpClient
      .post(
        "/auth/signin",
        {
          username,
          password,
        },
        config,
      )
      .then((res) => {
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
   * @param data
   * @param method
   */
  async signUp(
    data: TSignUpOptions,
    method?: "credentials",
  ): Promise<AxiosResponse> {
    return this.httpClient.post("/auth/signup", data);
  }

  /**
   * Verify Token to verify if token is valid
   * @param access_token
   */
  async verifyToken(
    access_token: TToken["access_token"],
  ): Promise<AxiosResponse | undefined> {
    return this.httpClient.post(
      "/auth/verify",
      {},
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );
  }

  /**
   * Refresh Token to refresh if token is expired
   * @param access_token
   * @param refresh_token
   */
  async refreshToken(
    access_token: TToken["access_token"],
    refresh_token: TToken["refresh_token"],
  ): Promise<AxiosResponse> {
    return this.httpClient.post(
      "/auth/refresh",
      {refresh_token},
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );
  }

  /**
   * Changes username password
   * @param old_password
   * @param password
   */
  async changePassword(
    old_password: string,
    password: string,
  ): Promise<AxiosResponse> {
    return this.httpClient.post("/auth/change_password", {
      old_password,
      password,
    });
  }

  /**
   * Request recover password
   * @param email
   */
  async recoverPassword(email: string): Promise<AxiosResponse> {
    return this.httpClient.post("/auth/recover_password", {
      email,
    });
  }

  /**
   * Reset user password
   * @param new_password
   * @param token
   */
  async resetPassword(
    new_password: string,
    token: string,
  ): Promise<AxiosResponse> {
    return this.httpClient.post(`/auth/reset_password/${token}`, {
      new_password,
    });
  }
}
