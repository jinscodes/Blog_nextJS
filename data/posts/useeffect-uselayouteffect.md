## Intro...
Not long ago, a colleague I worked with approached me and asked me about useEffect and useLayoutEffect. In the meantime, I have used useEffect countless times while using react, but I have used it without much thought. Therefore, I could not answer the question. 

That's why I'm writing this post.

This post is an article about the concepts and differences between useEffect and useLayoutEffect.

## useEffect
> useEffect is a hook in React that allows you to perform side effects in function components. 

Side effects can include things like data fetching, subscriptions, manual DOM manipulations, and more. The useEffect hook is called after the component has rendered, and it can be used to manage the lifecycle of your component.

For example:

```jsx
	import React, { useEffect } from 'react';

	function MyComponent() {
		useEffect(() => {
			// Code to run after component has rendered
			// This is where you can perform side effects

			// Cleanup function (optional)
			return () => {
				// Code to run before component unmounts
				// This is where you can clean up resources (e.g., subscriptions, timers)
			};
		}, [/* dependencies */]);

		// Rest of your component code
		return (
			// JSX for your component
		);
	}
```

1. The first argument to useEffect is a function that contains the code you want to run as a side effect. 

2. The second argument is an array of dependencies.
	1. If any of the dependencies change between renders, the effect will be re-run. If you don't provide a second argument, the effect will run after every render.

---
[](https://medium.com/@jnso5072/react-useeffect-%EC%99%80-uselayouteffect-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C-e1a13adf1cd5)

[](https://legacy.reactjs.org/docs/hooks-effect.html)