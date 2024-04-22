What's the differences between transpile and compile?

In front-end development, we often refer to babel or typescripts, and we often use the term "compile" or "transpile" to describe them.

These two terms transpile and compile have been confused. 

## Compile
In the case of compile, it means converting source code written in one language into another.

For example, compiling is as follows.

> - Java ➡️ bytecode
> - C ➡️ assembly

## Transpile
Transpiling is the process of taking source code written in one language and transforming it into another language that has a similar level of abstraction.

> - es6 code ➡️ es5 code
> - C++ ➡️ C
> - coffescript ➡️ JavaScript


#### 💡 Q? Then, is it okay to misintrepret a transpile as a compile?  
Transfiler is also described as a source to source computer. It is also described as a type of compiler.

So the term compile falls into a larger category and there's a concept of transpile in it.

## Transpile vs Compile
Trans files and compilation are sometimes used in the same concept, but there are some differences.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/de930074-e0f6-4e33-8d9d-74ef906095f2)

Compiling coverts code into lower level executable file (machine code) for computers to execute. As we all know computer doesn't understand code they understand only binary data so, compilers are used to convert higher level of code(human understandable) to the binary file(machine understandable code). Examples of compiled languages are C, C++ and Java which after compiling generates bytecodes or assembly level language which is closer to binary files.

While, Transpiling can be referred as 'source to source' compiler which translates one higher level language to another higher level language. For example, Typescript is higher level language which after transpiling is converted to JavaScript which is also another higher level language. Babel for example can transpile JavaScript ES6 syntax into ES5 syntax to get support from all the older browsers.

---
[](https://stackoverflow.com/questions/44931479/compiling-vs-transpiling)

[](https://ideveloper2.tistory.com/166)

[](https://hashnode.com/post/compiling-vs-transpiling-cl0z2hugi0cjhj6nv6pp6a1j3)