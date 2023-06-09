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
}

type TBaseParameter<
  Type extends TString | TBool | TNumber | TJson | unknown = unknown
> = {
  label: string;
  id: string;
  required?: boolean;
  helper_text?: string;
  type?: BaseParameter;
} & Type;

type TString = {
  max_length?: number;
  min_length?: number;
  default?: string;
  type: BaseParameter.String;
  value?: string;
};

type TNumber = {
  max?: number;
  min?: number;
  default?: number;
  type: BaseParameter.Integer | BaseParameter.Float;
  value?: number;
};

type TBool = {
  default?: boolean;
  type: BaseParameter.Bool;
  value?: boolean;
};

type TJson = {
  default?: Record<string, unknown>;
  type: BaseParameter.Json;
  value?: Record<string, unknown>;
};

export { BaseParameter };
export type { TBaseParameter };
