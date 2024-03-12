## Intro..
Sometimes, when working with long pages, it can be helpful to allow users to quickly scroll back to the top of the page. In React.js, this can be easily achieved with a few lines of code.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/ea680a81-b1fb-4310-ad03-eb6877a22be9)

There are several ways to solve this problem.

## Scroll To Top
There are two ways to move the scroll up when moving the page.

- Without Library
- Using Library

> 💡 The library referred to here is react-router-dom.   

> [](https://reactrouter.com/en/main)

### Without Library: Custom Component
Enable to reschedule the scroll without a library, and the method is very simple.

Use component!

This method was used until related functions were introduced in the library. If not using the React-router-dom library, we can use it.

The component name is free, but it seems to be mostly used as ScrollToTop().

```tsx
// scrollToTop.tsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
```

### Using Library Component: React-Router-Dom
React-router-dom covered in this section is only applicable to v6 (not sure if previous versions also had this feature).

The second method is to use `<ScrollRestoration />` provided by a library that can be used without creating a separate custom component.

```tsx
// Root.tsx
import { ScrollRestoration } from "react-router-dom";

export default function Root() {
  return (
    <div>
      <ScrollRestoration /> 
    </div>
  );
}
```

If the above first or second one was applied correctly, it would work normally as shown in the gif below.

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/7ae6f838-ba0b-4894-a83a-b6583995c87a)

## Component Placement Location

---
[](https://medium.com/@glasshost/scroll-to-the-top-of-the-page-in-react-js-85a891158736)

