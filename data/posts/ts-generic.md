## What's Generic?
The reason why we use the repository of variables in programming is for flexibility in data values. The word variable refers to something that can change and vice versa, the constant is always fixed.
 
Based on this concept, the type we've used up to this point, number[] and string, has always been fixed and never changed. And a little bit of flexibility is added to this is the number | string | undefined union type.


*However, in this programming environment, the situation is not always fixed and does not flow as intended.*

It is in this industry that variables that can change when and where always occur.

Therefore, instead of specifying the type directly as a fixed value, a device that can code more flexibly through a type that can change at any time through a "variable" is needed, and this is the **generic** type to be dealt with today.

*Simply, it can be said that the type is a variable.*
 
Let's use the following code example to find out why generics should not be left out of type scripts.

We create a method called `add()`, which is a versatile multi-method that adds numbers to make integers and adds strings to make combined strings.
Since the two types of numbers and strings are handled at the same time, the simple one can be configured as follows through the union type.

```ts
function add(x: string | number, y: string | number): string | number {
   return x + y;
}

add(1, 2); // 3
add('hello', 'world'); // 'helloworld'
```

At first glance, there seems to be no problem, but there is a catch here.

The Union is the trap.

We intended `x: string, y: string`, or `x: number, y: number`, but there is a possibility that it could actually be `x: string, y: number`, or `x: number, y: string`.

Thus, the compiler catches these things smartly and informs us of the errors with red lines.

![1](https://github.com/jinscodes/Blog_nextJS/assets/87598134/b1548ae1-026b-471a-8799-8a9b685570c1)

---
[](https://inpa.tistory.com/entry/TS-%F0%9F%93%98-%ED%83%80%EC%9E%85%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-Generic-%ED%83%80%EC%9E%85-%EC%A0%95%EB%B3%B5%ED%95%98%EA%B8%B0)

[](https://www.typescriptlang.org/docs/handbook/2/generics.html)