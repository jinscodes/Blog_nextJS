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

---
[](https://www.syncfusion.com/blogs/post/11-console-methods-in-javascript-for-effective-debugging)

[](https://inpa.tistory.com/entry/%F0%9F%93%9A-%EB%8B%A4%EC%96%91%ED%95%9C-%EC%BD%98%EC%86%94-API)