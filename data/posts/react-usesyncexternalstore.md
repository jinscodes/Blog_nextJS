Now, there are libraries, such as redux, recoid, jotai, zustand, react query and etc, that help to handle the state without `useState` or `useReducer`.

Simply, `useSyncExternalStore` traces the change that doesn't depend on the React through `useState` and `useEffect`, synchronizes and re-renders through setter of `useState`.

## useSyncExternalStore

`useSyncExternalStore` is a React Hook that lets you subscribe to an external store.

```js
const snapshot = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot?);
```

So it's a hook that connects an external store that might have a little problem with rendering logic and allows you to get on the re-rendering system of the reactant because it doesn't have a health libraries or react dependencies.

On the top level, call the `useSyncExternalStore` and then read the value from the external data store.

```js
import { useSyncExternalStore } from "react";
import { todosStore } from "./todoStore.js";

function TodosApp() {
  const todos = useSyncExternalStore(
    todosStore.subscribe,
    todosStore.getSnapshot
  );
  // ...
}
```

It returns a snapshot of the data in the store. Two functions must be passed as a parameter.

1. `subscribe` function subscribes the store and returns the function that cancels the subscribe.
2. `getSnapshot` function reads snapshot of datat in the store.

---

[](https://react.dev/reference/react/useSyncExternalStore)

[](https://junghyeonsu.com/posts/react-use-sync-external-store/)
