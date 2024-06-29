## What's Currying?

Currying is a functional programming technique where a function with multiple arguments is transformed into a sequence of functions, each taking a single argument.

This allows us to partially apply arguments and create new functions with fewer parameters.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/538065d1-2674-4709-99c1-2870664b3a26)

> In the wikipedia, it defines the currying like this:

> In mathematics and computer science, curring refers to the conversion of a function with multiple arguments (or tuples of multiple arguments) into a sequence of functions with a single argument.

## Currying In JS

#### Normal currying

![2](https://github.com/jinscodes/Blog_nextJS/assets/87598134/c6b64018-9bf7-4bf5-a1b2-df3dabe0e52d)

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

![3](https://github.com/jinscodes/Blog_nextJS/assets/87598134/4d9453d8-eda6-4f04-bf84-a6bea037bb7f)

We defined `curriedSum` by transferring the function to an argument using `_.curry`, rather than having to define the curry function directly by the user using the rhodash library.

#### Currying To Get Object Data

**Not to use Currying**

![4](https://github.com/jinscodes/Blog_nextJS/assets/87598134/8e61f3a9-1d49-4a7c-b1e4-ff54544b1bb6)

In general, if you write the code, you write it as above. If you apply curring here, you can write the code as below.

**Use Currying**

![5](https://github.com/jinscodes/Blog_nextJS/assets/87598134/246d47fe-4c5c-447a-8b34-5e5d64342b90)

When using curring, the order of factors is important, and it is said that it is important to design the code with this order because the preceding factors are less likely to fluctuate and the latter factors are more likely to fluctuate.

## Usage Currying In React

1️⃣ Creating Curried Functions

In react, this can be especially handy when dealing with event handlers or utility functions.

2️⃣ Partial Application

By partially applying arguments to a curried function, we can create new functions that have some arguments already set. This helps reduce repetitive code and promotes code reusability.

3️⃣ Example in React

Instead of writing separate event handlers for each input field, we can use currying to create a single event handler that dynamically updates the state based on the input field.

![6](https://github.com/jinscodes/Blog_nextJS/assets/87598134/4fa672bc-2cca-493a-ab95-928ecaa87960)

`handleChange` is a curried function that takes fieldName as the first argument and returns another function that takes the event object.

This way, we can create specific event handlers by partially applying the `fieldName`.

By utilizing currying, we can eliminate repetitive code and improve the maintainability of our React components.

---

[](https://en.wikipedia.org/wiki/Currying)

[](https://medium.com/@knowledge.4ward/currying-react-c7cfc44f5c78)

[](https://velog.io/@hustle-dev/Javascript-%EC%BB%A4%EB%A7%81%EC%97%90-%EB%8C%80%ED%95%B4-%EC%95%8C%EC%95%84%EB%B3%B4%EC%9E%90)

[](https://developer-alle.tistory.com/407)
