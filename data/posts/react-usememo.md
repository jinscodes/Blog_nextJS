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

## Usage: Skipping expensive recalculations

To cache the calculation between re-rendering, call `useMemo` and wrap the calculation at the top level of the component.

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/b4102843-adef-4c06-9ce1-a3848aec498f)

Send two things to `useMemo`. First is a calculation function and the second is a list of dependencies.

The result value of `useMemo` in the beginning rendering is the result value of the calculation function.

In all subsequent renders, React compares the dependency list to the dependency list that was passed during the last renders. If the dependency has not changed (compared to Object.is ), `useMemo` returns a previously calculated value. If not, React runs the calculation again and returns a new value.

In other words, `useMemo` caches the computational results between re-rendering until the dependency changes.

Basically, react execute the whole component whenever this component is re-rendered.

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/80e61acb-944f-4414-9de2-a5bd813e835b)

As the above example, if `TodoList` updates the state or gets new props from the parent, `filterTodos` is re-executed.

Basically, in the most case, it's not a big deal because most calculations are so fast. However, if you are filtering or converting large arrays or performing costly calculations, it is recommended that you skip the calculations if the data has not changed.

If `todos` and `tab` are the same as in the last rendering, you can reuse the previously calculated `visibleTodos` by wrapping the calculation with useMemo, as mentioned earlier.

This type of caching is called **memoization**.

> 💡 **NOTE**  
> `useMemo` is only used for performance optimization.  
> If the code doesn't work well without `useMemo`, you must find out the fundamental problems. After that, you need to use use useMemo to improve performance.

## Usage: Skipping component re-rendering

Depending on the situation, `useMemo` can help sub component re-rendering performance optimize. To explain this, suppose that `TodoList` sends visibleTodos props to child component named `List`.

![6](https://github.com/jinscodes/Blog_nextJS/assets/87598134/0a4f85a8-bdb9-452a-acea-b358e8b4e325)

If you toggle theme prop, you'll see that the app pauses. However, when you remove `<List />` from JSX, it feels fast. This tells you that it's worth optimizing the List component.

By default, React recursively renders all child components when the components are re-rendered. Therefore, when `ToDoList` is re-rendered with another theme, the List component is also re-rendered.

Components that don't require much computation to re-render are fine, but if you've found it slow to re-render, you can wrap the `List` around `memo` and skip re-rendering when the props is the same as the last time it was rendered.

![7](https://github.com/jinscodes/Blog_nextJS/assets/87598134/fb625c32-9812-4a6c-8d46-0a8714cd7e5c)

With this change, `List` will not renders all of the props if they are the same as they were in the last rendering. It's important to cache the computation here.

## Usage: Memoizing a dependency of another Hook

Let's assume that there is an operation that depends on the object created directly from the body of the component.

![8](https://github.com/user-attachments/assets/bd3d1ec2-f04a-4e23-b3cf-2abfbf9f7c35)

It's useless for the purpose of memoization to depend on the object like the above code. This is because when the component re-rendered, every codes in component are executed again. Codes that create `searchOptions` object are re-rendered whenever rendering. Because `searchOptions` are the dependencies of `useMemo` calls and are different every time, React recalculates `searchItems` each time knowing that the dependencies are different.

To address this issue, memorize `searchOptions` object itself before forwarding it as a dependency.

![9](https://github.com/user-attachments/assets/f352d282-c7bf-4150-988c-552cc7e2e902)

In the above example, if the `text` doesn't changed, `searchOptions` object is not changed. However, there is another better way.

It is to declare searchOptions inside the useMemo computation function.

![10](https://github.com/user-attachments/assets/3fb89f08-a07d-49ea-832d-6d83f81eed6c)

The operation now depends directly on the text (it cannot be changed "by mistake" because it is a string).

## Usage: Memoizing functions

Suppose the `Form` component is wrapped in `memo` and you want to pass the function to prop here.

![11](https://github.com/user-attachments/assets/532bb27b-c532-48e9-8ed7-5c7441f47dd8)

Just as `{}` creates another object, function declarations such as `function() {}` and expressions such as `() => {}` create a different function each time they are rendered. Creating a new function itself is not a problem and should not be avoided. However, if the `Form` component is not written down, you may want to skip rendering it again when the props have not changed. Always different prop can overshadow the purpose of the memoization.

To note a function with `useMemo`, you must return another function from the computational function.

![12](https://github.com/user-attachments/assets/16beb6f9-b0ac-4782-ac23-55e6f2e60310)

---

[](https://react.dev/reference/react/useMemo)

[](https://velog.io/@jinyoung985/React-useMemo%EB%9E%80)
