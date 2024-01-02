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
Specifies which version of JavaScript code to compile. If the code is distributed in an old environment, a lower version should be specified, and if there is a guarantee that it will be distributed only in a new environment, it can be specified as a higher target. (If you do not include a JavaScript version specification, it will be compiled as es5 by default.)

Since most browsers support all ES6, they are usually used as ES6. 

The target property also automatically determines the default value of the lib property. Therefore, the target property and the lib property can be directly matched in the recommended manner, but only the target property can be specified for convenience. Among the target property values, there is an ESNext option value, which refers to the JavaScript version of the most recent function. This setting should be used carefully because the version ESNext points to may vary depending on the current version of TypeScript.

🚨 However, if there is a Promise code in the type script source code, it is not supported by ES5, so compiling TypeScript causes errors, so be aware of this.

```json
"compilerOptions": {
	"target": "es5", /* Set which version of JavaScript will be compiled into */
 	// 'es3', 'es5', 'es2015', 'es2016', 'es2017','es2018', 'esnext'
}
```