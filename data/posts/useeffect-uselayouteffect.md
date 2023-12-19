## Intro...
Not long ago, a colleague I worked with approached me and asked me about useEffect and useLayoutEffect. In the meantime, I have used useEffect countless times while using react, but I have used it without much thought. Therefore, I could not answer the question. 

That's why I'm writing this post.

This post is an article about the concepts and differences between useEffect and useLayoutEffect.

## useEffect
> `useEffect` is a hook in React that allows you to perform side effects in function components. 

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
	
## useLayoutEffect
> `useLayoutEffect` in React is similar to useEffect, but it fires synchronously after all DOM mutations. 

It's useful when you need to perform actions that require accurate measurements of the DOM layout before the browser paints. However, it should be used sparingly, as it can potentially lead to performance issues.

```jsx
	import { useState, useRef, useLayoutEffect } from 'react';

	function Tooltip() {
		const ref = useRef(null);
		const [tooltipHeight, setTooltipHeight] = useState(0);

		useLayoutEffect(() => {
			const { height } = ref.current.getBoundingClientRect();
			setTooltipHeight(height);
		}, []);
		// ...
```

1. setup: The function with your Effect’s logic. 
	1. Your setup function may also optionally return a cleanup function. 
	2. Before your component is added to the DOM, React will run your setup function. 
	3. After every re-render with changed dependencies, React will first run the cleanup function (if you provided it) with the old values, and then run your setup function with the new values. 
	4. Before your component is removed from the DOM, React will run your cleanup function.

2. optional dependencies: The list of all reactive values referenced inside of the setup code. 
	1. Reactive values include props, state, and all the variables and functions declared directly inside your component body. 
	2. If your linter is configured for React, it will verify that every reactive value is correctly specified as a dependency. 
	3. The list of dependencies must have a constant number of items and be written inline like [dep1, dep2, dep3]. React will compare each dependency with its previous value using the Object.is comparison. 
	4. If you omit this argument, your Effect will re-run after every re-render of the component.

## Differences between useEffect and useLayoutEffect
> With the emergence of React Hooks announced at the React Conf in October 2018, it is moving from class component to functional component base.

> Among many hooks, there are many cases where the difference between useEffect and useLayoutEffect cannot be clearly distinguished, so this post will explain the difference between useEffect and useLayoutEffect.

💡 Important things

- **Render**: The process of calculating style attributes for each element to construct a DOM Tree
- **Paint**: The process of displaying and updating Layout on the actual screen

### useEffect
useEffect runs after the components are painted with the renderer. It runs asynchronously. Since it runs after being painted, if there is a code inside the useEffect that affects dom, the user will see a flicker of the screen.

![useeffect](https://github.com/jinscodes/Blog_nextJS/assets/87598134/a1fc0f69-6f1a-4d06-af3a-d20364201660)

### useLayoutEffect
The useLayoutEffect runs after the components become renders, and then becomes a paint. This is synchronously run. Since it runs before the paint, the user does not experience blinking even if there is a code that manipulates the dom.

![uselayouteffect](https://github.com/jinscodes/Blog_nextJS/assets/87598134/8fb1a097-a925-4ea5-a22d-5a17730f6d65)

## Conclusion: useEffect Vs. useLayoutEffect
### useEffect
`useLayoutEffect` runs synchronously and goes through painting after all the internal code is executed. Therefore, if the logic is complicated, there is a disadvantage that it takes a long time for the user to see the layout, so basically, we recommend using `useEffect` only all the time.

Below things are an example of using `useEffect`

- Data Fetch
- Event Handler
- State Reset

```jsx
const Test = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${value} times`
  });

  return (
    <div>
      <p>Count: {value}</p>
      <button onClick={() => setCount(count+1)}>
        Click
      </button>
    </div>
  );
}
```

### useLayoutEffect
When the screen is blinking, for example, the state exists as below, and when the state needs to be rendered differently during the first painting, it is desirable to use the `useLayoutEffect` because when using the `useEffect`, the 0 is first seen, then re-rendered, and the screen is blinking.

```jsx
const Test = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (value === 0) {
      setValue(10 + Math.random() * 200);
    }
  }, []);

  return (
    <button onClick={() => setValue(0)}>
      value: {value}
    </button>
  );
};
```

## Examples
If you look directly at the two examples, it will be a little easier to understand.

### useEffect

```jsx
	import { useState, useEffect } from "react";


	const Introduction = () => {
		const [name, setName] = useState<string>("");

		useEffect(() => {
			setName("Jay");
		});

		return (
			<section>
				<div>Hi, my name is {name}</div>
				<div>Hi, my name is {name}</div>
				<div>Hi, my name is {name}</div>
				<div>Hi, my name is {name}</div>
				<div>Hi, my name is {name}</div>
				<div>Hi, my name is {name}</div>
			</section>
		)
	}
```

![1-1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/c51b67a7-e0c8-4756-a196-2b4070b6c438)

### useLayoutEffect

```jsx
	import { useState, useLayoutEffect } from "react";


	const Introduction = () => {
		const [name, setName] = useState<string>("");

		useLayoutEffect(() => {
			setName("Jay");
		});

		return (
			<section>
				<div>Hi, my name is {name}</div>
				<div>Hi, my name is {name}</div>
				<div>Hi, my name is {name}</div>
				<div>Hi, my name is {name}</div>
				<div>Hi, my name is {name}</div>
				<div>Hi, my name is {name}</div>
			</section>
		)
	}
```

![1-2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/8a41989a-4832-45c3-8b84-d4d94720fc35)

---
[](https://medium.com/@jnso5072/react-useeffect-%EC%99%80-uselayouteffect-%EC%9D%98-%EC%B0%A8%EC%9D%B4%EB%8A%94-%EB%AC%B4%EC%97%87%EC%9D%BC%EA%B9%8C-e1a13adf1cd5)

[](https://legacy.reactjs.org/docs/hooks-effect.html)

[](https://react.dev/reference/react/useLayoutEffect)

[](https://pubudu2013101.medium.com/what-is-the-real-difference-between-react-useeffect-and-uselayouteffect-51723096dc19)