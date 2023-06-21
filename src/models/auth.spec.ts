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

import { HTTPStatusCode } from "../network/api/lib/HTTPStatusCode";
import { UserTypes } from "../types";
import Client from "../client/client";
import mockAxios from "axios";

const validResponse = {
  status: HTTPStatusCode.OK,
};

const USERNAME = "developer";
const PASSWORD = "pass";
const TOKEN = "arke_token";
const SERVER_URL = "http://localhost:4000";

const validResponseWithData = {
  ...validResponse,
  data: {
    username: USERNAME,
    access_token: TOKEN,
    refresh_token: TOKEN,
  },
};

const mockSetSession = jest.fn();

const client = new Client({
  serverUrl: "http://localhost:4000",
  project: "test_project",
  setSession: mockSetSession,
});

describe("Auth", () => {
  it("should call signIn properly with valid response", async () => {
    jest.spyOn(mockAxios, "post").mockResolvedValue(validResponseWithData);
    const res = await client.auth.signIn({
      username: USERNAME,
      password: PASSWORD,
    });

    expect(mockSetSession).toHaveBeenCalledWith({
      access_token: TOKEN,
      refresh_token: TOKEN,
      username: USERNAME,
    });
    expect(res.status).toEqual(HTTPStatusCode.OK);
    expect(res.data.access_token).toEqual(TOKEN);
  });

  it("should call signIn properly with not valid response", async () => {
    jest
      .spyOn(mockAxios, "post")
      .mockRejectedValue({ status: HTTPStatusCode.Unauthorized });
    const res = await client.auth
      .signIn({
        username: USERNAME,
        password: PASSWORD,
      })
      .catch((err) => err);
    expect(res).toEqual({ status: HTTPStatusCode.Unauthorized });
  });

  it("should call signUp properly with valid response", async () => {
    jest.spyOn(mockAxios, "post").mockResolvedValue(validResponseWithData);
    const res = await client.auth.signUp({
      username: USERNAME,
      password: PASSWORD,
      type: UserTypes.SA,
    });
    expect(res.status).toEqual(HTTPStatusCode.OK);
  });

  it("should call signUp properly with not valid response", async () => {
    jest.spyOn(mockAxios, "post").mockRejectedValue({
      status: HTTPStatusCode.InternalServerError,
    });
    const res = await client.auth
      .signUp({
        username: USERNAME,
        password: PASSWORD,
        type: UserTypes.SA,
      })
      .catch((err) => err);
    expect(res).toEqual({ status: HTTPStatusCode.InternalServerError });
  });

  it("should call verifyToken properly with valid response", async () => {
    jest.spyOn(mockAxios, "post").mockResolvedValue(validResponse);
    const res = await client.auth.verifyToken(TOKEN);
    expect(res?.status).toEqual(HTTPStatusCode.OK);
  });

  it("should call verifyToken properly with not valid response", async () => {
    jest.spyOn(mockAxios, "post").mockRejectedValue({
      status: HTTPStatusCode.Unauthorized,
    });
    const res = await client.auth.verifyToken(TOKEN).catch((err) => err);
    expect(res.status).toEqual(HTTPStatusCode.Unauthorized);
  });

  it("should call refreshToken properly with valid response", async () => {
    jest.spyOn(mockAxios, "post").mockResolvedValue({
      ...validResponse,
      data: { access_token: TOKEN, refresh_token: `r_${TOKEN}` },
    });
    const res = await client.auth.refreshToken(TOKEN);
    expect(res.status).toEqual(HTTPStatusCode.OK);
    expect(res.data.access_token).toEqual(TOKEN);
    expect(res.data.refresh_token).toEqual(`r_${TOKEN}`);
  });

  it("should call refreshToken properly with not valid response", async () => {
    jest
      .spyOn(mockAxios, "post")
      .mockRejectedValue({ status: HTTPStatusCode.BadRequest });
    const res = await client.auth.refreshToken(TOKEN).catch((err) => err);
    expect(res.status).toEqual(HTTPStatusCode.BadRequest);
  });
});
