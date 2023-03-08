---
sidebar_position: 1
title: Install
---

Client JS is an isomorphic JavaScript client for Arke. Through the client SDK
you can use simplified methods to interact with the arke server.

First of all, you need to install the library:

```sh
pnpm install @arkejs/client
```

## Init your SDK

Then you're able to import the library and establish the connection with the server:

```js
import Client from '@arkejs/client'

// Create a single arke js instance for interacting with your server
const getClient = () => new Client({
    serverUrl: process.env.ARKE_SERVER_URL,
    project: 'test_project',
});
```

:::success
For react environment you can create a useful hooks `useClient` to get the client
```shell
export default function useClient() {
  return getClient();
}
```
:::
