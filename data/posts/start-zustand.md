In the previous project, I didn't use state management library. I'd experienced problems related to state management. So, I felt that I need to know about state management libraries.

In this post, I'll introduce zustand.

## What is zustand?

Before zustand, there is Redux. Redux changed the game in the global management system. In any framework, it was adopted and used as the tool of ideal state management.

Zustand is a new kid on the block. It's another powerful tool to handle the global statement.

#### So, what is zustand?

Zustand is a state management library. It is compact, fast, and scalable. It is a fairly simple system with little boilerplate code. You can use it with less code than Redux and similar libraries for managing React states.

It doesn’t rely on a provider. As a result, you don’t have to code as much React logic, which may lessen the things we tend to forget. It works based on simplified flux principles and primarily makes use of hooks.

- It is faster than context. It gives you the option to choose a specific state.
- It does state merging by default.
- It is extendable by default. Thus, you can use a variety of middleware types.
- It is less opinionated. You don’t have to stick to one way of doing things. Even though there is a recommended approach, you are not required to adopt it.

## Getting started with Zustand

Let's start zustand.

First of all, below the code to install the zustand library.

```bash
$ npm istall zustand

or

$ yarn add zustand
```

### create hook

To use zustand, import a create function.

```jsx
import { create } from "zustand";
```

This function is called with a callback function and it returns a custom hook.

The callback function passed to it is where we will define our state and the functions we can use to manipulate the state. The state and the functions are all in an object returned by this callback function.

There is an example 👇🏼:

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/278357b1-b5e8-462b-b5ed-c0e890b6902e)

There is a `create` function that passes a `set` function to the callback function.

This `set` function is used to manipulate the state in the store. States in zustand can be primitives, objects, or functions.

In our above example, we have two states in our store: `count`, and `incrementCount`. The `useCounter` is a custom hook, we can use this hook in our components and we will be able to get the latest state in them.

If we use the hook in components A, B, and C. Any change done to the state in B will be reflected in both A and C, and they will all re-render to reflect the new changes.

### Get state from the hook

The callback function is called by the custom hook returned by the `create` and passes the current state. So, we can get this state and use it.

This is an example:

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/d059e0e4-aa3b-4039-affa-4542d7b2b79d)

We called the `useCounter` as a custom hook returned by the `create` and passed a callback function `state => state.count`.

### Use state in component

Then, the function returns `count` part of the state and we can use it.

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/83e4005a-6188-4713-9c7d-aa41bafc97f8)

Now, we want to create a component where we can increase the value of the counter state.

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/7cf5d302-f80f-4db6-a519-16d47704cd85)

Slice out the `incrementCount` function from the state (state have two: count & incrementCount). And then, set it to the `onClick` event of the button.

Through this, we can see how the components are independent of each. But, also through this we can see the current state from the store. In other words, it's independent but be interrelated.

Whenever the button is clicked, the function is executed and the state is updated. Whenever the state is changed, components are re-rendered to display the newest state value (in this example, ShowCount component is rendered to display the new count value).

### Return the whole state

Now, when we call the custom hook returned by the `create` function without a callback function, the hook will return the whole state of the store.

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/0977a99f-c464-4aa6-953b-5b2b8fa75c00)

Without callback function, `useCount` will return the whole state in the store.

The state holds the whole state in the useCounter store. So, we can get the counter state by doing like below 👇🏼

![6](https://github.com/jinscodes/Blog_nextJS/assets/87598134/d3c8de8b-d2c9-4d95-9fcb-b06f36b7438a)

### Memorization

Memoization is an optimization technique used to optimize the execution of functions by caching the results of expensive or time-consuming function calls.

It involves storing the return value of a function associated with a specific set of input parameters so that if the function is called again with the same parameters, the cached result can be returned instead of re-evaluating the function.

The goal of memoization is to improve performance and efficiency by avoiding redundant computations.

Zustand give us the hook to add memorization. It exports a `shallow` function that we can use to add memoization to our state picks.

```jsx
import { shallow } from "zustand/shallow";
```

If we want to get `count` state from the store, we can do this 👇🏼

![7](https://github.com/jinscodes/Blog_nextJS/assets/87598134/dcd7758b-dda8-403d-bb30-bb917130a3b4)

Initial value of `count` is 0. Whenever the `counter` state is updated using `incrementCount`, the component is re-rendered.

If the updated value of the `count` is 0, the componenet is re-rendered unnecessarily. How to prevent this uncessary re-rendering from occuring when the state is not changed?

Zustand directs us to pass a comparator function as a second parameter to the custom hook. This comparator function will compare the previous slice state and the next slice state, if both are the same the component will not re-render, else the component will re-render.

This is exactly what other React hooks do: useEffect, useMemo, and useCallback. The `shallow` function is a comparator function provided to us by Zustand. It shallowly compares the two-state slices using the `==` shallow equality operator.

![8](https://github.com/jinscodes/Blog_nextJS/assets/87598134/5adee312-c8fc-4716-a2fb-b8fe3fa1eb9a)

---

[](https://refine.dev/blog/zustand-react-state/#introduction)

[](https://github.com/pmndrs/zustand)

[](https://medium.com/globant/react-state-management-b0c81e0cbbf3#:~:text=Zustand%20is%20a%20state%20management,libraries%20for%20managing%20React%20states.)
