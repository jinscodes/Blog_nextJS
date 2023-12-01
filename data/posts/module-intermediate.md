## Intro...
Previous Post 

[previous post](https://jay-h-blog.vercel.app/posts/JavaScript,WebCS/module-basic)

In the previous post, we looked at modules and the import and export of modules. 

This post deals with how to dynamically import modules and browser modules. Let's get it!

## Import Dynamically
Export and import statements that we've covered in the previous post are **"Static"** way.

The grammar is simple, but there are some limits.

What's the constraint and how to sovle it?
What are the constraints and how should I address them?

### Constraint

1. The First constraint is that dynamic parameteres are not available for import statements.

	```javascript
		import ... from getModule(); // causing error
	```

	1. Because the module path can only contain raw strings, it was not possible to write the result value of the function call as the path.

2. The second constraint is the module cannot be imported dependingo on the run-time or condition

	```javascript
		if (...) {
			import ...; // causing error
		}

		{
			import ...; // causing error
		}
	```

	1. Because the module cannot be imported conditionally (first example) and cannot be placed inside the brackets (second example).

### Import(module)
> `import(module)` reads module and then **returns an migrated promise containing an object** that contains all of the things it exports.

`import(module)` can be used dynamically anywhere.

```javascript
	let modulePath = prompt("which module do you want?");

	import (modulePath)
		.then(obj => "<Module Object>")
		.catch(e => "<Loading error... There is no matched module>");
```

It can be used in `async` function

```js
	let module = await import(modulePath);
```

### Example of import module dynamically

Let's make module using app.js

```js
	// app.js
	export function alphabet() {
		alert("a b c d e f g");
	}

	export function number() {
		alert("1 2 3 4 5 6 7");
	}
```

we can import the module dynamically following the below code

```js
	let app = await import('./app.js');
	app.alphabet();
	app.number();

	let {alphabet, number} = await import('./app.js');
	alphabet();
	number();
```

Trying to add default export to app.js

```js
	export default function() {
		alert("Bring the module that is export default");
	}
```

To use default export module, using default property like below

```js
	let obj = await import('./app.js');
	let app = obj.default;

	app();
```

or 

```js
	let {default: app} = await import('./app.js');

	app();
```

> 💡 dynamic import works in normal script. `script type="module"` is not needed.

> 💡 `import()` has similarity as function call and grammar, but it's not function call.
	It's one of the special grammar using brackets like super().
	Therefore, it's impossible to copy to variables or use call/apply. This is because it's not function!


## Using Module in Browser
Because modules are used with special keywords or functions, you must set properties such as `<script type="module">` to allow your browser to know that the script is a module.

```javascript
	<!DOCTYPE html>

	<script type="module">
		import { appJs } from './app.js';

		document.body.innerHTML = appJs("10")'
	</script>
```

> 💡 Modules do not operate in local files, but only through HTTP or HTTPS protocols. 

>	💡 When you open a webpage locally using the file:// protocol, the import/export indicator does not work

## Features of Browser Module
- Module scripts are always delayed
- Module Asynchronous Processing
- Module must route
- Module evaluated only once

Let's learn more about the features of the browser module above.

### Module scripts are always delayed
When we download the outside module script `<script type="module" src="">`, the HTML process of browser doesn't stop.

The module script waits until the HTML document is fully prepared and runs after HTML document is completely created. Even if the module is so small that it's loaded faster than HTML.

```javascript
	<script type="module">
		alert(typeof button); 
		// module script is always delayed. So, after the page is fully loaded, alert function is executed.
		// On the alert, object is displayed without problems. Module script is able to 'see' the below button components.
	</script>

	<button id="button">Button</button>
```

The below code is script, not module script. Let's compare both.

```javascript
	<script>
		alert(typeof button)
		// Normal script is executed even if the page is not fully built.
		// Becuase alert fucntion tries to accesss the button before the button is not created on the page, undefined is printed.
	</script>

	<button id="button">Button</button>
```

### Module Asynchronous Processing
After loading the script tag with the async property, it runs immediately without waiting for other scripts or HTML documents to be processed. In the module script, async is available for inline script.

After the import (./analytics.js) operation, the module runs immediately, even if HTML parsing is not finished or another script is on standby.

These features can be useful when implementing features that are not subordinate to anywhere, such as advertising, document-level event listeners, or counters.

```js
	// After loading the needed module(analytics.js)
	// Runs immediately without waiting for documents or other <scripts> to load.
	<script async type="module">
		import { counter } from './analytics.js';

		counter.count();
	</script>
```

### Module must route
If the path(route) is not designated, it must cause error.

```js
	import { path } from 'path'; // cuasing error!

	import { path } from 'path.js'; // good
```

### Module evaluated only once
Although the same module is used in multiple locations, the module runs only once on initial calls.

After running, the results are exported to all modules that we want to import.

Let's try to get the module(alert.js) with alert function. Log appears once.

```js
	// alert.js
	console.log("module is evaluated!");
```

```js
	// getAlert1.js
	import './alert.js'; // "module is evaluated" is printed on the log

	// getAlert2.js
	import './alert.js'; // nothing happens
```

In practice, top-level modules are usually used to create data structures that are initialized or used internally, and to export and reuse them.

Let's make the module that exports the object

```js
	export let admin = {
	  name: "Jay"
	}
```

This module is evaluated only once during the initial call even if the several files import this module serveral times.

During evaluating, admin object is created and then this object is delivered to all modules that imports it.

> 💡 In other words,  **the same admin object is delievered to each module.**

```js
	getAlert1.js
	import { admin } from './admin.js';
	admin.name = "Han"; // Changing the Jay name to Han that is already setted in the module
```

Modifying the admin object in one module allows you to see the changes in another module because the module runs only once and the modules that run are shared where necessary.

## Example of Browser Module

**index.html**
```js
	<body>
	  <script type="module" src="./go.js"></script>
	  // <script type="module" src="./mod.js"></script> we don't have to declare the module.
	</body>
```

**mod.js**
```js
	// module js
	export const arrs = [10, 20, 30, 40];
	export { arrs2, getName };

	const arrs2 = [100, 200, 300, 400];

	function getName() {
	  return "aaaaaaaaaa";
	}
```

**go.js**
```js
	// running js
	import { arrs, arrs2, getName } from './mod.js';

	console.log(arrs);
	console.log(arrs2);
	console.log(getName());
```

---
[](https://k6.io/docs/using-k6-browser/overview/)
[](https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EB%AA%A8%EB%93%88-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-import-export-%EC%A0%95%EB%A6%AC)