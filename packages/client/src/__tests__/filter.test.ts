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

import { ConditionalOperator, Filter, RelationalOperator } from "../index";

const mockRelationalFilter = new Filter({
  operator: RelationalOperator.CONTAINS,
  key: "test",
  value: 1,
});

const mockRelationalFilterGT = new Filter({
  operator: RelationalOperator.GT,
  key: "index",
  value: 3,
});

const mockConditionalFilter = new Filter({
  operator: ConditionalOperator.AND,
  filters: [mockRelationalFilter, mockRelationalFilterGT],
});

const mockConditionalEmptyFilter = new Filter({
  operator: ConditionalOperator.AND,
  filters: [],
});

const mockConditionalIsNullFilter = new Filter({
  operator: RelationalOperator.ISNULL,
  key: "value",
});

const mockConditionalIsNotFilter = new Filter({
  operator: RelationalOperator.NOT,
  value: mockConditionalIsNullFilter.toString(),
});

describe("Filter", () => {
  it("should create correct RelationalFilter instance", () => {
    expect(mockRelationalFilter.filters).toBeUndefined();
    expect(mockRelationalFilter.value).toBeDefined();
    expect(mockRelationalFilter.key).toBeDefined();
  });

  it("should create correct ConditionalFilter instance", () => {
    expect(mockConditionalFilter.filters).toBeDefined();
    expect(mockConditionalFilter.value).toBeUndefined();
    expect(mockConditionalFilter.key).toBeUndefined();
  });

  it("should RelationalFilter toString should work properly", () => {
    expect(mockRelationalFilter.toString()).toBe("contains(test,1)");
  });

  it("should RelationalFilter toString should work properly if filters is empty", () => {
    expect(mockConditionalEmptyFilter.toString()).toBe("");
  });

  it("should ConditionalFilter toString should work properly", () => {
    expect(mockConditionalFilter.toString()).toBe(
      "and(contains(test,1),gt(index,3))"
    );
  });

  it("should ConditionalFilter toString should work properly with isnull", () => {
    expect(mockConditionalIsNullFilter.toString()).toBe("isnull(value)");
  });

  it("should ConditionalFilter toString should work properly with not", () => {
    expect(mockConditionalIsNotFilter.toString()).toBe("not(isnull(value))");
  });

  it("should get length of the filters", () => {
    expect(mockConditionalFilter.getLength()).toBe(2);
    expect(mockConditionalEmptyFilter.getLength()).toBe(0);
  });
});
