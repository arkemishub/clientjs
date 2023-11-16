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

import Filter from "../utils/filter";

enum RelationalOperator {
  EQ = "eq",
  CONTAINS = "contains",
  ICONTAINS = "icontains",
  STARTSWITH = "startswith",
  ISTARTSWITH = "istartswith",
  ENDSWITH = "endswith",
  IENDSWITH = "iendswith",
  LTE = "lte",
  LT = "lt",
  GTE = "gte",
  GT = "gt",
  IN = "in",
  ISNULL = "isnull",
  NOT = "not",
}

type TRelationalOperator = RelationalOperator.EQ | RelationalOperator.CONTAINS;

enum ConditionalOperator {
  AND = "and",
  OR = "or",
}

type TConditionalOperator = ConditionalOperator.OR | ConditionalOperator.AND;

type TRelationalFilter = {
  operator: RelationalOperator;
  key: string;
  value?: unknown;
};

type TConditionalFilter = {
  operator: ConditionalOperator;
  filters: Filter<ConditionalOperator | RelationalOperator>[];
};

type TFilterParams<T> = T extends TConditionalOperator
  ? TConditionalFilter
  : T extends TRelationalOperator
  ? TRelationalFilter
  : never;

export type { TFilterParams, TRelationalFilter, TConditionalFilter };
export { ConditionalOperator, RelationalOperator };
