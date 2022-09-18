# Summary

## 1. React Hooks Introduction

Hooks is a new feature on React 16.8. By using Hooks, we can use state and another React features without creating a Class Component. The common and basic Hooks in React are useState, useEffect, and useContext. Another React Hooks are:

- useReducer
- useCallback
- useMemo
- useRef
- useImperativeHandle
- useLayoutEffect
- useDebugValue

There is some rules in Hooks:

- Call Hooks only at the Top Level

  Don't call Hooks in the loop, conditions, or nested functions.

- Only call Hooks from React Functions

  Don't call Hooks on the basic JavaCcript language without React Function.

## 2. useState and useEffect

Variable state declaration (useState):

```jsx
import { useState } from "react";

function Example() {
  // Declare new state variable "count"
  const [count, setCount] = useState(0);
  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}> Click Me </button>
    </div>
  );
}
```

useEffect is Hooks effect that can allow us to do side effects inside function component. There are 2 kinds of useEffect: clean up and without clean up.

- Without clean up:

  ```jsx
  import { useState, useEffect } from "react";

  function Example() {
    // Declare new state variable "count"
    const [count, setCount] = useState(0);

    useEffect(() => {
      document.title = `You clicked ${count} times`;
    });

    return (
      <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1)}> Click Me </button>
      </div>
    );
  }
  ```

- With clean up:

  ```jsx
  import { useState, useEffect } from "react";

  function FriendStatus(props) {
    // Declare new state variable "count"
    const [isOnline, setIsOnline] = useState(null);

    useEffect(() => {
      function handleStatusChange(status) {
        setIsOnline(status.isOnline);
      }

      ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);

      // Specify how to clean up after this effect

      return function cleanup() {
        ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
      };
    });

    if (isOnline === null) {
      return "Loading...";
    }

    return isOnline ? "Online" : "Oflline";
  }
  ```

## 3. Custom Hooks

Custom Hooks make our Hooks to extract logic component to reusable function. Custom Hooks are a convention that naturally follows from the design of Hooks, rather than a React feature. A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks. For example, we have a custom Hooks called 'useFriendStatus' that will return is someone (friend) online or not:

```jsx
import { useState, useEffect } from "react";

function useFriendStatus(friendID) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendID, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendID, handleStatusChange);
    };
  });

  return isOnline;
}
```
