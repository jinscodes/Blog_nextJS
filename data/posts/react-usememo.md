## What is useMemo?

`useMemo` is the hook that is used for optimizing the performance of components.

Memo in `useMemo` refer to **memoization**. This means **putting something in the memory**. When the computer program repeats the same calcuation, the previous result value is stored in the memory, so remove repetitive performance of the same calculation to upgrade the performance of the program.

Simply, if a function that returns the same value must be repeatedly called, the value is stored in memory when calculating the first value, taken out of memory and reused without recalculating whenever necessary.

In React, the process of functional component is **"Rendering => Call component => Reset every inner variables"**. For instance,

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/43a4426b-fad1-43f3-bb40-03dc443fc784)

Whenever the component is rendered, the `value` variable is reset.

In other words, `calculate` function is unnecessarily recalled while rendering. If `calculate` function is heavy and complex, it's very uneffective.

Therefore, when we use Memo, we go through the order of reusing **rendering => component function calling => using memoized function**.

This eliminates the need to repeatedly execute the `calculate` function.

As mentioned above, `useMemo` stores the initially calculated value in memory, so that even if a component continues to be rendered, the calculated value stored in memory can be retrieved and reused without calling the calculate again.

## Structure of useMemo

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/63f6951c-9d53-4c15-a8f1-11447ab2fead)

Like `useEffect`, `useMemo` receives a callback function as the first factor and a dependencyArray as the second factor.

Only when the values in the dependency array are updated will the callback function be called back to update the values stored in memory.

If you put in an empty array, just like useEffect, the value is calculated only when mounted, and then the memory value is taken out and used continuously.

## useMemo

Let's take a look about the `useMemo`.

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/a60d909e-e146-4c64-81d9-4441c3a55770)

#### Parameters

- calculateValue: The function calculating the value that you want to cache. It should be pure, should take no arguments, and should return a value of any type. React will call your function during the initial render. On next renders, React will return the same value again if the dependencies have not changed since the last render. Otherwise, **it will call calculateValue, return its result, and store it so it can be reused later**.
- dependencies: The list of all reactive values referenced inside of the calculateValue code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3]. React will compare each dependency with its previous value using the Object.is comparison.

#### Return value

On the initial render, useMemo returns the result of calling calculateValue with no arguments.

During next renders, it will either return an already stored value from the last render (if the dependencies haven’t changed), or call calculateValue again, and return the result that calculateValue has returned.

#### Caution

1. useMemo is a Hook, so you can only call it at the top level of your component or your own Hooks. You can’t call it inside loops or conditions. If you need that, extract a new component and move the state into it.

2. In Strict Mode, React will call your calculation function twice in order to help you find accidental impurities. This is development-only behavior and does not affect production. If your calculation function is pure (as it should be), this should not affect your logic. The result from one of the calls will be ignored.

3. React will not throw away the cached value unless there is a specific reason to do that. For example, in development, React throws away the cache when you edit the file of your component. Both in development and in production, React will throw away the cache if your component suspends during the initial mount. In the future, React may add more features that take advantage of throwing away the cache—for example, if React adds built-in support for virtualized lists in the future, it would make sense to throw away the cache for items that scroll out of the virtualized table viewport. This should be fine if you rely on useMemo solely as a performance optimization. Otherwise, a state variable or a ref may be more appropriate.

> 💡 **NOTE**

> Caching return values like this is also known as memoization, which is why this Hook is called useMemo.

---

[](https://react.dev/reference/react/useMemo)

[](https://velog.io/@jinyoung985/React-useMemo%EB%9E%80)
