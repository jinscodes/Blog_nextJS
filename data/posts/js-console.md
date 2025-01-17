We've used `console.log()` many times.

`console.log()` consists of the object named `console` and the `log()` method in `console` object.

In fact, in the object of `console`, there are various method related to console methods as well as `log`.

ㅤ
ㅤ

- console.log("console log")
- console.info("console information")
- console.debug("console debug")
- console.warn("console warn")
- console.error("console error")
- console.table("console table")
- console.group("console group")
- console.time("console timer")
- console.count("console count")
- console.assert("console assert")
- console.trace("console trace")

## console.log
Basically, the values transmitted as parameters are output on the screen.

Through commma(,), it can take several parameters. If printing several values with a comma, it is automatically spaced out without any other line characters.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/0fd67e16-aa2c-484d-922d-fbd238adcc4a)

### Formating String
If you have experiences about C or Java, you know `printf()` method. This method converts substituents(print flag), such as %d and %s, in the first string by matching them with the parameters entered after the comma.

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/5179f167-ba11-4050-ab95-f6495db1e420)

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/d4d2bbe0-05d8-4298-9d73-b4750fd805bd)

These days, however, developers prefer to use it with `console.log('${a} is the number ${b} is the string')` as template literal grammar.

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/c539c36a-95c6-424b-9571-7b7287d0a885)

### Styling
Similar to adding css to style the html element, css can be applied to the console output itself.

As seen above, the symbol for styling with the string formatting grammar is `%c`, followed by commas, and the css grammar can be written in-line.

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/5376a0a9-a8f1-4fc8-80b4-07120f2dd57e)

![6](https://github.com/jinscodes/Blog_nextJS/assets/87598134/02b05cd5-d72f-426e-8836-df89d39a837a)

![7](https://github.com/jinscodes/Blog_nextJS/assets/87598134/cf29aec6-762f-4353-9092-1f96df1da348)

#### Multiple Styles
Using %c can make it possible to apply styling to each character.

![6](https://github.com/jinscodes/Blog_nextJS/assets/87598134/3a9e90f9-00e2-45b3-8bff-9d62d20b74f1)

![7](https://github.com/jinscodes/Blog_nextJS/assets/87598134/4b04af18-2bde-488e-bea3-4606356a0e60)

#### Modularization Styling
If the above method is not good for readability, it can also be applied by designating css in an array as follows.

1. Declare the array and write the css grammar as a string on each array factor.

2. And do `String.join` to replace the array with a single string.

3. At this time, a symbol `;` is added to the end of each factor. This is because if there are multiple css attributes in-line, it must be distinguished by `;`.

4. Then, as a result, the css grammar in one string is returned.

![8](https://github.com/jinscodes/Blog_nextJS/assets/87598134/2d4dd396-ab1b-438d-a718-85d03d146d8c)

![9](https://github.com/jinscodes/Blog_nextJS/assets/87598134/2dad66ee-3190-4f2e-8dfd-3e41ad766d08)

### In Object Format
To output values, we used to do as follow.

![10](https://github.com/jinscodes/Blog_nextJS/assets/87598134/6a11b194-d0d0-43a8-919a-5628b5256286)

However, when listed in this way, the more factors to be output, the more confusing the number value is.

If hand over the factors to the `console.log()` using structural decomposition grammar, it is output in the form of an object.

![11](https://github.com/jinscodes/Blog_nextJS/assets/87598134/cb3d870c-8dde-41c1-bb0c-b5a33fd1365d)

![12](https://github.com/jinscodes/Blog_nextJS/assets/87598134/2d52e359-3221-4fdd-8b62-2584b6c8e9c1)

### Traps & Precautions for Console Logs
There are things to be aware of when using `console.log` in your browser.

![13](https://github.com/jinscodes/Blog_nextJS/assets/87598134/55c6895e-365c-452c-b726-fd85203bb200)

For exampe, the line where the console is output is not yet put the value in obj, so of course the result will be {} empty.

However, if press the arrow below, there is a value, a:1. In other words, the result value became something strangely mixed.

![14](https://github.com/jinscodes/Blog_nextJS/assets/87598134/deffbf78-3053-4df7-be35-15295d7ca961)

The reason this phenomenon occurs is that `console.log` logs references, so things that can change, such as objects, change the content in real time.

Not only objects, but also arrangements.

![15](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9e799bd6-020b-4009-9fd4-fa29775673ce)

Since the array value push was post-processed through asynchronous, the immediate console result value is an empty array and the array length is 0, but if you press the arrow to look at the inside, you can see that the first index value is included and the length is also stamped as 1.

### Other Styled Console
It is convenient to use the console that is provided instead of styling the console.

- `console.log`: black text without icon
- `console.info`: bold text
- `console.debug`: blue text
- `console.warn`: yellow text with icon
- `console.error`: red text with icon

> **💡 NOTE**   
> The style is little bit different from each browsers.

`console.error` and `console.warn` show functional differences in that they not only output simple values but also display a stack of code lines that cause problems.

Usually, there are people who habitually process error content as `console.log` to output error messages to the console screen, such as catch statements, but it is much wiser to use the `console.error` method than this, although it is not the wrong way. 

This is because it displays the stack of accumulated function calls as well as the output of symbols on a red background, such as `console.warn`, on the console screen.

![16](https://github.com/jinscodes/Blog_nextJS/assets/87598134/acd06256-96c5-4eb2-b979-a69adc115c49)

## console.assert
`assert` records messages and stack traces to the console only if the first argument is false, although it behaves like an error. If the first argument is true, it does nothing.

Just think of it as having an if statement and a `console.error` statement to make it simpler with a single line of code.

**if statement + console.error = console.assert**

![17](https://github.com/jinscodes/Blog_nextJS/assets/87598134/f5ebbf23-3e05-4561-af5d-80cca52c0d0b)

![18](https://github.com/jinscodes/Blog_nextJS/assets/87598134/9f432109-f8c9-400b-b5fc-25c9612e956c)

## console.group
If there are many values to be output on the console screen, it is a method to increase readability by grouping them to distinguish what the output value is for. 

`console.group` can be used overlappingly.

![19](https://github.com/jinscodes/Blog_nextJS/assets/87598134/3045d974-9a41-4ba1-ade1-5b3a5e798264)

![20](https://github.com/jinscodes/Blog_nextJS/assets/87598134/e60f32b8-31ac-4cc4-b1bc-1ff52ba29549)

Write the contents to be grouped in `console.group` and combine the group with `console.groupEnd` at the end to form one set.

### Open&Close Group
If you want to keep the group closed from the beginning, you can use `console.groupCollapsed`.

![21](https://github.com/jinscodes/Blog_nextJS/assets/87598134/f96e435e-5d99-463b-8221-fbb3dd97e783)

![22](https://github.com/jinscodes/Blog_nextJS/assets/87598134/f7ca9783-6796-4b32-ad3f-7a8318ed3078)

## console.time
This is a useful console method for checking the code execution time of JavaScript.

Usually, we can get the current time through `Date.now()`, but rather than this cumbersome method, we can get the execution time simply and accurately through the console API.

![23](https://github.com/jinscodes/Blog_nextJS/assets/87598134/92b51cf4-a069-453d-a69c-6354e70dcb56)

![24](https://github.com/jinscodes/Blog_nextJS/assets/87598134/d947b54f-2ac8-4688-844e-7c5ef181a005)

![25](https://github.com/jinscodes/Blog_nextJS/assets/87598134/7ca9e4e3-22cf-4f95-8715-9f595db49970)

## console.table
In the case of an array containing objects with repeated and regular keys and values, it is possible to readably output in a table format like Excel.

All of the latest web browsers are supported functions, which are convenient for using the console to determine the contents of array data.

![26](https://github.com/jinscodes/Blog_nextJS/assets/87598134/7e3adb0b-80b4-430f-9c3f-32b9840c48cb)

![27](https://github.com/jinscodes/Blog_nextJS/assets/87598134/3bdddd18-5f40-4ee4-837a-c146dfb9ec86)

Not only array objects but also multidimensional arrays can be output in the form of a table.

![28](https://github.com/jinscodes/Blog_nextJS/assets/87598134/d3acb256-315c-4d1b-af8d-1030e2d732d9)

![29](https://github.com/jinscodes/Blog_nextJS/assets/87598134/68ca5568-7869-4d42-80ed-5e119ecfd4b0)

## console.dir
It is also fine to use this method if you need to log an object.

For example, if you output the body part of the DOM as it is in `console.log`, an html tag is output, but if you output it as `console.dir`, it can be confirmed that it is output to the console as a DOM object.

![30-0](https://github.com/jinscodes/Blog_nextJS/assets/87598134/64aed5cc-7c90-4741-a3ad-567ccc715a09)

![30](https://github.com/jinscodes/Blog_nextJS/assets/87598134/5194a44e-959f-442f-adcd-077780ec0952)

![31-0](https://github.com/jinscodes/Blog_nextJS/assets/87598134/ee07b830-414b-426e-8e18-fe83a911b627)

![31](https://github.com/jinscodes/Blog_nextJS/assets/87598134/8ce9227b-51a9-47ed-abf1-f75298278c39)

## console.trace
It automatically tracks the called function stack. It is advantageous to track functions if they are called from module files here and there.

![34](https://github.com/jinscodes/Blog_nextJS/assets/87598134/72e6472b-4e36-4466-a224-976c1a4b25ce)

![32](https://github.com/jinscodes/Blog_nextJS/assets/87598134/e16b5bc0-83ff-4124-a7fd-6282bb91b45e)

## console.count
It can be used when you want to record the number of times a specific called value has been called.

![34](https://github.com/jinscodes/Blog_nextJS/assets/87598134/cc28f683-9b11-40da-ae19-81d32f5359ad)

## console.clear
If the console screen is messy, it can be cleaned. If press the button at the top left of the picture below, it can be also cleaned.

![36](https://github.com/jinscodes/Blog_nextJS/assets/87598134/35616808-5656-4499-a15d-e6a05c507492)

![35](https://github.com/jinscodes/Blog_nextJS/assets/87598134/4218d2a1-c51a-40b9-9b13-6449abb77f4e)

---
[](https://www.syncfusion.com/blogs/post/11-console-methods-in-javascript-for-effective-debugging)

[](https://inpa.tistory.com/entry/%F0%9F%93%9A-%EB%8B%A4%EC%96%91%ED%95%9C-%EC%BD%98%EC%86%94-API)