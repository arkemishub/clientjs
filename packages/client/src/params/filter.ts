/*
 * Copyright 2024 Arkemis S.r.l.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

// todo: better type management
interface RelationalOperator {
  (left: string, right: string | number | boolean): string;
}

interface SpecialOperator {
  (left: string): string;
}

// logical operators
export function and(...conditions: string[]): string {
  return `and(${conditions.join(",")})`;
}
export function or(...conditions: string[]): string {
  return `or(${conditions.join(",")})`;
}

// relational operators
export const eq: RelationalOperator = (left, right) => `eq(${left},${right})`;
export const contains: RelationalOperator = (left, right) =>
  `contains(${left},${right})`;
export const icontains: RelationalOperator = (left, right) =>
  `icontains(${left},${right})`;
export const startswith: RelationalOperator = (left, right) =>
  `startswith(${left},${right})`;
export const istartswith: RelationalOperator = (left, right) =>
  `istartswith(${left},${right})`;
export const endswith: RelationalOperator = (left, right) =>
  `endswith(${left},${right})`;
export const iendswith: RelationalOperator = (left, right) =>
  `iendswith(${left},${right})`;
export const lte: RelationalOperator = (left, right) => `lte(${left},${right})`;
export const lt: RelationalOperator = (left, right) => `lt(${left},${right})`;
export const gte: RelationalOperator = (left, right) => `gte(${left},${right})`;
export const gt: RelationalOperator = (left, right) => `gt(${left},${right})`;
export const inArray: RelationalOperator = (left, right) =>
  `in(${left},${right})`;

// boolean operators
export const isNull: SpecialOperator = (left) => `isnull(${left})`;
export const not: SpecialOperator = (left) => `not(${left})`;
