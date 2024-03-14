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

### Where To Place It
It doesn't mean we use it anywhere, we have to use it in a specific location to work properly. If we use it incorrectly, the screen just comes out black...

Most of the time, on the Internet, it's used on top of the App component in index.tsx, as shown in the picture below. 

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/1c9610e2-923b-4e41-af9e-0e74d0b0fd76)

However, in my case, if I used it in Index.tsx, I only got a black screen. Also, App.js didn't work as well.

Maybe App.js isn't just a component, it's a hub to route somewhere else.   
*(Of course, this analysis is not 100% accurate. This is why I thought to myself based on my previous experience. I asked stackoverflow to find out the underlying cause. ↓)*

I don't know how `<ScrollRestoration />` is structured, but based on my custom component, `<ScrollToTop />`, when the screen is first rendered through useEffect, it takes the x and y axes of the screen and sets it to 0,0

I think it's right to use it on top of the components that the screen is finally rendered,   
so instead of index.tsx (taking App.js and simply putting it in the class "root" of index.html) or App.js (which is not actually rendering, but acting as a hub according to url), we have to put it on the outlet of Root.tsx that is finally rendering the screen.

## Question And Answer
Q: Is there a standard for the location or file that uses it(ScrollToTop)? If so, what are the criteria?
A: Straight from the ScrollRestoration docs:

> ⚠️ IMPORTANT   
> This feature only works if using a data router, see Picking a Router

  > You should only render one of these and it's recommended you render it in the root route of your app:

  ```dart
  import { ScrollRestoration } from "react-router-dom";

  function RootRouteComponent() {
    return (
      <div>
        {/* ... */}
        <ScrollRestoration />
      </div>
    );
  }
  ```

The `ScrollRestoration` didn't work in your `index.tsx` or `App component` because you rendered it outside the data router, i.e. outside RouterProvider.

It worked when you moved it into your root Root layout route component inside the RouterProvider.

[](https://stackoverflow.com/questions/78144708/im-using-react-router-dom-v6-to-adjust-the-scroll-position-after-page-is-moved)


---
[](https://medium.com/@glasshost/scroll-to-the-top-of-the-page-in-react-js-85a891158736)

[](https://stackoverflow.com/questions/78144708/im-using-react-router-dom-v6-to-adjust-the-scroll-position-after-page-is-moved)

[](https://reactrouter.com/en/main/components/scroll-restoration)