## What's Currying?

Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.

This allows us to partially apply arguments and create new functions with fewer parameters.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/538065d1-2674-4709-99c1-2870664b3a26)

> In the wikipedia, it defines the currying like this:

> In mathematics and computer science, curring refers to the conversion of a function with multiple arguments (or tuples of multiple arguments) into a sequence of functions with a single argument.

## Currying In JS

#### Normal currying

![2](https://github.com/unionc/massive-mail-sender/assets/87598134/7adc8965-6a1c-4519-8ea6-3246ff04ddfd)

The above function operates in the following order.

1. The return value of `curry(func)` is the form of `function(a)`

2. When the function like `curriedSum(1)` is called, `1` is stored in the lexical environment and returns `function(b)`.

3. Returned function(b) is called with the argument 2. The return value is calss by being handed over to the orginal `sum`.

4. Finally, `sum(1, 2)` is called to return `1 + 2`, `3`.

> 💡 **What is lexical environment**  
> Lexical Envrionment is the special obejct that is created before `block`, `function`, and `script` is executed. It's the object that stores variables and functions within the scope to be executed as properties.

> In other words, while executing the source code, we find the value of the variable that needs to be referenced as a key in this object called Lexical Environment.

#### Currying Through Lodash

It's possible to make it simpler with lodash.

![3](https://github.com/unionc/massive-mail-sender/assets/87598134/5eadf4ff-84bf-4736-97e2-e5de75ba58d4)

---

[](https://en.wikipedia.org/wiki/Currying)

[](https://medium.com/@knowledge.4ward/currying-react-c7cfc44f5c78)

[](https://velog.io/@hustle-dev/Javascript-%EC%BB%A4%EB%A7%81%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90)
