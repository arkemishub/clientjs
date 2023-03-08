---
sidebar_position: 7
title: Sorting
---

For each `GET` methods on Arke, Units, Parameters etc. is available a order parameters
to sort the response through the `asc` or `desc` order for a specific parameter

```js
client.arke
    .getAll({ params: {
        order: 'label;asc'
    }})
    .then((res) => {
        // get Arke sorted by label with ascended order
    })
```

:::info
For more information look the [complete API Reference of Client JS methods](https://arkemishub.github.io/arke-monorepo/docs/)
:::