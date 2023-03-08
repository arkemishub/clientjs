---
sidebar_position: 6
title: Offset & limits
---

For each `GET` methods on Arke, Units, Parameters etc. are available dedicated parameters
to limits the response

```js
client.arke
    .getAll({ params: {
        offset: 0, 
        limit: 20,
    }})
    .then((res) => {
        // limit response to 20 Arke
    })
```