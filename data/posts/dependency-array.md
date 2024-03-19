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

Therefore, when using `useEffect`, conditions are needed to prevent unnecessary executions.