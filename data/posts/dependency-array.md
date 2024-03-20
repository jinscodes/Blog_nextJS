In React, dependence array is one of the concepts that must be known. 

Anyone who has used React has probably heard of dependency array because it is a necessary concept to understand 100% of the `useEffect` in React.

So, what exactly is dependency injection?

## What is a dependency array
The dependency array is an array used in Hooks such as useEffect, useCallback, and useMemo, and is used to optimize performance by preventing the Hook from being unnecessarily repeatedly executed.

The purposes of the dependency array are...

1. Setting the Hook re-execution condition
	1. Set the condition so that the hook is re-executed only when the values included in the dependency array are changed. This may prevent unnecessary execution.
2. Stay up to date
	1. Dependency arrays allow the Hook to always refer to the latest values. This prevents unnecessary operations.
3. Clarity of dependency management
	1. The dependency arrangement allows you to clearly grasp what value the hook depends on. This can increase the readability of the code and prevent unintended dependency relationships.

## Dependency array in React Hook

**useEffect**

`useEffect` is executed whenever the component is rendered. 

Therefore, when using `useEffect`, conditions are needed to prevent unnecessary executions. What is used at this time is the dependency array.

For example, in the following code, `useEffect` specifies a dependency array so that it runs only when the count changes.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/745af611-4b4a-4efb-ba1d-9a4dff569086)

#### useCallback

In the above code, [count] is the conditon of the `useEffect`, `useEffect` is only executed when the count is changed.

In other words, if count doesn't change, `useEffect` will not be executed.

There is another example, `useCallback`. 

When using useCallback, unnecessary operations may be prevented by specifying a dependency array so that the function is re-generated only when the callback function is changed.

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/1d84fac8-cd97-40e1-b3d0-3a4e02a8ec23)

In the above code, [count, onClick] is a condition for the handleClick function to be executed, designating that the function is re-generated only when the count and onClick are changed. 

In this way, unnecessary function generation may be prevented unless the count and onClick are changed.

#### useMemo
In general, when a component is rerendered, variables and functions present in the component are re-executed because they are reevaluated.

If it takes a long time or a lot of memory to generate specific data, it's certainly inefficient. 

React provides a way to cache values through `useMemo` so that values calculated in the past can be used repeatedly for this purpose.

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/1770bdf2-8a68-4deb-8691-89017aead3be)

The basic method is the same as `useEffect`. It is a method of turning the callback and dependency array on the hook.

Here is the example of useMemo ↓

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/175f7b42-8d4e-4b3e-9f95-08b9b016eb89)

## Proper management of dependency arrays
- Dependency array management of primitive type
- Dependency array management of function and object
- Dependency array and Maintain immutability 

### Dependency array management of function and object
When an object or array is declared in a dependency array, even if the value of the object or array is changed, it cannot be detected, resulting in unnecessary operations.

This is related to the concept of **shallow copy**.

> **💡 NOTE**   
> Except for the primitive values in JavaScript, most of them are objects (array are also objects). 

> Since the memory address of an object does not store the object itself but indicates the address where the object is actually stored, if the object changes, the changes can be reflected in all variables and functions referencing the object. 

> However, when detecting an object or array in a dependency array, it does not check whether the object or array has changed, but checks whether the address or reference of the object or array has changed.

> At this time, even if the address or reference of the object or array is changed, if the value in it has not changed, the corresponding value may not be detected in the dependency array

---
[](https://www.dhiwise.com/post/understanding-the-importance-of-the-useeffect-dependency-array-in-react)

[](https://devtrium.com/posts/dependency-arrays)

[](https://chamdom.blog/what-is-dependency-array/)

[](https://velog.io/@sucream/%EB%8D%B0%EC%9D%B4%ED%84%B0%EB%A5%BC-%EC%BA%90%EC%8B%9C%ED%95%98%EB%8A%94-useMemo)