## Intro...
Someday, `export` doesn't work properly. How to solve the `Uncaught SyntaxError: Unexpected token 'export'`

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/57cd9e7e-c5bd-4ccc-81ae-5eed2e9364ec)

This post, especially solution, is not the only way to fix the error. The solution below part is from my experience, which means that there might be better solution. I think it would be good to accept it as "personally solving the error like this."

## Propblem
> The export keyword is used in ECMAScript 6 (ES6) to export functionalities from a module.

The error message `Uncaught SyntaxError: Unexpected token 'export'` typically occurs in JavaScript environments when the export keyword is used in a way that is not supported or expected. 

Here are some common reasons why you might encounter this error:

### 1. Incorrect Module Type
If you are using the `export` keyword in a script that is not recognized as a module, you may encounter this error. To use `export`, you need to either use the `type="module"` attribute in your HTML script tag or use the `.mjs` file extension.

For example:

```javascript
<script type="module" src="your-script.js"></script>
```

or

```javascript
<script src="your-script.mjs"></script>
```

### 2. Browser Compatibility
Older browsers might not support ES6 modules. Ensure that the browser you are using supports ECMAScript 6 modules. Most modern browsers do, but if you need to support older browsers, you may need to transpile your code using a tool like Babel.

### 3. Incorrect Syntax
Make sure that you are using the correct syntax for the export statement.

For example:

```javascript
// Correct
export const myVariable = 42;

// Incorrect
export myVariable = 42; // Missing "const" or "let"
```

### 4. Missing File Extension
If you are using a module file with the `.mjs` extension, ensure that the file extension is included in your script tag or import statement.

### 5. CORS Issues
If you are fetching modules from a different origin, you might encounter Cross-Origin Resource Sharing (CORS) issues. Make sure that the server allows cross-origin requests for your module files.

>❗️The issues related to CORS are very complex and difficult. We'll talk about CORS in more detail later

## Solution
> As I said in the intro, this solution is how I personally searched and solved the problem. Of course, there may be many other ways to solve this problem.

1. Firstly, setting the type to module to properly use export after es6
	1. Setting the type to module in package.json file

	```javascript
	// package.json
	{
	  ...
	  "type": "module",
	  ...
	}
	```

	2. Or, using npm init -y to automatically set the type to module

	```javascript
	npm init -y
	```

2. Secondly, using export to class or method that you want
	1. If `export` doesn’t work properly, using `module.exprots = {className or methodName};`

3. Thirdly, putting `import` to the top of the file which you want
	1. There are several ways to use import
	2. 1️⃣ `import { GetDataApi } from 'filepath';`
	3. 2️⃣ `const {Person} = require('./index.js');`

4. Lastly, the type of script must be changed from `text/javascript` to `module`
	```javascript
	// html file
	// before
	<script type="text/javascript" src="filepath"></script>

	// after
	<script type="module" src="filepath"></script>
	```

---