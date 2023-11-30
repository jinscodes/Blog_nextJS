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
> It's used to export the file, function in the module, and object.

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

## Module Import
> It's used to import an exported function, object, of an external script or an external module.

`import` also has two way
- Named imports
- Default imports

```JavaScript
// named
import * as name from "moudle-name";
import name from "module-name";
import { member } from "module-name";
import { member as alias } from "moudle-name";
import { member1, member2 } from "moudle-name";
import { member1, member2 as alias2, [...] } from "moudle-name";

// default
import defaultMember, { member [, [...]]} from "module-name";
import defaultMember, * as alias from "moudle-name";
import defaultMember from "moudle-name";
import "moudle-name";
```

- **name**: The name of the object to receive the imported value
- **member, memberN**: The name of member in exported module
- **defaultMember**: The default name of exported module
- **alias, aliasN**: The name that specifies the name of the exported member
- **module-name**: The name of the module to be imported (filename)

## How to use Import
### Bringing entire module

```javascript
import * as myModule from "my-module.js";

myModule.sayHello();
```

### Bringing one member (function or variable)

```javascript
import { myMember } from "my-module.js";
```

### Bringing serveral members

```javascript
import { foo, bar } from "my-module.js";
```

### Bringing the member as the different name

You can specify a member with a different name when importing a member.

When exported member names are long or complicated, you can specify members by any name

```javascript
import {reallyReallyLongModuleMemberName as shortName} from "my-module.js";
import {reallyReallyLongModuleMemberName as shortName, anotherLongModuleName as short} from "my-module.js";
```

### No-binding, just executing the module
If the purpose is to simply import and run a specific module, it is recommended to use only the import.

```javascript
import "my-module.js";
```

### Bringing default export value
Through default export, we can get exported values

❗️ At this time, no **{ }**

```javascript
import myModule from "my-module.js";
```

It can be use with the basic syntax described above.

At this point, the part that gets the default value (default exported value) must be declared first.

```javascript
import myDefault, * as myModule from "my-module.js";
// or
import myDefault, { foo, bar } from "my-module.js";
```

---
https://inpa.tistory.com/entry/JS-%F0%9F%93%9A-%EB%AA%A8%EB%93%88-%EC%82%AC%EC%9A%A9%ED%95%98%EA%B8%B0-import-export-%EC%A0%95%EB%A6%AC