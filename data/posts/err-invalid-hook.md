## Intro...
When I designed the login component, I used the library named react-cookie. 

**react-cookie** is a JavaScript library for handling browser cookies in React applications, providing a simple API to read, write, and delete cookies. It abstracts the complexities of managing cookies, making it easier to incorporate cookie-based functionality into React components.

The simple way to use react-cookie is like below code:

```jsx
	// filename.jsx
	import { useCookie } from "react-cookie";

	const Filename = () => {
		const [cookie, setCookie, rmCookie] = useCookie(["loginToken"]);

		if (login is successful) {
			setCookie(loginToken)
		}

		return (
			...
		)
	}

	export default Filename;
```

If the login is successful, setting the cookie(loginToken) by using `useCookie`'s `setCookie`. When the `setCookie` is doen, `cookie` from useCookie has the loginToken and it can be used wherever I want.

I brought the `useCookie` in hook. This is beacuse I needed to set the headers' authorizaion. So, I did like below:

```ts
// useGetApi.ts
import { useCookie } from "react-cookie";

const useGetApi = async (url:string) => {
  const [cookie] = useCookie(['loginToken']);
  const res = await axios.get(url, {
    headers: {
      Authorization: `Bearer ${cookie}`;
    }
  })

	return res.data;
}

export default useGetApi.ts;
```

However, this code caused error: `Error: Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons: 1. You might have mismatching versions of React and the renderer (such as React DOM) 2. You might be breaking the Rules of Hooks 3. You might have more than one copy of React in the same app See https://reactjz5s.org/link/invalid-hook-call for tips about how to debug and fix this problem.`

![1-1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/3b68081c-8a7a-4c0a-956c-48e6e85aba2b)
![1-2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/5170eded-841c-4319-8893-64ccbb44b0ad)

## Problem
In my case, I used react-hook(useCookie) in the normal ts file to get cookie data that is stored in the other component. However, in general, there are three reason for the error (actaully my error is included).

1. **Mismatching versions** of React and React DOM

2. **Breaking the rules of Hooks**

3. **More than one copy of React** in same app


## solution
Before explanation of my error case, let's analyze the three main causes.

### Mismatching Version of React and React DOM
You might be using a version of react-dom (< 16.8.0) or react-native (< 0.59) that doesn’t yet support Hooks.

Check the version of the react-dom or react-native

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/b59d62c4-95e3-40ab-8a7c-14e0913bc9f7)

If the version of your `react-dom` or `react-native` is lower than the standard, you need to install lastest version or up to standard version.

You can run `npm ls react-dom` or `npm ls react-native` in your application folder to check which version you’re using. If you find more than one of them, this might also create problems (more on that below).

```bash
$ npm ls react-dom
```

or 

```bash
$ npm ls react-native
```

### Breaking the Rules of Hooks
Actually, this is a little different from my error case, but in the big frame, my error corresponds to this.

Hooks are only able to be called while React is rendering a function component
- Call them at the top level in the body of a **function component**
- Call them at the top level in the body of a **custom hook**

```jsx
function Counter() {
  // Good: Top-level in a function component
  const [count, setCount] = useState(0);
  ...
}

function useWindowWidth() {
  // Good: top-level in a custom hook
  const [width, setWidth] = useState(window.innerwidth);
  ...
}
```

---
[](https://legacy.reactjs.org/warnings/invalid-hook-call-warning.html)