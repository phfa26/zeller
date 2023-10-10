import { ApolloClient, InMemoryCache } from '@apollo/client';

const API_URL = process.env.REACT_APP_GRAPHQL_URL!;
const API_KEY = process.env.REACT_APP_API_KEY!;

export const client = new ApolloClient({
  uri: API_URL,
  headers: {
    'x-api-key': API_KEY
  },
  cache: new InMemoryCache()
});
