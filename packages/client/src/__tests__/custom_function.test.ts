import { Client, HTTPStatusCode, THttpClientInstance } from "../index";
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
