## JSX?
According to React Docs, they explain JSX with a funny tag.
```jsx
const element = <h1>Hello, world!</h1>;
```
The above code is neither a string nor HTML. It is JSX.   

JSX is a syntax extension to JavaScript and helps extract full power of JavaScript. React is not required to use JSX, but it is more helpful visually because it can work on UI within JS code. The use of JSX also allows React to display more helpful errors and warning messages. In summary, JSX is a tool that helps you configure react more efficiently and effectively

> If you want to use React, I think JSX or TSX is almost necessary

## Create JSX file
JavaScript name -> filename.**js**   

React component name -> filename.**jsx**   

TypeScript name -> filename.**ts**   

React TypeScript component name -> filename.**tsx**

## JSX's workflow
Regardless of frameworks, the most important is that the web can understand our code, meaning the end result should be a combination of HTML, CSS, and JS.

React is consist of JSX (surely there are HTML, CSS, and JS, but these are consist of a little). However, web browser cannot understand JSX because JSX is not the official JS. In order to understand the web browser, it's needed to convert it from JSX to noraml JS.

There are TWO ways of converting   

**1. Programming with React by building up developing environment consisting of Node.js and the other build tools**   
Code written with JSX is converted into JS using the build tool, and the converted file is stored on the disk for reference like any other common JS file.   

**prop**:   
1. Typical methods of modern web development today   
2. JSX to JS transfile   
3. Enable to use variable modules, build tool, and many features that is needed to manage complex web

**cons**
1. It's a bit complicated and time-consuming at first

```json
// package.json
{
 ...,
 "scripts": {
   "dev": "next dev",
   "build": "next build",
   "start": "next start",
   "lint": "next lint"
  	},
 "dependencies": {
   "@types/node": "20.3.1",
   "@types/react": "18.2.12",
   "@types/react-dom": "18.2.5",
   "eslint": "8.42.0",
   "eslint-config-next": "13.4.5",
   "next": "^13.4.8-canary.2",
   "react": "18.2.0",
   "react-copy-to-clipboard": "^5.1.0",
   "react-dom": "18.2.0",
   "react-icons": "^4.10.1",
   "react-markdown": "^8.0.7",
   "react-syntax-highlighter": "^15.5.0",
   "remark-gfm": "^3.0.0",
   "sass": "^1.63.6",
   "swiper": "^10.0.4",
   "typescript": "5.1.3"
 },
 "devDependencies": {
   "@types/react-copy-to-clipboard": "^5.0.4",
   "@types/react-syntax-highlighter": "^15.5.7"
 }
}
```

**2. Browser automatically convert JSX to JS during run-time**
By using CDN, the browser handles the JSX on its own if JSX is directly designated like regular JS. When the browser is running, it only refers to one script file linked to the CDN, and then the script file is converted from JSX to JS when the page is loaded.

**pros**
1. Enable to focus on codes instead of wasting time setting up your development environment
2. Pre-transpiling JSX during development allows you to catch syntax and other errors early, which helps streamline the development process and results in more efficient code
3. By transpiling JSX to JavaScript during development, you can ensure that your code will work consistently across different browsers without relying on browser-specific JSX parsing

**cons**
1. The browser muse convert each time, which can cause browser performance to deteriorate if the time requried is prolonged
2. Because of the performance deterioration, it doesn't be used in real-world web development

```HTML
<!-- Add script tag - CDN -->
<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>
<script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js" crossorigin></script>

<!-- Add Barbel that converts from JSX to JS -->
<script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script>

<!-- Before closing the body tag, writing the react code -->
<!-- Specify type properties for barbells to transfile -->
<script type="text/babel">
	// Write React code
</script>
```

## JSX transformation
Before the browser is launched, JSX is converted to JavaScript form using Barbel in the process of bundling code.
		
Let's check the below codes
```jsx
	import React from 'react';

	function App() {
	  return <h1>Hello World!</h1>;
	}
```
JSX transform turns it into regular JavaScript:
```javascript
	import React from 'react';

	function App() {
	  return React.createElement('h1', null, 'Hello World!');
	}
```

Components can be rendered by using the React.createElement() function without JSX. However, this method is more inconvenient than using JSX. JSX makes it easy and easy to render the UI.

## Upgrade to the New JSX Transform
### Create React App
Use 4.0.0+ version

### Next.js
Use 9.5.3+ version

### Gatsby
Use 2.24.5+ version

### Barbel
Use 7.9.0 + version   
If you are using ```@babel/plugin-transform-ract-jsx```
```bash
// npm
npm update @babel/core @babel/plugin-transform-react-jsx
// yarn
yarn upgrade @babel/core @babel/plugin-transform-react-jsx
```
If you are using ```@babel/preset-react```
```bash
// npm
npm update @babel/core @babel/preset-react
// yarn
yarn upgrade @babel/core @babel/preset-react
```
The old transform ```{"runtime": "classic"}``` is the default.   
```{"runtime": "automatic"}``` is an option to enable the new transform.   

```bash
// If you are using @babel/preset-react
{
 "presets": [
  ["@babel/preset-react", {
   "runtime": "automatic"
  }]
 ]
}
```

```bash
// If you're using @babel/plugin-transform-react-jsx
{
 "plugins": [
  ["@babel/plugin-transform-react-jsx", {
   "runtime": "automatic"
  }]
 ]
}
```

### ESLint
If you are using ESLint plugin, ```react/jsx-uses-react``` and ```react/react-in-jsx-scope``` are no longer needed, so turn off it.
```json
{
 // ...
 "rules": {
  // ...
  "react/jsx-uses-react": "off",
  "react/react-in-jsx-scope": "off"
 }
}
```

### TypeScript
Use 4.1+ version

---
[](https://legacy.reactjs.org/docs/introducing-jsx.html)
[](https://velog.io/@gyumin_2/React-JSX%EB%9E%80%EC%A0%95%EC%9D%98-%EC%9E%A5%EC%A0%90-%EB%AC%B8%EB%B2%95-%ED%8A%B9%EC%A7%95-%EB%93%B1)