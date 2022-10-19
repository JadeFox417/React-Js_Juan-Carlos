import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://causal-cowbird-92.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret": "cHzJZajzUyR80sxAySAo430jXsJ7sJVEQB3U3X1BtgtrRPdU5wdLd2jSRwnYITt9",
  },
});

export default client;
