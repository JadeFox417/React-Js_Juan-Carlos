import { ApolloClient, InMemoryCache } from "@apollo/client";
import { split, HttpLink } from "@apollo/client";
import { getMainDefinition } from "@apollo/client/utilities";
import { GraphQLWsLink } from "@apollo/client/link/subscriptions";
import { createClient } from "graphql-ws";

const httpLink = new HttpLink({
  uri: "https://causal-cowbird-92.hasura.app/v1/graphql",
  headers: {
    "x-hasura-admin-secret": "cHzJZajzUyR80sxAySAo430jXsJ7sJVEQB3U3X1BtgtrRPdU5wdLd2jSRwnYITt9",
  },
});

const wsLink = new GraphQLWsLink(
  createClient({
    url: "wss://causal-cowbird-92.hasura.app/v1/graphql",
    connectionParams: {
      headers: {
        "x-hasura-admin-secret": "cHzJZajzUyR80sxAySAo430jXsJ7sJVEQB3U3X1BtgtrRPdU5wdLd2jSRwnYITt9",
      },
    },
  })
);

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return definition.kind === "OperationDefinition" && definition.operation === "subscription";
  },
  wsLink,
  httpLink
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;
