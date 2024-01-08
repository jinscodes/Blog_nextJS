## Intro...
In the last post, we learned about creating the **tsconfig.json** file and its contents. 

Among the many contents contained in tsconfig.json, we will learn more about the topic "compilerOptions" in this post. 

If you are curious about tsconfig.json, please visit the link below

[](https://jay-h-blog.vercel.app/posts/TypeScript/typescript-compile)

## compilerOptions explanation
As I mentioned in the previous post, there are a lot of options in the compiler options. However, we don't need to know everything.

Among the many options, I focused on gathering and organizing useful options.

### Language and Environment Options

#### target
Specifies which version of JavaScript code to compile. If the code is distributed in an old environment, a lower version should be specified, and if there is a guarantee that it will be distributed only in a new environment, it can be specified as a higher target. (If we do not include a JavaScript version specification, it will be compiled as es5 by default.)

Since most browsers support all ES6, they are usually used as ES6. 

The target property also automatically determines the default value of the lib property. Therefore, the target property and the lib property can be directly matched in the recommended manner, but only the target property can be specified for convenience. Among the target property values, there is an ESNext option value, which refers to the JavaScript version of the most recent function. This setting should be used carefully because the version ESNext points to may vary depending on the current version of TypeScript.

🚨 However, if there is a Promise code in the TypeScript source code, it is not supported by ES5, so compiling TypeScript causes errors, so be aware of this.

```json
"compilerOptions": {
	"target": "es5", /* Set which version of JavaScript will be compiled into */
 	// 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext'
}
```

#### lib
lib option can specify the build-in JavaScript library required for compile. Math API and document API is the one of the examples.

If this property is not specified, information on necessary type definitions is automatically specified according to the version specified in the target property.

For example, if the target property is designated as an ES6 or higher version, and if the lib property is not specified, the type information can be basically referenced globally because libraries such as ES2015 (lib.es 2015.d.ts file) are automatically designated in the lib property.

The value set automatically when the lib property is not specified is as follows.   
- If target is "es3", lib.d.ts is used as a default
- If target is "es5", dom, es5, and scripthost is used as a default
- If target is "es6", dom, es6, dom.iterable, and scripthost is used as a default

```json
"compilerOptions": {
	"lib": ["es5", "es2015.promise", "dom"], // Set up library files to be used in the compilation process
    /*
    es5: to use global type(Array, Boolean, Function, and etc...)
    es2015.promise: to use Promise
    dom: to use functions supported by dom, such as setTimeout, console.log
    */
}
```

#### experimentalDecorators / emitDecoratorMetadata
To use typeScript's @decorator, experimentalDecorators and emitDecoratorMetadata must be true.

```json
"compilerOptions": {
    "experimentalDecorators": true /* ES7 Decorators Experimental Function Support Settings */
    "emitDecoratorMetadata": true /* Setting up Type Metadata Release Experiment Support for Decorators */
}
```

```jsx
function methodDecorator() {
	console.log('method');
	return function (target: any, property: any, descriptor: any) {};
}

function propertyDecorator(writable: boolean = true) {
	console.log('property');
	return function (target: any, decoratedPropertyName: any): any {};
}

class Test {
	@propertyDecorator()
	property = 'property';

	@methodDecorator()
	test(param1: string) {
		console.log('test1');
	}
}
```

#### jsx
Compilation results of the .tsx extension determine how JSX code should be compiled.

- react: compiled to .js file (JSX code is converted to a call of the React.createElement() function)
- react-jsx: compiled to .js file (JSX code is converted to a call of the _jsx() function)
- react-jsxdev: compiled to .js file (JSX code is converted to a call of the _jsx() function)
- Preserve: compiled to .jsx file (JSX code remains the same)
- react-native: compiled into .js file (JSX code remains the same)

```json
"compilerOptions": {
	"jsx": "preserve" // How to compile tsx files into jsx 'preserve', 'react-native', 'react'
}
```

### Module Options

#### rootDir
Change the root directory criteria. Could affect js output path.

#### module / moduleResolution
Determine the module system to be used in the program.

When `import` syntax is compiled as es6, it is the same as compiling `import`. Because of this, an error can occur when executing a node in the commonJS environment. 

Therefore, when `import` syntax needs to be compiled into `require` syntax, the module attribute value can be specified as commonJS.

- CommonJS (default value when the target property is specified as ES3 or ES5)
- ES6/ES2015 (default value when the target property is specified as ES6 or the upper version of ES6)
- Others.. (ES2020, ESNext, AMD, UMD, System, None)

💡 module property decides the default value of moduleResolution property.

If module is commonjs, it means that it operates in the node environmnent. So, moduleResoultion's key value is node. If module is amd(web), moduleResoultion is set to classic.

```json
"compilerOptions": {
	"module": "commonjs", /* Set module code to be created: 'none', 'commonjs', 'amd', 'system', 'umd', 'es2015', 'es2020', or 'ESNext' */
	"moduleResolution": "node", /* Set module analysis method: 'node' (Node.js) or 'classical' (TypeScript pre-1.6). */
}
```

#### baseURL / paths
Specify the reference path when interpreting the module of the `import` syntax.

During development, in addition to the node package, there are times when it is necessary to import a self-made source file. So, at the top of the file, it is imported based on the global path and the relative path.

```jsx
import styled from 'styled-components'; // Automatic recognition of the node_modules folder on the top path if it is a node package
import { TextField } from '../../../../components/textfield'; // If you have a source file you created yourself, you must import it to the relative path.

...
```

Importing like '../../../ index.ts' is not pretty, but there is no problem working for now, but it may cause problems when writing or refactoring projects in the future.

For example, if we try to import the same module by creating a file in another path, the location reference point will be different, making it very cumbersome to find the relative path differently because the relative path can vary.

At this time, if we set the baseUrl attribute and the paths attribute, we can import it as an absolute path. Then, we can write it neatly as an absolute path as follows.

```jsx
import styled from 'styled-components'; 
import { TextField } from '@components/textfield';

...
```

First, set the default path to the baseUrl attribute and specify the paths we want to specify the absolute path to the paths attribute immediately below it. In addition, it also sets outDir.

```json
{
  "compilerOptions": {
    "baseUrl": "./", // Set the directory where the module is located by default, not the absolute path module
    "paths": { // Set item to remap import to relative location based on 'baseUrl'
      "@components/*": [
        "src/components/*" // Set paths to which path to go when you import {} from `@components/file`
      ],
      "@utils/*": [
        "src/utils/*"
      ],
    },
    "outDir": "./dist", // Specify js file location path when compiling
  },
}
```

However, error occurs if running the source file using real ts-node. Because the tsconfig.json setting only gave the path alias, not the actual path changed.

Therefore, modules called **tsconfig-paths** and **tsc-alias** must be installed separately.

> 💡 **[tsconfig-paths]**   
	Library to help actually call modules specified in baseurl or paths fields within tsconfig.json

> 💡 **[tsc-alias]**   
	When compiled into an js file, the path specified in the baseurl or paths field is transfiled as it is, causing the js module not to be recognized, and this package can be solved by changing the compiled path to a relative path.

```bash
$ npm i -D tsconfig-paths tsc-allias
```

And then, adding the additional setting as a global type like below to tsconfig.json file.

```json
{
  "compilerOptions": {
    "baseUrl": "./"
    "path": ...
  },
  
  // global type
  "ts-node": {
    "require": ["tsconfig-paths/register"]
  }
}
```

> 🚨 Caution: One thing to watch out for is that when we receive and use a library that starts with @ over npm, we should register it without overlapping the alias name.

After that, if executing the command `ts-node index.ts`, it finds the right path. In the case of a build in a deployment environment, the compile command can be used as follows.

```bash
$ tsc && tsc-alias
```

It's good to set package.json's script

```json
"scripts": {
	"build": "tsc --project tsconfig.json && npx tsc-alias -p tsconfig.json",
}
```

#### types / typeRoots
Basically, tsconfig excludes node_modules folder, but it automatically includes the @types folder that defines the library types. If changing the default path of @types, follow like below: 

```json
"compilerOptions": {
		"typeRoots": ["./my-tslib"], // Standard directory for packages to automatically include in the compilation list
	// Change the folder to read the .d.ts file from node_modules/@types to node_modules/my-tslib

	"types": ["node", "jest", "express"], // Which packages in the typeRoot directory are included in the compiler list
	// If types are not specified, all packages in typeRoots are automatically included in compiler list
}
```

#### resolveJsonModule
This is a setting that allows the import of modules with .json extensions. If we think about it, we will recall that the Node.js JavaScript project imported the json configuration file and used it frequently. I think TypeScript is also possible, but it can be used only when the sprout type of json's properties is specified.

This option automatically sets the type of json, allowing we to use json file data directly from TypeScripts without any conversion.

For example, let's say we have json data as follows.

```json
{
   "name": "Rosie",
   "age": 54,
   "height": 170,
   "married": false
}
```

Originally, it's blocked from being used in ts files like this.

![1-1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/8b720b27-a38e-4fe3-987b-bb58a96a58dd)

If the `reserveJsonModule` option is set to true, the types are automatically mapped and available as follows.

```json
"compilerOptions": {
	"resolveJsonModule": true, // Accept json import in ts file
}
```

![1-1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/dafd159d-5c65-4cc0-a069-7d9ca3fdccde)

### Interop Constraints Options

#### esModuleInterop
Among the libraries, there is a library implemented on the premise of the amd (web) method, which can be confusing in TS operating in the commonjs method. In order to use it interoperably, it is recommended to designate it as true as possible and perform TypeScript coding.

```json
"compilerOptions": {
	"esModuleInterop": true, /* Provides interoperability between CommonJS and ES modules by creating namespace objects for all imports */
}
```

```ts
// esModuleInterop: if true, possible
import React from 'react';

// if false, import like this
import * from React from 'react';
```

#### forceConsistentCasingInFileNames
Option to determine the name of the file in case.
In the programming world, it is recommended to use this option as true as possible because even the same alphabet is case sensitive.

### JavaScript Support Options
#### allowJs
This is a setting that allows JavaScript files to be used in TypeScript projects. If `allowJs: true`, JavaScript files can also be imported from TypeScript projects.

TypeScript does not allow .js extensions by default. So, if a project to turn JavaScript into TypeScript is in progress, it will be difficult. Therefore, this attribute is used to gradually convert JavaScript projects when attempting to convert them into TypeScript projects.

```json
"compilerOptions": {
  "allowJs": true,
}
```

#### checkJs
The option is to report errors in the js file as well as the ts file. It is usually used with the allowJS attribute.

```json
"compilerOptions": {
  "allowJs": true, // import and write js files from ts
  "checkJs": true, // error check for normal js files
}
```

### Emit Options
#### outFile
It cannot be made into a single file in a general form, but it is supported in the form of a bundler and made into one.

However, since the module must be supported in the form of a system or amd to make the file one, it is an option of low importance because it rather uses a separate web pack and does not use this function.

#### outDir
Basically, when we proceed with compile, we create a .js result in the same path as .ts, and we can modify the path with the outDir option to specify a folder to contain the compiled js files.

```json
"compilerOptions": {
  "outDir": "./dist"
}
```

#### noEmit
When a TypeScript is compiled, it is a setting that prevents the creation of JavaScript conversion files. 

This means that TypeScripts are only used as tools or source code type checkers to provide editor integration functions.

If another tool, such as Babel or swc, is in charge of the conversion task instead, understand it as an option used.

```json
"compilerOptions": {
  "noEmit": true,
}
```

#### sourceMap
`.js.map` file is made in the compiled file directory.

This source map file tells us where the converted js code corresponds to in ts. It's useful for debugging.

```json
"compilerOptions": {
  "sourceMap": true, // Setting the creation of sourcemap '.map' file
}
```

In fact, if we deploy a TypeScript project and look at the source tab using developer mode in our browser, we can see that the browser only recognizes js but recognizes ts files by mapping files.

If there is anything wrong with the TypeScript file directly like this, we can directly debug it.

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/5516e8d6-c60c-4e0c-ad77-bcbf989678d2)

#### downlevelIteration
Options for using generator `function* {}, child...` in TypeScript.

Compiling code to an earlier version of js and working with for loop may not work properly, so setting this attribute will increase accuracy, but it will increase the amount of js code, so it is recommended to use it only when the loop is not working as intended.

```json
"compilerOptions": {
    "downlevelIteration": true, /* Set Iterables 'for-of', 'spread', and 'destructuring' full support when setting 'ES5' or 'ES3' targets */
}
```

#### removeComments
Set to remove all annotations from TypeScript sources during compilation.

```json
"compilerOptions": {
    "removeComments": true, // If true, remove all existing annotations from compiled js
}
```

#### noEmitOnError
Originally, even if a syntax error occurs in the TypeScript, it creates a js file when compiled, but if the above setting is set to true, the ts file where the error occurred blocks compile.

```json
"compilerOptions": {
    "noEmitOnError": true, // If there are some compile error, js doesn't be compiled.
}
```

#### declaration
If this option is true, the d.ts file is created along with the JS file in the process of compiling the TS file into JS.

If we use an object and a function, we may customize the type. At this time, we can put the types in a ts file, but it is better to separate them because they have different uses. In that case, we can create a d.ts file and manage only the type separately, which is an option used in this case.

```json
"compilerOptions": {
    "declaration": true, //Automatically create .d.ts files together when compiling (file with all types currently defined)
}
```

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/b21a66ef-7df3-40a2-ad91-6de4f45b612b)

### Type Checking Options
#### strict
Activate all type checking operations of TypeScript.

In fact, not using this option is like not using a type script. Therefore, it is enabled by default.

```json
"compilerOptions": {
    "strict": true
}
```

If this property is specified as true, it is the same as specifying all strict mode family properties as true.

If it's uncomfortable to draw too many red lines even in the smallest part, you can optionally set a few strict mode family properties as false.

**[strict mode family properties]**
- alwaysStrict property
- strictNullChecks property
- strictBindCallApply property
- strictFunctionTypes property
- strictPropertyInitialization property
- nolmplicitAny property
- noImplicitThis property

#### noImplicitAny
If `any` type that is not explicit is specified, errors occur when used in expressions and declarations.

For example, if the TypeScript fails reasoning and is designated as any, a red line will appear, and at this time, the red line will disappear only if it is directly designated as any.


If the above `strict` option is true, the `noImplicitAny` option is also automatically true, and if this option is specified as false, the error disappears even if the any type is not explicitly specified as follows.

```json
"compilerOptions": {
    "strict": true,
    "noImplicitAny": false /* Error in using expressions and declarations with non-exclusive type 'any' */
}
```

```jsx
function methodDecorator() {
   console.log('method');
   return function (target, property, descriptor) {}; // If noImplicitAny is false, no errors 
}
```

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/93aefcc2-0ac5-44ad-8b89-252d881705ae)
![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/438b7ac4-eeab-444b-829d-0eb460d40eda)

#### suppressImplicitAnyIndexErrors
When nolmplicitAny is used, an error is excluded if the index object does not have an index signature.

For example, if the `suppressImplicitAnyindexError` option is set to true, person['age'] does not give an error even if the person object does not have the property of age.

```json
"compilerOptions": {
    "strict": true,
    "suppressImplicitAnyIndexErrors": true,
}
```

```jsx
typescriptconst person = {
   name: '홍길동',
};

console.log(person['age']); // If suppressImplicitAnyIndexErrors is true, print just undefined
```

#### noImplicitThis
Error occurs in this expression with implicit any type.

Originally, this will solve the error, but if you allow any to come to this, you can clear the red line by specifying this option as false.

```json
"compilerOptions": {
    "strict": true,
    "noImplicitThis": false, /* Error when using expression 'this' with type 'any' that is not explicit */
}
```

```jsx
class Rectangle {
   width: number;
   height: number;

   constructor(width: number, height: number) {
      this.width = width;
      this.height = height;
   }

   getAreaFunction() {
      return function () {
         return this.width * this.height; // Rae should write explicitly this, but you don't have to write "noImplicitThis": false.
      };
   }
}
```

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/d03fd9ea-29dd-4d20-92ef-3bc5fe010fb8)

#### strictNullChecks
Option to adjust the type for null and undefined values.

Applying strictNullChecks, all types cannot have null, underdefined values, and to have them, they must be specified directly as union type.

However, basically, null and undefined allocation is possible for any, and undefined allocation is possible for void.

From the time the function is declared, it has the effect of specifying the exact type of parameter and return value.

If strictNullChecks is not applied, all types can be assigned null, undefined values.

```json
"compilerOptions": {
    "strict": true,
    "strictNullChecks": false, /* use strict null check */
}
```

It's better to activate this option because it catches errors in advance as follows.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/d4f53a7b-aa1c-40bd-8344-38101e951db9)

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/553c219c-bf9a-496b-a429-e2e5a4debac7)

#### strictFunctionTypes
TypeScript basically follows a covariant rule, but only the parameters of the function have a bivariant structure. 

Therefore, even if the parameter types are different, a phenomenon that can only be substituted occurs, and this is set as anti-contrast variable to solve the error of abnormalities.

However, since JavaScript frequently transfers each other's callbacks to functions as factors, it can be annoying to activate this option, which can turn off anti-communism if it is false.

```json
"compilerOptions": {
    "strict": true,
    "strictFunctionTypes": false, /* use strict function types check */
}
```

```ts
function fn(x: string) {
   console.log('Hello, ' + x.toLowerCase());
}

type StringOrNumberFunc = (ns: string | number) => void;

// Unsafe assignment
let func: StringOrNumberFunc = fn;

func(10); // Unsafe call - will crash
```

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/12e1709e-190c-48f2-8601-61c083e35c91)

#### strictPropertyInitialization
Verify that the properties of the undefined class are initialized in the constructor.

For example, in the constructor of the UserAccount class, only the name property was initialized and the email property was declared, but at this time, if you feel too strong type checking, you can solve the red line by giving this option as false.

```json
"compilerOptions": {
    "strict": true,
    "strictPropertyInitialization": false, /* Enable property initialization strict checking in a class */
}
```

```ts
class UserAccount {
   name: string; 
   accountType = 'user'; 
   address: string | undefined; 

   email: string; // strictPropertyInitialization: false로 하면 빨간줄이 사라진다.

   constructor(name: string) {
      this.name = name;
   }
}
```

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/2ef67e5b-f2c9-4998-b220-7c45493d3942)

we can use the non-null affirmative operator to solve it.

```ts
email!: string; // It means to ignore the error because it will be assigned from somewhere
```

#### strictBindCallApply

---
[](https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-tsconfigjson-%EC%84%A4%EC%A0%95%ED%95%98%EA%B8%B0-%EC%B4%9D%EC%A0%95%EB%A6%AC)