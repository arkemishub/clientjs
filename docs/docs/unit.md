---
sidebar_position: 4
title: Unit
---

The arke class provides useful methods to manage Units and its associated parameters.

```shell
client.unit.[method]
```

| **Method**                         | **Description**                      |
|------------------------------------|--------------------------------------|
| baseStruct(config)                 | Get the structure of generic Arke    |
| getAll(arkeId, config)             | Get All Units                        |
| get(arkeId, unitId, config)        | Get specific Unit                    |
| struct(arkeId, unitId, config)     | Get the structure of a specific Unit |
| create(arkeId, data, config)       | Create an Unit with data             |
| edit(arkeId, unitId, data, config) | Edit a specific Unit                 |
| delete(arkeId, unitId, config)     | Delete a specific Unit               |

:::info
For config param see [Axios documentation](https://axios-http.com/docs/req_config)
:::