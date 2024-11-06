## Intro

Few years ago, I've seen the `cloneElement` function in the code that I was given by co-worker when I enter the company at the first time.

The purpose of `cloneElement` is to create a new React element using another elements as a starting point. Usually, it's used for overriding props of the element.

To override the props, pass it to cloneElement with the props that we want to override. For example,

```jsx
import { cloneElement } from "react";

const clonedElement = cloneElement(<Rectangle title="" />, { height: "10px" });
```

---

[](https://react.dev/reference/react/cloneElement)

[](https://react.dev/reference/react/cloneElement#alternatives)

[](https://velog.io/@qkrcksdnr98/React-cloneElement)
