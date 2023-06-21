// tests for HttpClient

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
