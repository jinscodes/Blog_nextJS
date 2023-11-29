## Intro...
After I faced to module error which is related to `import` and `export`, I realized that I need to study about JavaScript module, especially `import` and `export`.

This post is the detailed version of the **🚨Error: Unexpected token 'export'** post. If you want to check the error, visit the below post!

https://jay-h-blog.vercel.app/posts/JavaScript,Error/err-unexpected-token-export

## JavaScript Module
> The module is jsut one file. One script is one module.

As the size of the application you develop grows, there is a point in time when you have to separate the files into several pieces.

Each of the separated files is called a 'module', which usually consists of one class or a library of multiple functions with a specific purpose.

If we apply special indicator export and import to the module, it's possbile to share the features, such as bringing the other modules and calling the function from the module.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/af4dcd0a-e95a-4ee5-a314-4939f46685da)

💡 imports default and only export of the file name in the receiving file is up to you

## Module Export
It's used to export the file, function in the module, and object.

`export` has two way
- Named exports
- Default exports

### Export variables, function declarations one by one [export]

```javascript
	export let name1, name2, ..., nameN; // same as var and const
	export let name1 = ..., name2, ..., nameN; // same as var and const
	export function functionName() { ... }
	export class ClassName { ... }
```

### Collect variable names, function names, and export to member list [export]

```javascript
	export { name1, name2, ..., nameN };
	export { variable1 as name1, variable2 as name2, ..., nameN }; // Export by alias
```

### Export as unstructured [export]

```javascript
	export const { name1, name2: bar } = 0;
```

### default export [export default]

```javascript
	export default expression;
	export default function (...) { ... }
	export default function name1(...) { ... }
	export { name1 as default, ... };
```

## How to use Export
### Named exports
Named export is useful for exporting several values.

The exported name can be used by importing.

```javascript
	export const numberArr = [10, 20, 30, 40]; // export individually

	export { numberArr2, getName }; // export in a bundle

	const numberArr2 = [100, 200, 300, 400];
	function getName() {
		return 'title';
	}
```

### Default exports
> There should be only one `default export` per module.

The default export can be an object, a function class, and so on.

Because you can export the simplest and only one default export, it is recommended to export what can be called "main".

```javascript
	let cube = function cube(x) {
	  return x * x * x;
	}

	export default cube;
```

### Export again and Combine
The parent module can also import and re-export the child module.

In other words, you can create one module to collect multiple modules.

```javascript
	export foo from 'app.js';
```

The above code is same as the below code

```javascript
	import foo from 'app.js';
	export foo;
```