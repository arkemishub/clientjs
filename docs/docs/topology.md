---
sidebar_position: 9
title: Topology
---

The Topology class provides useful methods to manage Topology and links on Arke and Groups.

```shell
client.[arke/group].topology.[method]
```

| **Method**                                                    | **Description**                  |
|---------------------------------------------------------------|----------------------------------|
| getLinks(parent, linkDirection)                               | Get links from a unit of an Arke |
| addLink({ arkeId/groupId, linkId, unitId }, linkDirection)    | Add link between units           |
| deleteLink({ arkeId/groupId, linkId, unitId }, linkDirection) | Delete link between units        |

#### Parent / Child

For parent/child parameter you have to specify { arkeId/groupId, unitId }

#### LinkDirection

- Child: get all units with direction child
- Parent: get all parents with direction parent

:::info
For config param see [Axios documentation](https://axios-http.com/docs/req_config)
:::