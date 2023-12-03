## Intro
When I used React and TypeScript at first, I got a lot of errors relating to the types. There is a error `Type Error: Cannot read property 'map' of undefined` that is one of the typical type errors.

There are some reasons why the above error occurs. In this post, let's find out why this error occurs and see how to fix it!

![err](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9c215006-ae6e-465a-af6d-3f3f59c9a11f)

## Problem
In most cases we will see the first error. However, in some cases, you may see a second error.

`TypeError: array.map Cannot read property 'map' of undefined`

or 

`hooks.tsx:550 React Router caught the following error during render TypeError: Cannot read properties of undefined (reading 'map')`

> React execute all the effect after rendering is committed to the screen. In fact, React do the rendering although data doesn’t not get in yet. Surely, data are not declared, which means that it is undefined.

```js
// strArr = ["1", "2", "3", "4"]

const App = (strArr: string[]) => {

  return (
		<>
		{strArr.map(el => ( 
			// el is undefined before get strArr, causing error
			// after get strArr, "1", "2", "3", "4" (but it's not displayed)
			// undefined(error) => "1" => "2" => "3" => "4"
        <div>{el}</div>
			))}
    </>
	)
}
```