Basically, we need to create `store` with using `create` function to use Zustand at first.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/6b4eceae-4467-4cbd-90ca-73f0a11fbb89)

And then,

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/af06d29b-f550-4dc5-beb2-55574b152281)

If you want to see how to start and use Zustand, go to the below link 👇🏼

[](https://jay-h-blog.vercel.app/posts/ReactJs,NextJs/start-zustand)

## Understanding The Principle of Zustand

Zustand is based on an issue/subscription model and internally manages store state as a clousre.

Below code is an example:

```js
// vanilla.ts
const createStoreImpl = (createState) => {
  let state;
  const listeners = new Set();

  const setState = (partial, replace) => {
    // ...
  };

  const getState = () => state;

  const subscribe = (listener) => {
    // ...
  };

  const api = { setState, getState, subscribe };
  state = createState(setState, getState, api);

  return api;
};

export const createStore = (createState) =>
  createState ? createStoreImpl(createState) : createStoreImpl;
```

### setState

Looking at the setState function that changes the state, if the factor is a function type, the current state is passed to the factor to define the next state. And if the nextState and state are different, the state is updated using Object.assign.

```js
const setState = (partial, replace) => {
  const nextState = typeof partial === "function" ? partial(state) : partial;

  if (!Object.is(nextState, state)) {
    const previousState = state;
    state =
      replace ?? typeof nextState !== "object"
        ? nextState
        : Object.assign({}, state, nextState);

    listeners.forEach((listener) => listener(state, previousState));
  }
};
```

### subscribe

A subscription function that subscribes to a state. A function that unsubscribe is also returning.

```js
const subscribe = (listener) => {
  listeners.add(listener);

  return () => listeners.delete(listener);
};
```

---

[](https://ingg.dev/zustand-work/#zustand-code)
