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

---
[](https://www.syncfusion.com/blogs/post/11-console-methods-in-javascript-for-effective-debugging)

[](https://inpa.tistory.com/entry/%F0%9F%93%9A-%EB%8B%A4%EC%96%91%ED%95%9C-%EC%BD%98%EC%86%94-API)