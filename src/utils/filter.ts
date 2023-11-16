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

import {
  ConditionalOperator,
  RelationalOperator,
  TConditionalFilter,
  TFilterParams,
  TRelationalFilter,
} from "../types";

function areConditionalParams(
  params: TConditionalFilter | TRelationalFilter
): params is TConditionalFilter {
  return (params as TConditionalFilter).filters !== undefined;
}

function areRelationalParams(
  params: TConditionalFilter | TRelationalFilter
): params is TRelationalFilter {
  return (params as TRelationalFilter).key !== undefined;
}

export default class Filter<
  T extends ConditionalOperator | RelationalOperator
> {
  operator: T | undefined;
  filters?: Filter<ConditionalOperator | RelationalOperator>[];
  key?: string;
  value: unknown;

  constructor(params: TFilterParams<T>) {
    if (areConditionalParams(params)) {
      this.operator = params.operator as T;
      this.filters = params.filters;
    }
    if (areRelationalParams(params)) {
      this.operator = params.operator as T;
      this.key = params.key;
      this.value = params.value;
    }
  }

  toString(): string {
    if (this.filters) {
      if (this.filters.length > 0)
        return `${this.operator}(${this.filters.map((f) => f.toString())})`;
      else return "";
    }
    if (this.operator === RelationalOperator.ISNULL) {
      return `${this.operator}(${this.key})`;
    } else {
      return `${this.operator}(${this.key},${this.value})`;
    }
  }

  getLength(): number {
    return this.filters ? this.filters.length : 0;
  }
}
