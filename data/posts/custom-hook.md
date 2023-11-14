> Hooks are a new addition in React 16.8.

## Custom Hook
> A custom hook in React is a reusable function that encapsulates logic, allowing components to share and manage stateful or side-effect-related code, promoting code reusability and maintainability.

In React, there are so many hooks we can use. It's useful and helps us use the functions we want conveniently and efficiently.

However, when we design the architecture or write codes, we can realize that there are overlapping codes(functions). When codes are overlapped several times, we need to make **custom hooks**. 

Building your own Hooks lets you extract component logic into reusable functions.



```json
↳ src
  ↳ hooks
    ↳ customHook.js || customHook.jsx
```

## Step 1.

In my case, I just write the code in the component. And then, trying to divide the code from the component.

Below codes are about the component from a chat application that display a message indicating whether a friend is online or offline:

```jsx
import React, { useState, useEffect } from 'react';

function FriendStatus(props) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  if (isOnline === null) {
    return 'Loading...';
  }
  return isOnline ? 'Online' : 'Offline';
}
```

```jsx
import React, { useState, useEffect } from 'react';

function FriendListItem(props) {
  const [isOnline, setIsOnline] = useState(null);
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline);
    }
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });

  return (
    <li style={{color: isOline ? 'green' : 'black'}}>
      {props.friend.name}
    </li>
  );
}
```

The above codes are overlapped. Instead of using these codes, we'd like to share the logic that is overlapped bewteen `FriendStatus` and `FriendListItem`.

## Step 2.

After checking the overlapped codes, the next step is to extract the code to custom hook.

A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.

```jsx
import { useState, useEffect } from 'react';

function useFriendStatus(friendId) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    const handleStatusChange = (status) => {
      setIsOnline(status.isOnline);
    }

    ChatAPI.subscribeToFriendStatus(friendId, handleStatusChange);
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(friendId, handleStatusChange);
    };
  });

  return isOnline;
}
```

This is the extracted hook from the component. There is nothing new.

The purpose of the `useFriendstatus` hook is to subscribe us to a friends' status. This hook takes `friendId` as an argument and return whether or not the friend is online.

To summarize the purpose:

```jsx
function useFriendStatus(friendId) {
  const [isOnline, setIsOnline] = useState(null);

  // ...

  return isOnline;
}
```

## Stpe 3.

After extracting the hook from the component, the last step is to use the custom hook wherever you want.

```jsx
function FriendStatus(props) {
  const isOnline = useFriendStatus(props.friend.id);

  if (isOnline === null) {
    return 'Loading...';
  }

  return isOnline ? 'Online' : 'Offline';
}
```

```jsx
function FriendListItem(props) {
  const isOnline = useFriendStatus(props.friend.id);

  return (
    <li style={{color: isOnline ? 'green' : 'black'}}>
      {props.friend.name}
    </li>
  );
}
```

This above codes are equivalent to the original examples. It works in exactly the same way.


## For Making Custom Hook
> Custom Hooks are a convention that naturally follows from the design of Hooks, rather than a React feature.

- Name my custom Hooks starting with “use”
  - This convention is very important. Without it, we wouldn’t be able to automatically check for violations of rules of Hooks because we couldn’t tell if a certain function contains calls to Hooks inside of it.
- Custom Hooks are a mechanism to reuse stateful logic
  - But every time you use a custom Hook, all state and effects inside of it are fully isolated.
- Each call to a Hook gets isolated state
  - we call useFriendStatus directly, from React’s point of view our component just calls useState and useEffect. And as we learned earlier, we can call useState and useEffect many times in one component, and they will be completely independent.

---

- `https://legacy.reactjs.org/docs/hooks-custom.html`