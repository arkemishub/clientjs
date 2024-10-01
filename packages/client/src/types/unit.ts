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

import { AxiosInstance } from "axios";

type TUnitOptions = {
  httpClient: AxiosInstance;
};

type UnitLinkDetail<T> = T extends true
  ? {
      link: {
        metadata: Record<string, unknown>;
        depth: number;
      };
    }
  : {};

type TUnit<WithLink extends boolean = false> = {
  active: boolean;
  arke_id?: string;
  configuration?: Record<string, unknown>;
  id: string;
  inserted_at?: string;
  label?: string;
  type?: string; // should be an enum
  updated_at?: string;
} & Record<string, unknown> &
  UnitLinkDetail<WithLink>;

export type { TUnitOptions, TUnit };
