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

enum BaseParameter {
  Bool = "boolean",
  Date = "date",
  Datetime = "datetime",
  Float = "float",
  Json = "dict",
  Integer = "integer",
  String = "string",
  Time = "time",
  Link = "link",
}

type TValues<T> = {
  values?: Array<{
    label: string;
    value: T;
  }>;
};

type TBaseParameter<
  Type extends
    | string
    | boolean
    | number
    | Record<string, unknown>
    | unknown = unknown,
> = {
  label: string;
  id: string;
  required?: boolean;
  helper_text?: string;
  type?: BaseParameter;
  value?: unknown;
} & TValues<unknown> &
  Type extends string
  ? TString
  : Type extends boolean
    ? TBool
    : Type extends number
      ? TNumber
      : Type extends Record<string, unknown>
        ? TJson
        : Record<string, unknown>;

type TString = {
  max_length?: number;
  min_length?: number;
  default?: string;
  type: BaseParameter.String;
  value?: string;
} & TValues<string>;

type TNumber = {
  max?: number;
  min?: number;
  default?: number;
  type: BaseParameter.Integer | BaseParameter.Float;
  value?: number;
} & TValues<number>;

type TBool = {
  default?: boolean;
  type: BaseParameter.Bool;
  value?: boolean;
} & TValues<boolean>;

type TJson = {
  default?: Record<string, unknown>;
  type: BaseParameter.Json;
  value?: Record<string, unknown>;
} & TValues<Record<string, unknown>>;

export { BaseParameter };
export type { TBaseParameter };
