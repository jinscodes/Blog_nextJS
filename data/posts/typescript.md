## Intro...
When I first worked at the company, I used JavaScript. Using JavaScript, I encountered various limitations such as redirection, status management, type management, and DOM manipulation. 

Knowing the limitations, I introduced a react, but even the react could not solve the type problem. Eventually, type scripts were introduced and used to solve the type problem. 

This article is a post about the various information needed to use TypeScript.

## Introduce TypeScript
JavaScript is a loosely typed language. It can be difficult to understand what types of data are being passed around in JavaScript.

In JavaScript, function parameters and variables don't have any information! So developers need to look at documentation, or guess based on the implementation.

TypeScript allows specifying the types of data being passed around within the code, and has the ability to report errors when the types don't match.

For example, TypeScript will report an error when passing a string into a function that expects a number. JavaScript will not.

### JavaScript...

JavaScript is a dynamic type language that has a high degree of freedom, low entry barriers, and high productivity, but has the disadvantage of errors (bugs) occurring during runtime or difficulties in communicating through code between team members.

For example, JavaScript makes its own judgment and produces results for the following deranged codes without any errors.

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/7086bc03-0007-413c-ac77-38820111f766)

**What the fu...**

**☕️ JavaScript..**

JavaScript induces developers to refrain from making errors and execute them as much as possible, resulting in the above results. This has the advantage of expanding productivity, but it has a very big disadvantage of emitting unintended bugs.

> 💡 Since Typescript's compilation is almost the same level of abstraction, it is technically transfile. However, most of the time, the transfer of code written in one language to another is collectively called compilation (compilation ⊃ transfile), so it can be considered for convenience.

There is another example. This is an error because this is no method called `hi()` in the `jay` object

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/21719435-b219-4f86-827e-3c4a1922319a)

The main point is when JavaScript spews the error.

In the picture above, the error occurs as the result of executing the wrong code called `nico.hi()`. This means that it isn't known if there is an incorrect code in the code until the code is executed.

### Typescript...
However, if using TypeScript above the code, the code editor itself will display error letters in advance to warn the developer before executing the code.

This means that errors can be checked while typing code in a compilation environment.

![](https://github.com/jinscodes/Blog_nextJS/assets/87598134/450a5fd9-3fe2-4675-9b91-a7677895c46e)

Before executing the code, the code editor displays an error in advance

Just as JavaScript is written as a file with a .js extension, TypeScript is written as a file with a .ts extension. After writing, it is a form that is compiled and used as a JavaScript file through a typeScript compiler.

And the compiled JavaScript code runs at runtime, such as a browser or node.js. Therefore, it can be said that TypeScript also serve as both a programming language and a compiler.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/ddfecd82-4038-44fa-a7f3-ef451728a764)

> 💡 TypeScript is both a library of JavaScript and another language of its own.


Usually, in the case of C or JAVA, compilation is done by the engine, but TypeScript has the disadvantage of compilation speed or very slow speed because compilation is done by the library.

---
[](https://www.w3schools.com/typescript/typescript_intro.php)

[](https://inpa.tistory.com/entry/TS-%F0%9F%93%98-TypeScript-%EC%86%8C%EA%B0%9C-%EA%B0%9C%EB%B0%9C-%ED%99%98%EA%B2%BD-%EC%84%A4%EC%A0%95-%EC%B4%9D%EC%A0%95%EB%A6%AC-tsconfig)