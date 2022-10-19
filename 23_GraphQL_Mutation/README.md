# Summary

## Mutation Insert Data with Apollo Client

1. Import useMutation hooks from apollo client and define mutation.

   ```js
   import { gql, useMutation } from "@apollo/client";

   const InsertTodo = gql`
      <!-- gql goes here -->
   `;
   ```

2. Invoke useMutation and using array destruction define mutation handler (insert Todo) and use it.

   ```js
   const [insertTodo, { loading: loadingInsert }] = useMutation(InsertTodo, {
     refetchQueries: [GetTodolist],
   });
   ```

   `refetchQueries`: an array (or a function that returns an array) that specifies which queries you want to refetch after the mutation occurs.

3. Call insertTodo query with variables.

   ```js
   insertTodo({
     variables: {
       object: {
         title: title,
         user_id: 1,
       },
     },
   });
   ```

## Mutation Update Data with Apollo Client

1. Import useMutation hooks from apollo client and define mutation.

   ```js
   import { gql, useMutation } from "@apollo/client";

   const UpdateTodo = gql`
      <!-- gql goes here -->
   `;
   ```

2. Create mutation handler for update.

   ```js
   const [updateTodo, { loading: loadingUpdate }] = useMutation(UpdateTodo, {
     refetchQueries: [GetTodolist],
   });
   ```

3. Call updateTodo query with variables.

   ```js
   const onClickItem = (idx) => {
     const item = data?.todolist.find((v) => v.id === idx);
     updateTodo({
       variables: {
         id: idx,
         is_done: !item.is_done,
       },
     });
   };
   ```

## Mutation Delete Data with Apollo Client

1. Import useMutation hooks from apollo client and define mutation.

   ```js
   import { gql, useMutation } from "@apollo/client";

   const DeleteTodo = gql`
      <!-- gql goes here -->
   `;
   ```

2. Create mutation handler for delete.

   ```js
   const [deleteTodo, { loading: loadingDelete }] = useMutation(DeleteTodo, {
     refetchQueries: [GetTodolist],
   });
   ```

3. Call deleteTodo query with variables.

   ```js
   const onDeleteItem = (idx) => {
     deleteTodo({
       variables: {
         id: idx,
       },
     });
   };
   ```
