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

import { ConditionalOperator, Filter, RelationalOperator } from "../index";
import {describe} from "node:test";
import {
    and,
    contains,
    endswith,
    eq,
    gt,
    gte,
    icontains,
    iendswith, inArray, isNull,
    istartswith,
    lt,
    lte, not, or,
    startswith
} from "../params/filter";

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

describe("param filters", () => {
  it('eq', () => {
    expect(eq('test', 1)).toBe('eq(test,1)')
    expect(eq('test', '1')).toBe('eq(test,1)')
    expect(eq('test',  true)).toBe('eq(test,true)')
  })

    it('contains', () => {
        expect(contains('test', 1)).toBe('contains(test,1)')
        expect(contains('test', '1')).toBe('contains(test,1)')
        expect(contains('test',  true)).toBe('contains(test,true)')
    })

    it('icontains', () => {
        expect(icontains('test', 1)).toBe('icontains(test,1)')
        expect(icontains('test', '1')).toBe('icontains(test,1)')
        expect(icontains('test',  true)).toBe('icontains(test,true)')
    })

    it('startswith', () => {
        expect(startswith('test', 1)).toBe('startswith(test,1)')
        expect(startswith('test', '1')).toBe('startswith(test,1)')
        expect(startswith('test',  true)).toBe('startswith(test,true)')
    })

    it('istartswith', () => {
        expect(istartswith('test', 1)).toBe('istartswith(test,1)')
        expect(istartswith('test', '1')).toBe('istartswith(test,1)')
        expect(istartswith('test',  true)).toBe('istartswith(test,true)')
    })

    it('endswith', () => {
        expect(endswith('test', 1)).toBe('endswith(test,1)')
        expect(endswith('test', '1')).toBe('endswith(test,1)')
        expect(endswith('test',  true)).toBe('endswith(test,true)')
    })

    it('iendswith', () => {
        expect(iendswith('test', 1)).toBe('iendswith(test,1)')
        expect(iendswith('test', '1')).toBe('iendswith(test,1)')
        expect(iendswith('test',  true)).toBe('iendswith(test,true)')
    })

    it('lte', () => {
        expect(lte('test', 1)).toBe('lte(test,1)')
        expect(lte('test', '1')).toBe('lte(test,1)')
        expect(lte('test',  true)).toBe('lte(test,true)')
    })

    it('lt', () => {
        expect(lt('test', 1)).toBe('lt(test,1)')
        expect(lt('test', '1')).toBe('lt(test,1)')
        expect(lt('test',  true)).toBe('lt(test,true)')
    })

    it('gte', () => {
        expect(gte('test', 1)).toBe('gte(test,1)')
        expect(gte('test', '1')).toBe('gte(test,1)')
        expect(gte('test',  true)).toBe('gte(test,true)')
    })

    it('gt', () => {
        expect(gt('test', 1)).toBe('gt(test,1)')
        expect(gt('test', '1')).toBe('gt(test,1)')
        expect(gt('test',  true)).toBe('gt(test,true)')
    })

    it('inArray', () => {
        expect(inArray('test', 1)).toBe('in(test,1)')
        expect(inArray('test', '1')).toBe('in(test,1)')
        expect(inArray('test',  true)).toBe('in(test,true)')
    })

    it('isNull', () => {
        expect(isNull('test')).toBe('isnull(test)')
        expect(isNull('test')).toBe('isnull(test)')
        expect(isNull('test')).toBe('isnull(test)')
    })

    it('not', () => {
        expect(not('test')).toBe('not(test)')
        expect(not('test')).toBe('not(test)')
        expect(not('test')).toBe('not(test)')
    })

    it('and', () => {
        expect(and(eq('test', 1), eq('test', 1))).toBe('and(eq(test,1),eq(test,1))')
    })

    it('or', () => {
        expect(or(eq('test', 1), eq('test', 1))).toBe('or(eq(test,1),eq(test,1))')
    })
})
