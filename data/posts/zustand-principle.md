Basically, we need to create `store` with using `create` function to use Zustand at first.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/6b4eceae-4467-4cbd-90ca-73f0a11fbb89)

And then,

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/af06d29b-f550-4dc5-beb2-55574b152281)

If you want to see how to start and use Zustand, go to the below link 👇🏼

[](https://jay-h-blog.vercel.app/posts/ReactJs,NextJs/start-zustand)

## Background

> **State: A Component's Memory**

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/071c5025-8b1c-4831-a89b-903b4276446b)

- Redux & MobX
  - Store is too big and complex
  - In the Store, there is more API call code than state management code
  - Redux and MobX are not perfect tools for asynchronous

ㅤ

- MobX & ReactQuery
  - Store is simple but component is complicated
  - Business logic is in the component

So... **ZUSTADN**

Compare to zustand and redux to build the store,

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/43f00b18-b7e7-46eb-9721-49e43ae0f075)

## Understanding The Principle of Zustand

Zustand is based on an issue/subscription model and internally manages store state as a clousre.

Below code is an example:

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/0a3e6b21-be29-46b5-b26e-381159025833)

### setState

Looking at the setState function that changes the state, if the factor is a function type, the current state is passed to the factor to define the next state. And if the nextState and state are different, the state is updated using Object.assign.

![6](https://github.com/jinscodes/Blog_nextJS/assets/87598134/2ed08a40-c3a8-4b09-9f26-e394f2a515c9)

### subscribe

A subscription function that subscribes to a state. A function that unsubscribe is also returning.

![7](https://github.com/jinscodes/Blog_nextJS/assets/87598134/347468c4-b881-4587-8b89-86b10926927b)

You can create a `store` using the code above and use the `subscribe`, `setState` function.

This is the example of usage of `subscribe`.

![8](https://github.com/jinscodes/Blog_nextJS/assets/87598134/80a20fcb-c5b9-4c93-a87b-571a3f4cb66e)

### In React

Zustand make it possible to use the state in react component based on the above store. Since zustand v4, zustand use `use-sync-external-store` for react.

We can see that the api as the store that is made by `createStore` function is used the hook named `useSyncExternalStore`.

![9](https://github.com/jinscodes/Blog_nextJS/assets/87598134/2bef04d4-819d-4025-8adc-210039c7d7c7)

---

[](https://ingg.dev/zustand-work/#zustand-code)

[](https://www.youtube.com/watch?v=nkXIpGjVxWU)
