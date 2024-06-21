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

1. `subscribe` function
   1. Subscribing the store and returning the function that cancels the subscribe.
2. `getSnapshot` function
   1. Reading snapshot of datat in the store.

#### Parameters

- subscribe: a function that receives one callback argument and subscribes to the store. If the store changes, the provided callback must be called. The component will then be rerendered. The subscribe function must return the function that clears the subscription.

- getSnapshot: A function that returns a snapshot of the store data required by the component. Repeated calls of `getSnapshot` without the store being changed must return the same value. If the store is changed and the returned value is different (compared to Object.is ), React re-renders the component.

- optional `getServerSnapshot`: a function that returns the initial snapshot of the data in the store. Used only during server rendering and during the hydration of server rendered content from the client. Server snapshots must be the same between the client and the server and are typically serialized and passed from the server to the client. If this function is not provided, errors occur when rendering components on the server.

#### Return value

Current snapshot of the store that can be used in rendering logic.

#### Caution

- The store snapshot that getSnapshot returns must be immutable. Returns a new non-changeable snapshot if there is changeable data in the default store; otherwise returns the last cached snapshot.

If another subscription function is delivered during re-rendering, React will use the newly delivered subscription function to re-subscribe the repository, which can be prevented by declaring a subscription outside the component.

If a store changes during a non-blocking transition update, React returns to perform that update as blocking. Specifically, for all Transition updates, React calls getSnapshot once more just before applying the changes to the DOM. If it returns a different value than the first time it was called, React will start updating again, this time applying a blocking update so that all components on the screen reflect the same store version.

We do not recommend that you pause rendering based on the store value returned by useSyncExternalStore, because you cannot display the variant for the external store as a non-blocking transition update, triggering the nearest Suspense fallback and replacing it with a loading spinner on the screen, which is usually not good for UX.

For example, the following is not recommended.

---

[](https://react.dev/reference/react/useSyncExternalStore)

[](https://junghyeonsu.com/posts/react-use-sync-external-store/)
