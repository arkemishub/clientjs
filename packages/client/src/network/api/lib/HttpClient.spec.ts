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

import HttpClient from "./HttpClient";

describe("HttpClient", () => {
  it("should create an instance of HttpClient", () => {
    const httpClient = new HttpClient({
      baseUrl: "http://localhost:4000",
      project: "test",
    });
    expect(httpClient).toBeInstanceOf(HttpClient);
    expect(httpClient.baseURL).toEqual("http://localhost:4000");
  });

  it("should create an instance of HttpClient with prefixPath", () => {
    const httpClient = new HttpClient({
      baseUrl: "http://localhost:4000",
      project: "test",
      prefixPath: "/lib",
    });
    expect(httpClient).toBeInstanceOf(HttpClient);
    expect(httpClient.baseURL).toEqual("http://localhost:4000/lib");
  });
});
