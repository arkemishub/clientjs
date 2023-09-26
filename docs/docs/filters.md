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
        // limit response to 20 Arke
    })
```

:::success
You can create more complex filters composing the filter in the following way:
```
filter: `or(contains(id,1),contains(label,test))`,
```
:::