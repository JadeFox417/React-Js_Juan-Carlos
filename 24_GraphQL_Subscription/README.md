# Summary

## Setting Subscription

1. Install subscriptions-transport-ws to enable websocket connection

   ```
   yarn add @apollo/client subscriptions-transport-ws
   ```

2. Import all needed modules and separate between http and websocket link

   ```js
   import { ApolloClient, InMemoryCache } from "@apollo/client";

   import { split, HttpLink } from "@apollo/client";
   import { getMainDefinition } from "@apollo/client/utilities";
   import { WebSocketLink } from "@apollo/client/link/ws";
   ```

3. Create httpLink for query and mutation then WebSocketLink for subscription. Add header for authentication. Get this link from Hasura console. For wsLink, use `wss://` instead of `https://` because it use web socket. Note that wss is more secure than ws, just like https is more secure than http.

   ```js
   const httpLink = new HttpLink({
     uri: "https://example.com",
     headers: {
       "x-hasura-admin-secret": "yourKeyAdminSecret",
     },
   });

   const wsLink = new WebSocketLink({
     uri: "wss://example.com",
     options: {
       reconnect: true,
       connectionParams: {
         headers: {
           "x-hasura-admin-secret": "yourKeyAdminSecret",
         },
       },
     },
   });
   ```

4. Add split function and use as link when create client. Split function used to combine those two Links into a single Link that uses one or the other to the type of operating being executed. When operation is equal subscription then use wsLink, if not then use httpLink for query and mutation.

   ```js
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
   ```

## Subscription using useSubscription

After setup the subscription environtment, import `useSubscription` from apollo client and define subscription

```js
import { useSubscription } from "@apollo/client";

const SubscriptionTodo = gql`
  subscription MySubscription {
    todolist {
      id
      is_done
      title
    }
  }
`;
```

Then, invoke subscription and consume data, in this example we will remove query from previous code and change it to subscription. In jsx code just like before

```js
const { data, loading, error } = useSubscription(SubscriptionTodo);
```

## Subscription using subscribeToMore

`subscribeToMore` is a function that enables you to execute a subscription, usually to subscribe to specific fields that were included in the query. Or when server return only 1 updated data instead of all data, then we need to update previous data in prev variable and return updated data.

```js
function TodoList() {
    const { data, loading, error, subscribeToMore } = useQuery(GetTodo);

    useEffect(() => {
        subscribeToMore({
            document: SubscriptionTodo,
            updateQuery: (prev, { subscriptionData: { data } }) => {
                return data;
            },
        });
    }, []);
```
