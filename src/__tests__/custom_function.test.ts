import { Client, HTTPStatusCode, THttpClientInstance } from "../index";
import mockAxios from "axios";

const client = new Client({
  serverUrl: "http://localhost:4000",
  project: "test_project",
});

const ARKE_ID = "ARKE_ID";
const FUNCTION_NAME = "FUNCTION_NAME";
const DATA = { key: "value" };
const CONFIG = { headers: { Authorization: "Bearer token" } };

describe("Client Custom Functions", () => {
  it("should call get function", async () => {
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

  it("should call post function", async () => {
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

  it("should call put function", async () => {
    jest.spyOn(mockAxios, "put").mockResolvedValue({
      status: HTTPStatusCode.Success,
      data: { content: null },
    });

    await client.arke.fn.put(ARKE_ID, FUNCTION_NAME, DATA, CONFIG);

    expect(mockAxios.put).toHaveBeenCalledWith(
      `/${ARKE_ID}/function/${FUNCTION_NAME}`,
      DATA,
      CONFIG
    );
  });
});
