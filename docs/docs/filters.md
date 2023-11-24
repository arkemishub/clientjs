---
sidebar_position: 9
title: Filters
---

For each `GET` methods on Arke, Units, Parameters etc. are available dedicated parameters
to filter the response through the logic operation

```js
client.arke
    .getAll({ params: {
        filter: `eq(arke_id,invoice)`,
    }})
    .then((res) => {
        // Get units where arke_id is invoice
    })
```

:::success
You can create more complex filters composing the filter in the following way:
```
filter: `or(contains(id,1),contains(label,test))`,
```
:::

To simplify the Filter creation @arke/client provides some useful functions.

With `new Filter()` you can create a new filter using the `RelationalOperator` enum:

```ts
import {RelationalOperator} from "./filter";

const idFilter = new Filter({
    operator: RelationalOperator.EQ,
    key: "id",
    value: "1",
});
```

Below the list of available Relational Operator

| **Method**  | ** String Key ** | **Description**                                                 |
|-------------|------------------|-----------------------------------------------------------------|
| EQ          | "eq"             | Elements that are equal a specified value                       |
| CONTAINS    | "contains"       | Elements that contains  a specified value (sensitive search)    |
| ICONTAINS   | "icontains"      | Elements that contains  a specified value (insensitive search)  |
| STARTSWITH  | "startswith"     | Elements that start with a specified value (sensitive search)   |
| ISTARTSWITH | "istartswith"    | Elements that start with a specified value (insensitive search) |
| ENDSWITH    | "endswith"       | Elements that end with a specified value (sensitive search)     |
| IENDSWITH   | "iendswith"      | Elements that end with a specified value (insensitive search)   |
| LT          | "lt"             | Elements that are Lower than a specified value                  |
| LTE         | "lte"            | Elements that are Lower than equal a specified value            |
| GT          | "ge"             | Elements that are greater than a specified value                |
| GTE         | "get"            | Elements that are greater than equal a specified value          |
| IN          | "in"             | Elements that are included in a specified value                 |
| ISNULL      | "isnull"         | Element that is null                                            |
| NOT         | "not"            | Denied elements filters                                         |

After creating a filter it's possible compose more complex filters through `ConditionalOperator`:

```ts
import {RelationalOperator} from "./filter";

const idFilter = new Filter({
    operator: RelationalOperator.EQ,
    key: "id",
    value: "1",
});

const nameFilter = new Filter({
    operator: RelationalOperator.CONTAINS,
    key: "label",
    value: "test",
});

const complexFilter = new Filter({
    operator: ConditionalOperator.AND,
    filters: [codeFilter, nameFilter],
});
```

With `toString()` function will create a filter string object as below: 

```
complexFilter.toString();

and(eq(id,1),contains(label,test))
```

### ISNULL operator

If you want check that value of a key is NULL filters you can use the `ISNULL` operator, 
it expects the operator and the value:

```
const isNullFilter = new Filter({
  operator: RelationalOperator.ISNULL,
  key: "value",
});
```

With `toString()` function will create a denied filter string object as below:

```
isNotNullFilter.toString();

isnull(value)
```


### NOT operator

If you want a denied filters you can use the `NOT` operator:

```
const isNotNullFilter = new Filter({
    operator: RelationalOperator.NOT,
    value: [isNullFilter],
});
```

With `toString()` function will create a denied filter string object as below:

```
isNotNullFilter.toString();

not(and(eq(id,1),contains(label,test)))
```

