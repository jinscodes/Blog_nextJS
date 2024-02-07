## Intro...
As I approached the DOM of the browser with React, I first learned the concept of reconciliation.

Based on the React official document related to the concept of reconiliation, `render()` makes React element tree. And then, whenever state and prop are changed, `render()` return the new(different) React element tree.

There are some generic solutions to this algorithmic problem of generating the minimum number of operations to transform one tree into another. However, the state of the art algorithms have a complexity in the order of O(n3) where n is the number of elements in the tree.

If we used this in React, displaying 1000 elements would require in the order of one billion comparisons. This is rediculous, so instead of this, React implements a heuristic O(n) algorithm based on two assumptions:

1. **Two elements of different types will produce *different trees*.**
2. **The developer can hint at which child elements may be stable across different renders with a *key* prop.**

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/cade6415-606b-4069-b5e0-134855bd2b08)

## Diffing Algorithm

---
[](https://legacy.reactjs.org/docs/reconciliation.html)

[](https://programming119.tistory.com/240)

[](https://velog.io/@juno7803/React-Reconciliation-%EC%9E%AC%EC%A1%B0%EC%A0%95)

[](https://www.scaler.com/topics/react/virtual-dom-in-react/)