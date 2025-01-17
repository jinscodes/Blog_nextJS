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

1. The store snapshot that getSnapshot returns must be immutable. Returns a new non-changeable snapshot if there is changeable data in the default store; otherwise returns the last cached snapshot.

2. If another subscription function is delivered during re-rendering, React will use the newly delivered subscription function to re-subscribe the repository, which can be prevented by declaring a subscription outside the component.

3. If a store changes during a non-blocking transition update, React returns to perform that update as blocking. Specifically, for all Transition updates, React calls getSnapshot once more just before applying the changes to the DOM. If it returns a different value than the first time it was called, React will start updating again, this time applying a blocking update so that all components on the screen reflect the same store version.

4. We do not recommend that you pause rendering based on the store value returned by useSyncExternalStore, because you cannot display the variant for the external store as a non-blocking transition update, triggering the nearest Suspense fallback and replacing it with a loading spinner on the screen, which is usually not good for UX.

For example, the following is not recommended.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/41e9d116-cfe2-4804-9228-03476471db77)

#### Use case for `useSyncExternalStore`

- Caching data from external APIs
- WebSocket connection
- Managing browser storage

## Usage: External Store Subscription

Almost React components read the data in `props`, `state` and `context`. However, sometimes the components need to read some data from some stores outside React that change over time.

- A third-part state management library that stores state outside of the React.
- Browser APIs that expose changeable values and events that subscribes to those changes.

TO read values from an external data store, call `useSyncExternalStore` at the highest level of the component.

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/b1e560ab-1bee-4ca5-a6a3-b9901c34f85d)

Returns the snapshot of the data in the store. Two functions must be passed as arguments.

1. `Subscribe` function must return a funtion that subscribes to the store and cancels the subscription.
2. `getSnapshot` function must read the snapshot of the data from the store.

React uses this function to keep the component subscribed to the store and re-rendering when any changes are made.

For example, the `todosStore` is implemented as an external store that stores data outside React. `TodosApp` component connects to the external store with the `useSyncExternalStore` hoook.

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/6fdb5b1f-24fc-4373-a3bf-54fcfec0225a)

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/e5865edc-1606-4ebc-a693-501dddfe64e4)

> 💡 **NOTE**  
> If possible, it is recommended that you use the built-in React state with useState and useReducer.  
> The `useSyncExternalStore` API is primarily useful when integrating with existing non-react codes.

## Usage: Browser API Subscription

Another reason to add `useSyncExternalStore` is to subscribe some values that are exposed to the browser that is changed over time.

For example, suppose that we want a component to indeicate whether a network connection is active. The browser exposes this information through `navigator.onLine` property.

This value can be changed over time without the knowledge of React, so it's read through `useSyncExternalStore`.

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/f6307270-01fd-4b7c-b2d0-fed9604d5986)

To implement `getSnapshot` function, read the current value from browser API.

![6](https://github.com/jinscodes/Blog_nextJS/assets/87598134/e7d2b9d4-b3cf-49d5-86bb-efe49db52a7d)

After, make the `subscribe` function. For instance, if `navigator.onLine` changes, the browser runs `online` and `offline` event in the `window` object.

Subscribe the `callback` argument to the event, and then, return a function that clears the subscription.

![7](https://github.com/jinscodes/Blog_nextJS/assets/87598134/c15b61b3-27fb-493a-aa66-f1267baefc5a)

React now knows how to read values from the external `navigator.onLine` API and how to subscribe to those changes. When the network is disconnected, the component is rerendered.

## Extract The Logic With Custom Hook

Normaly, we don't use `useSyncExternalStore` in the component. Instead, call it in custom hook. This allows different components to use the same external repository.

For example, this custom useOnlineStatusHook tracks whether the network is online.

![8](https://github.com/jinscodes/Blog_nextJS/assets/87598134/26a8907d-c83b-4675-9db2-9f22a0ea0140)

Now, we can call `useOnlineStatus` without re-implementing the this logic in the each other components.

## useSyncExternalStore vs. useEffect

We commonly might use `useEffect` Hook.

However, `useEffect` hook doesn't provide current snapshots for each state update, and it's more prone to errors than the `useSyncExternalStore`. In addition, it causes infamous re-rendering problems.

A major issue is the sequence of rendering. After the browser finishes painting, only the `useEffect` will fire. This delay introduces unexpected bugs and challenges in managing the correct chain of event.

Here is the example 👇🏼

![9](https://github.com/jinscodes/Blog_nextJS/assets/87598134/09739a49-340d-4fe4-b1c2-c99d4e4915b3)

You might expect the counter app to run in a straightforward way where the state updates, the component re-renders, and then finally, the effect runs. However, things gets a little tricky here due to the delay with the API calls, and the sequence of events might not be what we expect.

If the data doesn't depend on existing React APIs to process and is located externally, `useSyncExternalStore` can fix this performance gap and avoid all issues about the sequence.

`useSyncExternalStore` also prevents the previously mentioned re-rendering problem that you are likely to face with useEffect whenever the state changes. Interestingly, states subscribed with useSyncExternalStore won’t re-render twice, fixing huge performance problems.

## useSyncExternalStore vs. useState

`useState` has a limitation to design a state in a per-component. In other words, the state is restricted to its own component and cannot be accessed globally.

Surely, therer are some ways to use the state globally, such as using callbacks, force states globally, or using prop-drilling the state across the component. However, those approaches have the potential to slow down the React app.

Unlike the `useState`, the `useSyncExternalStore` prevents this issue by setting up a global state that you can subscribe to from any React component, no matter how deeply nested it is. Even better, if you’re dealing with a non-React codebase, all you have to care about is the subscription event.

`useSyncExternalStore` will send you proper snapshots of the current state of the global storage that you can consume in any React component.

---

[](https://react.dev/reference/react/useSyncExternalStore)

[](https://junghyeonsu.com/posts/react-use-sync-external-store/)

[](https://www.youtube.com/watch?v=dtS98IHP7xc)

[](https://blog.logrocket.com/exploring-usesyncexternalstore-react-hook/)
