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

import Client from "../client/client";
import Arke from "../models/arke";
import mockAxios from "axios";
import { HTTPStatusCode } from "../network/api/lib/HTTPStatusCode";
import { LinkDirection, TUnit } from "../types";

const client = new Client({
  serverUrl: "http://localhost:4000",
  project: "test_project",
});

const ARKE_ID = "person";
const ARKE_ID_2 = "dog";
const UNIT_ID = "97c0744a-3198-4473-8905-10ba64d6eb49";
const UNIT_ID_2 = "97c0744a-3198-4473-8905-aoijdasodjsa33";
const GROUP_ID = "mygroup";
const PARAMETER_TYPE = "string";
const PARAMETER_ID = "name";

const sampleUnitData = { name: "Luke", surname: "Skywalker" };
const sampleArkeData = { id: "Jedi" };

interface TUnitExtended extends TUnit {
  additionalParameter: string;
}
describe("Client", () => {
  it("should create client properly", async () => {
    expect(client.auth).toBeDefined();
    expect(client.arke).toBeDefined();
    expect(client.api).toBeDefined();
  });

  it("should return Arke instance when arke function is called", () => {
    const arke = client.arke;
    expect(arke).toBeInstanceOf(Arke);
  });

  it("should call getAllArke properly", async () => {
    jest.spyOn(mockAxios, "get").mockResolvedValue({
      status: HTTPStatusCode.Success,
      data: { content: { items: [sampleArkeData, sampleArkeData] } },
    });

    await client.arke.getAll();
    expect(mockAxios.get).toHaveBeenCalledWith(`/arke/unit`, undefined);
  });

  it("should call createArke properly", async () => {
    jest.spyOn(mockAxios, "post").mockResolvedValue({
      status: HTTPStatusCode.Success,
      data: { content: sampleArkeData },
    });

    await client.arke.create(sampleArkeData);
    expect(mockAxios.post).toHaveBeenCalledWith(
      `/arke/unit`,
      sampleArkeData,
      undefined
    );
  });

  it("should call get arke properly", async () => {
    jest.spyOn(mockAxios, "get").mockResolvedValue({
      status: HTTPStatusCode.OK,
      data: sampleArkeData,
    });

    await client.arke.get(ARKE_ID);
    expect(mockAxios.get).toHaveBeenCalledWith(
      `/arke/unit/${ARKE_ID}`,
      undefined
    );
  });

  it("should call edit arke properly", async () => {
    jest.spyOn(mockAxios, "put").mockResolvedValue({
      status: HTTPStatusCode.OK,
      data: { content: sampleArkeData },
    });

    await client.arke.edit(ARKE_ID, sampleArkeData);
    expect(mockAxios.put).toHaveBeenCalledWith(
      `/arke/unit/${ARKE_ID}`,
      sampleArkeData,
      undefined
    );
  });

  it("should call delete arke properly", async () => {
    jest.spyOn(mockAxios, "delete").mockResolvedValue({
      status: HTTPStatusCode.NoContent,
    });

    await client.arke.delete(ARKE_ID);
    expect(mockAxios.delete).toHaveBeenCalledWith(
      `/arke/unit/${ARKE_ID}`,
      undefined
    );
  });

  it("should call getAllUnits properly", async () => {
    jest.spyOn(mockAxios, "get").mockResolvedValue({
      status: HTTPStatusCode.Success,
      data: { content: { items: [sampleUnitData, sampleUnitData] } },
    });

    await client.unit.getAll(ARKE_ID);
    expect(mockAxios.get).toHaveBeenCalledWith(`/${ARKE_ID}/unit`, undefined);
  });

  it("should call GET with dynamic types without types check problems", async () => {
    jest.spyOn(mockAxios, "get").mockResolvedValue({
      status: HTTPStatusCode.Success,
      data: { content: { items: [sampleUnitData, sampleUnitData] } },
    });

    await client.unit.get<TUnitExtended>(ARKE_ID, UNIT_ID);
    await client.unit.getAll<TUnitExtended>(ARKE_ID);
  });

  it("should arke addParameter properly", async () => {
    jest.spyOn(mockAxios, "post").mockResolvedValue({
      status: HTTPStatusCode.OK,
      data: {},
    });

    await client.arke.addParameter(ARKE_ID, PARAMETER_TYPE, PARAMETER_ID);
    expect(mockAxios.post).toHaveBeenCalledWith(
      `/arke/unit/${ARKE_ID}/link/parameter/${PARAMETER_TYPE}/unit/${PARAMETER_ID}`,
      undefined
    );
  });

  it("should arke removeParameter properly", async () => {
    jest.spyOn(mockAxios, "delete").mockResolvedValue({
      status: HTTPStatusCode.NoContent,
      data: {},
    });

    await client.arke.removeParameter(ARKE_ID, PARAMETER_TYPE, PARAMETER_ID);
    expect(mockAxios.delete).toHaveBeenCalledWith(
      `/arke/unit/${ARKE_ID}/link/parameter/${PARAMETER_TYPE}/unit/${PARAMETER_ID}`,
      undefined
    );
  });

  it("should call createUnit properly", async () => {
    jest.spyOn(mockAxios, "post").mockResolvedValue({
      status: HTTPStatusCode.Success,
      data: { content: sampleUnitData },
    });

    await client.unit.create(ARKE_ID, sampleUnitData);
    expect(mockAxios.post).toHaveBeenCalledWith(
      `/${ARKE_ID}/unit`,
      sampleUnitData,
      undefined
    );
  });

  it("should call edit unit properly", async () => {
    jest.spyOn(mockAxios, "put").mockResolvedValue({
      status: HTTPStatusCode.OK,
      data: { content: sampleUnitData },
    });

    await client.unit.edit(ARKE_ID, UNIT_ID, sampleUnitData);
    expect(mockAxios.put).toHaveBeenCalledWith(
      `/${ARKE_ID}/unit/${UNIT_ID}`,
      sampleUnitData,
      undefined
    );
  });

  it("should call delete unit properly", async () => {
    jest.spyOn(mockAxios, "delete").mockResolvedValue({
      status: HTTPStatusCode.NoContent,
    });

    await client.unit.delete(ARKE_ID, UNIT_ID);
    expect(mockAxios.delete).toHaveBeenCalledWith(
      `/${ARKE_ID}/unit/${UNIT_ID}`,
      undefined
    );
  });

  it("should call get unit properly", async () => {
    jest.spyOn(mockAxios, "get").mockResolvedValue({
      status: HTTPStatusCode.OK,
      data: sampleUnitData,
    });

    await client.unit.get(ARKE_ID, UNIT_ID);
    expect(mockAxios.get).toHaveBeenCalledWith(
      `/${ARKE_ID}/unit/${UNIT_ID}`,
      undefined
    );
  });

  it("should call Arke struct properly", async () => {
    jest.spyOn(mockAxios, "get").mockResolvedValue({
      status: HTTPStatusCode.OK,
      data: {},
    });

    await client.arke.baseStruct();
    expect(mockAxios.get).toHaveBeenCalledWith(`/arke/struct`, undefined);
  });

  it("should call Unit struct properly", async () => {
    jest.spyOn(mockAxios, "get").mockResolvedValue({
      status: HTTPStatusCode.OK,
      data: {},
    });

    await client.unit.struct(ARKE_ID, UNIT_ID);
    expect(mockAxios.get).toHaveBeenCalledWith(
      `/${ARKE_ID}/unit/${UNIT_ID}/struct`,
      undefined
    );
  });

  it("should call group getGroupStruct properly", async () => {
    jest.spyOn(mockAxios, "get").mockResolvedValue({
      status: HTTPStatusCode.OK,
      data: {},
    });

    await client.group.struct(GROUP_ID);
    expect(mockAxios.get).toHaveBeenCalledWith(
      `/group/${GROUP_ID}/struct`,
      undefined
    );
  });

  it("should call group getAllArke properly", async () => {
    jest.spyOn(mockAxios, "get").mockResolvedValue({
      status: HTTPStatusCode.OK,
      data: {},
    });

    await client.group.getAllArke(GROUP_ID);
    expect(mockAxios.get).toHaveBeenCalledWith(
      `/group/${GROUP_ID}/arke`,
      undefined
    );
  });

  it("should call group getAllUnits properly", async () => {
    jest.spyOn(mockAxios, "get").mockResolvedValue({
      status: HTTPStatusCode.OK,
      data: {},
    });

    await client.group.getAllUnits(GROUP_ID);
    expect(mockAxios.get).toHaveBeenCalledWith(
      `/group/${GROUP_ID}/unit`,
      undefined
    );
  });

  it("should call group getUnit properly", async () => {
    jest.spyOn(mockAxios, "get").mockResolvedValue({
      status: HTTPStatusCode.OK,
      data: {},
    });

    await client.group.getUnit(GROUP_ID, UNIT_ID);
    expect(mockAxios.get).toHaveBeenCalledWith(
      `/group/${GROUP_ID}/unit/${UNIT_ID}`,
      undefined
    );
  });

  it("should group addArke properly", async () => {
    jest.spyOn(mockAxios, "post").mockResolvedValue({
      status: HTTPStatusCode.OK,
      data: {},
    });

    await client.group.addArke(GROUP_ID, ARKE_ID);
    expect(mockAxios.post).toHaveBeenCalledWith(
      `/group/unit/${GROUP_ID}/link/group/arke/unit/${ARKE_ID}`,
      undefined
    );
  });

  it("should group removeArke properly", async () => {
    jest.spyOn(mockAxios, "delete").mockResolvedValue({
      status: HTTPStatusCode.NoContent,
      data: {},
    });

    await client.group.removeArke(GROUP_ID, ARKE_ID);
    expect(mockAxios.delete).toHaveBeenCalledWith(
      `/group/unit/${GROUP_ID}/link/group/arke/unit/${ARKE_ID}`,
      undefined
    );
  });

  it("should call topology getLinks properly", async () => {
    jest.spyOn(mockAxios, "get").mockResolvedValue({
      status: HTTPStatusCode.OK,
      data: {},
    });

    await client.arke.topology.getLinks(
      { arkeId: ARKE_ID, id: UNIT_ID },
      LinkDirection.Child
    );
    expect(mockAxios.get).toHaveBeenCalledWith(
      `/${ARKE_ID}/unit/${UNIT_ID}/link/child`,
      undefined
    );
  });

  it("should call topology addLink properly", async () => {
    jest.spyOn(mockAxios, "post").mockResolvedValue({
      status: HTTPStatusCode.OK,
      data: {},
    });

    await client.arke.topology.addLink(
      { arkeId: ARKE_ID, id: UNIT_ID },
      "owner",
      { arkeId: ARKE_ID_2, id: UNIT_ID_2 }
    );
    expect(mockAxios.post).toHaveBeenCalledWith(
      `/${ARKE_ID}/unit/${UNIT_ID}/link/owner/${ARKE_ID_2}/unit/${UNIT_ID_2}`,
      undefined
    );
  });

  it("should call topology deleteLink properly", async () => {
    jest.spyOn(mockAxios, "delete").mockResolvedValue({
      status: HTTPStatusCode.NoContent,
      data: {},
    });

    await client.arke.topology.deleteLink(
      { arkeId: ARKE_ID, id: UNIT_ID },
      "owner",
      { arkeId: ARKE_ID_2, id: UNIT_ID_2 }
    );
    expect(mockAxios.delete).toHaveBeenCalledWith(
      `/${ARKE_ID}/unit/${UNIT_ID}/link/owner/${ARKE_ID_2}/unit/${UNIT_ID_2}`,
      undefined
    );
  });
});
