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