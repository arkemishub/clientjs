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

import AuthApi from "./authApi";
import { UserTypes } from "../../types";

const USERNAME = "developer";
const PASSWORD = "pass";
const BASE_USER = {
  username: USERNAME,
  password: PASSWORD,
  type: UserTypes.SA,
};
const TOKEN = "arke_token";

const mockPost = jest.fn();
jest.mock("../../network/api/lib/clientFactory", () =>
  jest.fn().mockImplementation(() => ({
    post: mockPost,
  }))
);
const authApi = new AuthApi("http://localhost:4000");

describe("AuthApi", () => {
  it("should call signIn properly", async () => {
    await authApi.signIn(USERNAME, PASSWORD);

    expect(mockPost).toHaveBeenCalledWith("/signin", {
      username: USERNAME,
      password: PASSWORD,
    });
  });

  it("should call signUp properly", async () => {
    await authApi.signUp(BASE_USER);

    expect(mockPost).toHaveBeenCalledWith("/signup", BASE_USER);
  });

  it("should call verifyToken properly", async () => {
    await authApi.verifyToken(TOKEN);

    expect(mockPost).toHaveBeenCalledWith(
      "/verify",
      {},
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
  });

  it("should call refreshToken properly", async () => {
    await authApi.refreshToken(TOKEN);

    expect(mockPost).toHaveBeenCalledWith(
      "/refresh",
      {},
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
  });
});
