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

import { Client, HTTPStatusCode } from "../index";
import mockAxios from "axios";

const client = new Client({
  serverUrl: "http://localhost:4000",
  project: "test_project",
});

const ARKE_ID = "ARKE_ID";
const UNIT_ID = "UNIT_ID";
const FUNCTION_NAME = "FUNCTION_NAME";
const DATA = { key: "value" };
const CONFIG = { headers: { Authorization: "Bearer token" } };

describe("Client Custom Functions", () => {
  it("should call arke get function", async () => {
    jest.spyOn(mockAxios, "get").mockResolvedValue({
      status: HTTPStatusCode.Success,
      data: { content: null },
    });

    await client.arke.fn.get(ARKE_ID, FUNCTION_NAME, CONFIG);

    expect(mockAxios.get).toHaveBeenCalledWith(
      `/${ARKE_ID}/function/${FUNCTION_NAME}`,
      CONFIG
    );
  });

  it("should call arke post function", async () => {
    jest.spyOn(mockAxios, "post").mockResolvedValue({
      status: HTTPStatusCode.Success,
      data: { content: null },
    });

    await client.arke.fn.post(ARKE_ID, FUNCTION_NAME, DATA, CONFIG);

    expect(mockAxios.post).toHaveBeenCalledWith(
      `/${ARKE_ID}/function/${FUNCTION_NAME}`,
      DATA,
      CONFIG
    );
  });

  it("should call unit get function", async () => {
    jest.spyOn(mockAxios, "get").mockResolvedValue({
      status: HTTPStatusCode.Success,
      data: { content: null },
    });

    await client.unit.fn.get(ARKE_ID, UNIT_ID, FUNCTION_NAME, CONFIG);

    expect(mockAxios.get).toHaveBeenCalledWith(
      `/${ARKE_ID}/unit/${UNIT_ID}/function/${FUNCTION_NAME}`,
      CONFIG
    );
  });

  it("should call unit post function", async () => {
    jest.spyOn(mockAxios, "post").mockResolvedValue({
      status: HTTPStatusCode.Success,
      data: { content: null },
    });

    await client.unit.fn.post(ARKE_ID, UNIT_ID, FUNCTION_NAME, DATA, CONFIG);

    expect(mockAxios.post).toHaveBeenCalledWith(
      `/${ARKE_ID}/unit/${UNIT_ID}/function/${FUNCTION_NAME}`,
      DATA,
      CONFIG
    );
  });
});
