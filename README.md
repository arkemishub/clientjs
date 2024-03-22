# @arkejs/client

![Client](https://github.com/arkemishub/clientjs/assets/81776297/cf43c6aa-e219-48e3-9c7c-eb4e1ff56225)

[![License](https://img.shields.io/badge/license-Apache2.0-blue.svg)](https://github.com/arkemishub/arke-monorepo/blob/master/LICENSE.txt)

An isomorphic JavaScript client for Arke backend connection

## Usage

First of all, you need to install the library:

```shell
npm install @arkejs/client
pnpm install @arkejs/client
```

Then you're able to import the library and establish the connection with the database:

```tsx
import Client from '@arkejs/client'

// Create a single arke js for interacting with your server
const client = new Client({ 
    serverUrl: 'http://localhost:4000',
    project: 'PROJECT_NAME',
})

client.arke.get('my_arke').then(
  res => console.log(res.data),
  err => console.error(err.response.data)
)
```

When you initialize the client you can define custom methods to get the Auth session:

```tsx
const client = new Client({
    serverUrl: 'http://localhost:4000',
    project: 'PROJECT_NAME',
    getSession: async () => {
      const session = await AsyncStorage.getItem('@session');
      return session;
    },
    setSession: async session => {
      await AsyncStorage.setItem('@session', JSON.stringify(session.content));
    },
  });
```
