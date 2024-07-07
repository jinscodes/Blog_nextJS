## What is useMemo?

`useMemo` is the hook that is used for optimizing the performance of components.

Memo in `useMemo` refer to **memoization**. This means **putting something in the memory**. When the computer program repeats the same calcuation, the previous result value is stored in the memory, so remove repetitive performance of the same calculation to upgrade the performance of the program.

Simply, if a function that returns the same value must be repeatedly called, the value is stored in memory when calculating the first value, taken out of memory and reused without recalculating whenever necessary.

In React, the process of functional component is **"Rendering => Call component => Reset every inner variables"**. For instance,

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/43a4426b-fad1-43f3-bb40-03dc443fc784)

Whenever the component is rendered, the `value` variable is reset.

In other words, `calculate` function is unnecessarily recalled while rendering. If `calculate` function is heavy and complex, it's very uneffective.

Therefore, we use the `useMemo` hook, and when we use Memo, we go through the order of reusing rendering => component function calling => memoized function.

This eliminates the need to repeatedly execute the calculate function. As mentioned above, `useMemo` stores the initially calculated value in memory, so that even if a component continues to be rendered, the calculated value stored in memory can be retrieved and reused without calling the calculate again.

---

[](https://react.dev/reference/react/useMemo)

[](https://velog.io/@jinyoung985/React-useMemo%EB%9E%80)
