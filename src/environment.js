import { Environment, Network, RecordSource, Store } from 'relay-runtime';

const fetchQuery = async (operation, variables, cacheConfig, uploadables) => {
  const response = await fetch('https://graphql-sw-api-klmkpknwdl.now.sh/', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });
  return await response.json();
}

const network = Network.create(fetchQuery);

const source = new RecordSource();
const store = new Store(source);

const env = new Environment({
  network,
  store,
});

export default env;
